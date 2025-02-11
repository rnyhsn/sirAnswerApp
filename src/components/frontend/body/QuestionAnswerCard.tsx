import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";


const QuestionAnswerCard = () => {
  return (
    <div className="w-full px-5 py-5 rounded-md bg-bgLightSecondary dark:bg-bgDarkSecondary flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div>Category Name</div>
        <BsThreeDotsVertical />
      </div>
      <p className="text-btnLink"> by the Questioner </p>
      <div className="flex flex-col">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore perspiciatis laborum quibusdam natus dolor doloribus dolorem fugiat debitis minima deserunt autem, accusamus illum dolores minus saepe pariatur fuga sunt asperiores recusandae, alias tempora</p>
        <button className="self-end px-4 py-1.5 text-sm border border-gray-500 rounded-md mt-4">Read More</button>
      </div>
      <button className="flex items-center gap-1.5 px-4 py-2 bg-btnPrimary rounded-md text-sm w-max hover:bg-btnPrimary/90">
        <FaRegEdit />
        Answer
      </button>
    </div>
  )
}

export default QuestionAnswerCard
