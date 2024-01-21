import React, { ChangeEvent, useState } from 'react';
import { SignUpvalues } from '../types';
import Input from '../components/reusable/Input';
import { BASE_HOST } from '../constants';
import { Link, useNavigate } from 'react-router-dom';

const initialFormValues: SignUpvalues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
};

const SignUp: React.FC = () => {
  const [formvalues, setFormValues] = useState<SignUpvalues>(initialFormValues);
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formdata = Object.fromEntries(new FormData(form));
    try {
      fetch(`${BASE_HOST}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      })
        .then((res) => res.json())
        .then((data: unknown & { status: string }) => {
          if (data.status === 'success') {
            setFormValues(initialFormValues);
            navigate('/login');
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='form-group max-w-md w-full m-auto flex flex-col gap-6 bg-slate-800 rounded-3xl p-3 '
    >
      {Object.keys(initialFormValues).map((item) => (
        <Input
          key={item}
          setValue={handleChange}
          value={formvalues[item as keyof typeof initialFormValues]} // update already happened - can pass down value
          name={item}
          placeholder={item}
          type={item === 'password' ? 'password' : 'text'}
        />
      ))}
      <div className='m-auto text-white'>
        Already have an account?{' '}
        <Link
          className=' transition-all duration-100 ease-in-out hover:font-bold text-[#209677]'
          to='/login'
        >
          log in
        </Link>
      </div>

      <button
        type='submit'
        className='p-2 bg-[#209677] text-white flex justify-center rounded-3xl w-1/3 mx-auto '
      >
        Sign up
      </button>
    </form>
  );
};

export default SignUp;
