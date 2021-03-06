import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';

import { Container, Nome, Email, NewLink, NewText, Logout, LogoutText } from './styles';

export default function Profile() {
  const navigation = useNavigation();

  const { user, signOut } = useContext(AuthContext);

 return (
   <Container>

     <Header />
     <Nome>{user.nome}</Nome>
     <Email>{user.email}</Email>

     <NewLink onPress={() => navigation.navigate("Registrar")}>
       <NewText>Registrar gastos</NewText>
     </NewLink>
     
   </Container>
  );
}