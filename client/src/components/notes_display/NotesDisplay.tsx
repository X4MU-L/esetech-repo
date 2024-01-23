import { useEffect, useState } from 'react';
import { BASE_HOST } from '../../constants';
import NoteItem from './NoteItem';
import NoteHistoryItem from './NotesHistoryItem';
import NoteHistoryDisplay from './NoteHistoryDisplay';
import { Notes } from '../../types';

const NotesDisplay = () => {
  const [notes, setNotes] = useState<Array<Notes>>([]);
  const getAllNotes = async () => {
    const allNote = await fetch(`${BASE_HOST}/notes`);
    const { data } = (await allNote.json()) as unknown as { data: Notes[] };
    setNotes(data);
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div className=' max-h-[100%]  h-full'>
      <div className='grid grid-cols-2 gap-2'>
        <div className=' h-calch'>
          <div>
            <h4>All Notes</h4>
          </div>
          <div className='flex items-start flex-col gap-3 overflow-y-scroll h-[95%] mt-auto'>
            {notes.map((note) => (
              <NoteItem key={note.id} {...note} />
            ))}
          </div>
        </div>
        <NoteHistoryDisplay />
      </div>
    </div>
  );
};
export default NotesDisplay;
