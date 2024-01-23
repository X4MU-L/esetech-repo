import { useEffect } from 'react';
import { BASE_HOST } from '../../constants';
import NoteItem from './NoteItem';
import NoteHistoryItem from './NotesHistoryItem';
import NoteHistoryDisplay from './NoteHistoryDisplay';

const NotesDisplay = () => {
  const getAllNotes = async () => {
    const allNote = await fetch(`${BASE_HOST}/notes`);
    console.log(await allNote.json());
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div className=' max-h-[100%] overflow-y-scroll'>
      <div>hello</div>
      <div className='grid grid-cols-2 gap-2'>
        <div className='flex items-start flex-col gap-3'>
          {Array.from({ length: 10 }).map((_item) => (
            <NoteItem />
          ))}
        </div>
        <NoteHistoryDisplay />
      </div>
    </div>
  );
};
export default NotesDisplay;
