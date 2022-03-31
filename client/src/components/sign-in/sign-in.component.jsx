import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  emailSignInStart
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

const SignIn = ({ emailSignInStart}) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const { email, password } = userCredentials;

  const isValid = useCallback((key, value) => {
    switch(key) {
      case 'password' : 
      
        if(/\s/.test(value)) 
          return {status: false, message: 'Password cannot have spaces.'};
        if(value.length < 6) 
          return {status: false, message: 'Password should have minimum 6 characters.'};
          
        const alphanumbericPattern = /^(?=.*[0-9])(?=.*[a-zA-Z]).{0,}$/;
        if(!alphanumbericPattern.test(value)) 
          return { status: false, message: 'Must have a number and alphabet.'};
        break;

      case 'email' :
        if(!(value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)))
          return { status: false, message: 'Please enter a valid email address.'};
        break;
      default : 
        return {status: true, message:''};
    }
    return {status: true, message:''};
  }, []);

  
  const handleSubmit = async event => {
    event.preventDefault();
    for (let key in errors) {
      if(errors[key]) return;
    }
    emailSignInStart(email, password);
  };

  const handleChange = useCallback(event => {
    const { value, name } = event.target;
    const valid = isValid(name, value);
    if(!valid.status) {
      setErrors(previousState => {
        return { ...previousState, [name]: valid.message }
      });
    } else if(errors[name] !== "") {
      setErrors(previousState => {
        let newState = {...previousState};
        delete newState[name];
        return newState;  
      });
    }

    setCredentials({ ...userCredentials, [name]: value });
  }, [errors, userCredentials, isValid]);

  return (
    <>
    <SignInContainer>
      <SignInTitle>Login</SignInTitle>
      <span style={{lineHeight: 1.5, fontSize: '1.6rem'}}>Get Access to your Orders, Wishlist and Recommendations</span>
    </SignInContainer>

    <SignInContainer formcontainer>
      <form onSubmit={handleSubmit} aria-label="form">
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          placeholder='Email'
          required
          aria-required="true"
          aria-labelledby="email"
          error={errors.email ? errors.email : ''}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={'emailError'}
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          placeholder='Password'
          required
          aria-required="true"
          aria-labelledby="password"
          error={errors.password ? errors.password : ''}
          aria-invalid={errors.password ? "true" : "false"}
          aria-describedby={'passwordError'}
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'> Login </CustomButton>
        </ButtonsBarContainer>
      </form>
  </SignInContainer>
  </>
  );
};

const mapDispatchToProps = dispatch => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
