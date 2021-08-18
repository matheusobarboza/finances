import React, { useContext, useState, useEffect } from 'react';
import { format, isBefore } from 'date-fns';
import { Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';

import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';

import { Background, Container, Nome, Saldo, Title, List, Area } from './styles.js';

export default function Home() {

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  const [newDate, setNewDate] = useState(new Date());

  const [historico, setHistorico] = useState();
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) =>{
        setSaldo(snapshot.val().saldo);
      })

      await firebase.database().ref('historico')
      .child(uid)
      .orderByChild('date').equalTo(format(newDate, 'dd/MM/yyyy'))
      .limitToLast(10).on('value', (snapshot) => {
        setHistorico([]);

        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            tipo: childItem.val().tipo,
            valor: childItem.val().valor,
            date: childItem.val().date,
          };

          setHistorico(oldArray => [...oldArray, list].reverse());
        })
      })
    }

    loadList();
  }, [])

  function handleDelete(data) {
    //Pegando data do item
    const [diaItem, mesItem, anoItem] = data.date.split('/');
    const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`);

    //Pegando data de hoje
    const formatDiaHoje = format(new Date(), 'dd/MM/yyyy');
    const [diaHoje, mesHoje, anoHoje] = formatDiaHoje.split('/');
    const dateHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`);
    
    if(isBefore(dateItem, dateHoje)){
      //Se a data do registro já passou vai entrar aqui
      alert('Você não pode excluir um registro antigo!')
      return;
    }

    Alert.alert(
      'Cuidado Atenção!',
      `Você deseja excluir ${data.tipo} - Valor: ${data.valor}`,
      [
        {
          text: 'Cancelar',
          styles: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )
  }

  async function handleDeleteSuccess(data) {
    await firebase.database().ref('historico')
    .child(uid).child(data.key).remove()
    .then( async () => {
      let saldoAtual = saldo;
      data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor);

      await firebase.database().ref('users').child(uid)
      .child('saldo').set(saldoAtual);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function handleShowPicker() {
    
  }

 return (
   <Background>
     <Header />
     <Container>
       <Nome>{user && user.nome}</Nome>
       <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1. ')}</Saldo>
     </Container>

    <Area>
      <TouchableOpacity onPress={handleShowPicker}>
        <Icon name="event" color="#fff" size={30} />
      </TouchableOpacity>
      <Title>Últimas movimentações</Title>
    </Area>

     <List 
      showsVerticalScrollIndicator={false}
      data={historico}
      keyExtractor={ item => item.key }
      renderItem={ ({ item }) => ( <HistoricoList data={item} deleteItem={handleDelete}/> ) }
     />
   </Background>
  );
}