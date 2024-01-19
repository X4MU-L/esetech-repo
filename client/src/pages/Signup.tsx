import React from 'react';
// import { SignUpComponent } from '../components/pageComponents/signup/index';

const SignUp: React.FC = () => {
  return (
    <form>
      <label htmlFor='first_name'>
        First Name
        <input type='text' id='first_name' />
      </label>
      <label htmlFor='first_name'>
        First Name
        <input type='text' id='first_name' />
      </label>
      <label htmlFor='last_name'>
        Last Name
        <input type='text' id='last_name' />
      </label>
      <label htmlFor='email'>
        email
        <input type='text' id='email' />
      </label>
      <label htmlFor='password'>
        Password
        <input type='text' id='password' />
      </label>
    </form>
  );
};

export default SignUp;
