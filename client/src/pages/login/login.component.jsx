import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import { LoginContainer } from './login.styles';

const LoginPage = () => (
  <LoginContainer>
    <SignIn />
  </LoginContainer>
);

export default LoginPage;
