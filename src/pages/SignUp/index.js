import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from '../SignIn/styles';


export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp() {
    signUp(email, password, nome);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enable
      >

        <AreaInput>
          <Input
            placeholder='Nome'
            autoCorrect={false}
            autoCaptalize='none'
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder='Email'
            autoCorrect={false}
            autoCaptalize='none'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder='Password'
            autoCorrect={false}
            autoCaptalize='none'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#fff" />
            ) : (
              <SubmitText>Cadastrar</SubmitText>
            )
          }
        </SubmitButton>

      </Container>
    </Background>
  );
}