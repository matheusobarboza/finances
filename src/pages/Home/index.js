import React, { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';

import { Background, Container, Nome, Saldo, Title, List } from './styles.js';

export default function Home() {

  const { user } = useContext(AuthContext);

  const [historico, setHistorico] = useState([
    {key: 1, tipo: 'receita', valor: 1200},
    {key: 2, tipo: 'despesa', valor: 500},
    {key: 3, tipo: 'Receita', valor: 89.90},
    {key: 4, tipo: 'despesa', valor: 750},
  ]);

 return (
   <Background>
     <Header />
     <Container>
       <Nome>{user.nome}</Nome>
       <Saldo>R$ 123,00</Saldo>
     </Container>

     <Title>Últimas movimentações</Title>

     <List 
      showsVerticalScrollIndicator={false}
      data={historico}
      keyExtractor={ item => item.key }
      renderItem={ ({ item }) => ( <HistoricoList data={item} /> ) }
     />
   </Background>
  );
}