export default function NoteHistoryItem({ index }: { index: number }) {
  return (
    <div className=' first:bg-[rgb(246,250,254)] p-2 grid grid-flow-col-dense gap-3  w-full relative bg-white  text-[#aeabab]'>
      <div
        className={`tip ${
          index === 0
            ? 'before:border-t-[#4646463c] bg-[#28bf96]'
            : 'before:border-t-[#6d6d6d3c] bg-[#52525293]'
        } `}
      ></div>
      <div className='flex flex-col justify-center gap-1 max-w-[95%] w-full overflow-hidden'>
        <p className='text-xs font-normal text-slate-800 whitespace-nowrap overflow-ellipsis w-full overflow-hidden'>
          Version 5 edited by Mike Ucheoma
        </p>
        <p className='text-xs font-thin text-slate-800 whitespace-nowrap overflow-ellipsis w-full overflow-hidden'>
          Edited on 03/30/23 - 4:59
        </p>
        <p className='text-xs font-bold whitespace-nowrap overflow-ellipsis w-full overflow-hidden'>
          This was the new text added and also all that was given
        </p>
      </div>
      <span
        className={`${
          index === 0 ? 'bg-[#60ef895d]' : 'bg-[#6d6d6d3c]'
        } self-start px-1 py-0.5 flex items-center justify-center rounded-full text-sm font-thin text-[#171717]`}
      >
        {index === 0 ? 'active' : 'archived'}
      </span>
    </div>
  );
}
