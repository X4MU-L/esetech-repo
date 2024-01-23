import { NotesDisplay } from '../components/notes_display';
import CreateNotes from './CreateNotes';

const NotesPage = () => {
  return (
    <div className='font-open_sans w-full h-full relative grid grid-cols-2 text-xl text-primary font-bold bg-lightGray'>
      <CreateNotes />
      <NotesDisplay />
    </div>
  );
};
export default NotesPage;
