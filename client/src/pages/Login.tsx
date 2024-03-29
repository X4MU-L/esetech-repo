import React, { ChangeEvent, useState, useContext } from 'react';
import { SignInValues, User } from '../types';
import Input from '../components/reusable/Input';
import { UserDispatchContext, dispatchToStorage } from '../context/AppContext';
import { auth, firestore } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';

const initialFormValues: SignInValues = {
  email: '',
  password: '',
};

interface FirbaseError {
  code: string;
  message: string;
}

const Login: React.FC = () => {
  const [formvalues, setFormValues] = useState<SignInValues>(initialFormValues);
  const dispatch = useContext(UserDispatchContext);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const { email, password } = Object.fromEntries(
      new FormData(form)
    ) as unknown as SignInValues;

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userRef = await getDoc(doc(firestore, 'users', user.uid));
      if (userRef) {
        if (userRef.exists()) {
          const data = userRef.data();
          dispatchToStorage(dispatch, { [user.uid]: data as User });
        }
      }

      navigate('/create_notes');
    } catch (err: unknown) {
      console.log((err as FirbaseError).code);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='form-group max-w-md w-full m-auto flex flex-col gap-6 bg-slate-800 rounded-3xl p-3 '
    >
      <Input
        setValue={handleChange}
        value={formvalues.email}
        name='email'
        placeholder='enter email'
        type='text'
      />
      <Input
        setValue={handleChange}
        value={formvalues.password}
        name='password'
        placeholder='enter pasword'
        type='password'
      />
      <div className='m-auto text-white'>
        Don't have an account{' '}
        <Link
          className=' transition-all duration-100 ease-in-out hover:font-bold text-[#209677]'
          to='/signup'
        >
          sign up
        </Link>
      </div>

      <button
        type='submit'
        className='p-2 bg-[#209677] text-white flex justify-center rounded-3xl w-1/3 mx-auto '
      >
        log in
      </button>
    </form>
  );
};

export default Login;
