import React, { useContext, useEffect, useRef, useState } from 'react';
import Button from '../components/reusable/Button';
import { UserStateContext } from '../context/AppContext';
import { BASE_HOST } from '../constants';

const CreateNotes = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const [textAreaError, setTextAreaError] = useState<boolean>(false);
  const state = useContext(UserStateContext)!;
  const user = state[Object.keys(state)[0]];
  const [note, setNote] = useState<string>('');

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const values = Object.fromEntries(formdata);
    const newObject: object = {
      ...values,
      createdBy: `${user.first_name} ${user.last_name}`,
      userId: Object.keys(state)[0],
      createdAt: Date.now(),
      updatedAt: Date.now(),
      versionId: '',
    };

    try {
      const noteCreated = await fetch(`${BASE_HOST}/notes/create_notes`, {
        method: 'POST',
        body: JSON.stringify(newObject),
        headers: {
          'Content-TYpe': 'application/json',
        },
      });

      const response = await noteCreated.json();
      console.log(response);
      e.currentTarget.reset();
      setNote('');
    } catch (err) {
      console.log(err);
    }
  };

  // handle word limit
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setNote(text);
  };

  // change view on blur of textarea
  useEffect(() => {
    setFocus((prevFOcus) => !prevFOcus);
  }, [textAreaRef.current?.blur]);

  useEffect(() => {
    const func = async () => {
      await new Promise((res) => {
        setTimeout(() => {
          res(setTextAreaError(false));
        }, 800);
      });
    };
    func();
  }, [textAreaError]);

  return (
    <form className=' w-full flex flex-col' onSubmit={handleSubmit}>
      <h2>
        Welcome Back {user.first_name} {user.last_name}
      </h2>
      <h4 className='text-4xl leading-[50.4px] font-extrabold font-raleway'>
        Create Notes
      </h4>

      <div className='w-full relative flex flex-col h-full text-base leading-[160%] font-semibold'>
        <textarea
          ref={textAreaRef}
          value={note}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(false)}
          onInput={handleTextAreaChange}
          className={`
            ${textAreaError ? 'border-danger' : 'border-transparent'}
            w-full max-h-[789px] transition delay-[45] ease-in-out duration-500 border rounded-[8px] flex-1 resize-none placeholder:text-gray bg-transparent h-full  outline-none`}
          name='notes'
          id='notes'
          placeholder='Start Typing...'
        ></textarea>
        {/* <div
            className={`${
              errorState ? ' translate-y-0' : ' translate-y-full'
            }  transition delay-[45] ease-in-out duration-200
          absolute flex items-center justify-center right-0 left-0 bottom-0 top-0 bg-lightGray`}
          ></div> */}
      </div>
      <div className='mt-auto'>
        <Button type='submit' text='Submit' isDisabled={false} bg='' />
      </div>
    </form>
  );
};
export default CreateNotes;
