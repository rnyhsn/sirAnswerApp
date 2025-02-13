'use client';
import { useState } from 'react';
import QuestionModal from '../body/QuestionModal';
import { useRouter } from 'next/navigation';

const CreateBtn = ({user}: {user?: {name: string, email: string}}) => {
    const [openModal, setOpenModal] = useState(false);
    const router = useRouter();
    console.log("User in create btn");

    const handleCreateQuestion = () => {
      if(!user) {
        router.push("/login");
        return;
      }
      setOpenModal(true)
    }
  return (
    <>
      <button onClick={handleCreateQuestion} className="px-4 py-2 bg-btnPrimary rounded-md flex gap-1.5 items-center font-semibold">
        Post Question
     </button>
     {
        openModal && 
        <QuestionModal setOpen={setOpenModal} />
     }
    </>
  )
}

export default CreateBtn
