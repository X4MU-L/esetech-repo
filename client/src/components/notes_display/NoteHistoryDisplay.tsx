import NoteHistoryItem from './NotesHistoryItem';

export default function NoteHistoryDisplay() {
  return (
    <div className='flex items-start flex-col gap-3'>
      {Array.from({ length: 10 }).map((_item, i) => (
        <NoteHistoryItem index={i} key={`NoteHistory-${i}`} />
      ))}
    </div>
  );
}
