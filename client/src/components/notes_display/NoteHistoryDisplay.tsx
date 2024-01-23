import { useRef, useState } from 'react';
import NoteHistoryItem from './NotesHistoryItem';

export default function NoteHistoryDisplay() {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [hasShadow, setHasShadow] = useState(false);

  const handleScroll = () => {
    const scrollableElement = scrollableRef.current;

    if (scrollableElement) {
      // Check if the element is scrolled down (you can adjust the threshold as needed)
      const isScrolled = scrollableElement.scrollTop > 0;
      console.log(scrollableElement.scrollTop);
      // Update the state to control the shadow
      setHasShadow(isScrolled);
    }
  };

  return (
    <div className=' h-calch'>
      <div className={`${hasShadow ? 'shadow-in' : ''}`}>
        <h4>File History</h4>
      </div>
      <div
        className='flex items-start flex-col gap-3 overflow-y-scroll h-[95%] mt-auto'
        onScroll={handleScroll}
        ref={scrollableRef}
      >
        {Array.from({ length: 16 }).map((_item, i, array) => (
          <NoteHistoryItem
            index={i}
            key={`NoteHistory-${i}`}
            lastChild={array.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
