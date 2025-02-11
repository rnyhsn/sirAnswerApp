'use client';
import { useState } from 'react';
import QuestionModal from '../body/QuestionModal';

const CreateBtn = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button onClick={()=> setOpenModal(true)} className="px-4 py-2 bg-btnPrimary rounded-md flex gap-1.5 items-center font-semibold">
        Create 
     </button>
     {
        openModal && 
        <QuestionModal setOpen={setOpenModal} />
     }
    </>
  )
}

export default CreateBtn
