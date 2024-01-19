import React from 'react';
// import { SignUpComponent } from '../components/pageComponents/signup/index';

const SignUp: React.FC = () => {
  return (
    <form>
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
