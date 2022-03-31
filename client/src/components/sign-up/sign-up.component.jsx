import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { firstName, lastName, email, password, confirmPassword } = userCredentials;
  const [errors, setErrors] = useState({});

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

      case 'confirmPassword': 
        if(password != value) {
          return { status: false, message: 'Password do not match.'};
        }
        break;
      case 'email' :
        if(!(value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)))
          return { status: false, message: 'Please enter a valid email address.'};
        break;
      default :
        return {status: true, message:''};    
    }
    return {status: true, message:''};
  }, [password]);


  const handleSubmit = async event => {
    event.preventDefault();

    for (let key in errors) {
      if(errors[key]) return;
    }

    signUpStart({ firstName, lastName, email, password });
  };

  const handleChange = useCallback(event => {
    const { name, value } = event.target;
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

    setUserCredentials({ ...userCredentials, [name]: value });
  }, [errors, userCredentials, isValid]);

  return (
    <>
    <SignUpContainer>
      <SignUpTitle>Signup</SignUpTitle>
      <span style={{lineHeight: 1.5, fontSize:"1.6rem"}}>We do not share your personal details with anyone.</span>
    </SignUpContainer>
    <SignUpContainer formcontainer>
      <form onSubmit={handleSubmit} aria-label="form">
        <FormInput
          type='text'
          name='firstName'
          value={firstName}
          onChange={handleChange}
          label='First Name'
          placeholder='First Name'
          required
          aria-required="true"
          aria-labelledby="firstName"
        />
        <FormInput
          type='text'
          name='lastName'
          value={lastName}
          onChange={handleChange}
          label='Last Name'
          placeholder='last Name'
          required
          aria-labelledby="lastName"
          aria-required="true"
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
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
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          placeholder='Password'
          required
          aria-required="true"
          aria-labelledby="password"
          error={errors.password ? errors.password : ''}
          aria-invalid={errors.password ? "true" : "false"}
          aria-describedby={'passwordError'}
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          placeholder='Confirm Password'
          required
          aria-required="true"
          aria-labelledby="confirmPassword"
          error={errors.confirmPassword ? errors.confirmPassword : ''}
          aria-invalid={errors.confirmPassword ? "true" : "false"}
          aria-describedby={'confirmPasswordError'}
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
