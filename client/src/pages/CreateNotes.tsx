import React, { useEffect, useRef, useState } from 'react';
import Button from '../components/reusable/Button';

interface wordsAndCount {
  content: string;
  count: number;
}
const numWords = 1000;

const CreateNotes = () => {
  const [focus, setFocus] = useState<boolean>(false);

  const [errorState, setErrorState] = useState<boolean>(false);
  const [textAreaError, setTextAreaError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [{ count, content }, setWordCount] = useState<wordsAndCount>({
    content: '',
    count: 0,
  });

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (count !== numWords) {
      setTextAreaError(true);
      return;
    }
    const formdata = new FormData(e.currentTarget);
    const values = Object.fromEntries(formdata);
    const newObject: object = {
      ...values,
    };
    setSuccess(true);
    e.currentTarget.reset();
    console.log(newObject);
  };

  // handle word limit
  const handleWordLimit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = text.split(' ').filter(Boolean);
    if (words.length >= numWords) {
      setWordCount({
        content: words.slice(0, numWords).join(' '),
        count: numWords,
      });
    } else {
      setWordCount({
        content: text,
        count: words.length,
      });
    }
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
    <div className='font-open_sans h-full relative grid grid-cols-2 text-xl text-primary font-bold bg-lightGray'>
      <form className=' py-6 pl-6 w-full flex flex-col' onSubmit={handleSubmit}>
        <h4 className='text-4xl leading-[50.4px] font-extrabold font-raleway'>
          Create Notes
        </h4>

        <div className='w-full relative flex flex-col h-full text-base leading-[160%] font-semibold'>
          <textarea
            ref={textAreaRef}
            value={content}
            onFocus={() => setFocus(!focus)}
            onBlur={() => setFocus(false)}
            onInput={handleWordLimit}
            className={`
            ${textAreaError ? 'border-danger' : 'border-transparent'}
            w-full max-h-[789px] transition delay-[45] ease-in-out duration-500 border rounded-[8px] flex-1 resize-none placeholder:text-gray bg-transparent h-full  outline-none`}
            name='essay'
            id='essay'
            placeholder='Start Typing...'
          ></textarea>
          <div
            className={`${
              errorState ? ' translate-y-0' : ' translate-y-full'
            }  transition delay-[45] ease-in-out duration-200
          absolute flex items-center justify-center right-0 left-0 bottom-0 top-0 bg-lightGray`}
          ></div>
        </div>

        <div className='mt-auto'>
          <Button type='submit' text='Submit' isDisabled={false} bg='' />
        </div>
      </form>
      <div></div>
    </div>
  );
};
export default CreateNotes;
