export default function NoteItem() {
  return (
    <div className='border p-2 grid grid-flow-col-dense gap-3 max-w-sm w-full rounded-lg bg-[rgb(246,250,254)] border-[#4d91e2] text-[#b7b7b7]'>
      <div className='w-16 h-16 rounded-xl even:bg-[#28bf96] odd:bg-[#0060d5] flex items-center justify-center'>
        <span>VH</span>
      </div>
      <div className='flex flex-col justify-center gap-1'>
        <p className='text-base'>Created by Micheak James</p>
        <p className='text-sm'>Today at 32:32PM</p>
      </div>
      <span className=''>...</span>
    </div>
  );
}
