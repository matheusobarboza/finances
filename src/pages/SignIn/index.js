import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import { 
  Background, 
  Container, 
  Logo, 
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText 
} from './styles'; 

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
  }
  
  return (
    <Background>
      <Container
        behavior={ Platform.OS === 'ios' ? 'padding' : '' }
        enable
      >
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input
            placeholder='Email'
            autoCorrect={false}
            autoCaptalize='none'
            value={email}
            onChangeText={ (text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder='Password'
            autoCorrect={false}
            autoCaptalize='none'
            value={password}
            onChangeText={ (text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={ () => navigation.navigate('SignUp') }>
          <LinkText>Criar uma conta!</LinkText>
        </Link>

      </Container>
    </Background>
  );
}