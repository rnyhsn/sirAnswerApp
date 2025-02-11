import { GoSearch } from "react-icons/go";


const QuestionSearch = () => {
  return (
    <div className="bg-bgLightSecondary dark:bg-bgDarkSecondary px-4 py-2 rounded-md flex flex-col gap-3">
      <h2 className="text-2xl font-semibold">Still have any Question?</h2>
      <div className="flex gap-2 items-center px-3 py-2 rounded-sm bg-bgLightPrimary dark:bg-bgDarkPrimary">
        <GoSearch /> 
        <input type="text" placeholder="Search" className="flex-1 bg-transparent outline-none" />
      </div>
      <button className="bg-btnPrimary text-white rounded-md px-4 py-2 w-max self-center font-semibold">Find More Answers</button>
    </div>
  )
}

export default QuestionSearch
