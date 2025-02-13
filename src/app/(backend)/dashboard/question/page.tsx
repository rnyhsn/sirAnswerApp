import PageTitle from '@/components/backend/PageTitle'
import { deleteQuestion, getQuestions } from '@/utils/actions/question'
import Link from 'next/link'
import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'

const QuestionPage = async () => {
  const questionResp = await getQuestions();
  if(questionResp?.success && questionResp?.statusCode === 400) {
    return  <div className="h-[400px] w-full flex items-center justify-center flex-col gap-6">
    <h1 className="text-4xl font-bold text-gray-500"> {questionResp?.message} </h1>
    <Link href="/dashboard/question/add" className="text-xl px-8 py-2 rounded-md font-semibold bg-btnPrimary text-white">Add Question</Link>
</div>
  }
  return (
    <div>
      <PageTitle title="Questions" link="/dashboard/question/add" />
      <div className="p-4 rounded-md bg-bgLightSecondary dark:bg-bgDarkSecondary">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr>
                    <th>
                      #S.N.
                    </th>
                    <th> Question </th>
                    <th> Qstnr Answered </th>
                    <th> Categories </th>
                    <th>Answer Count</th>
                    <th> Actions </th>
                  </tr>
                </thead>
                <tbody>
                {
                  questionResp?.success && questionResp.statusCode === 200 && questionResp?.payload?.map((question: any, i) => (
                    <tr className="odd:dark:bg-bgDarkPrimary odd:bg-bgLightPrimary" key={i}>
                    <td className="py-1.5 pl-2"> {i+1} </td>
                    <td className="font-medium w-[450px]"> {question.question} </td>
                    <td className="text-blue-500"> {question.answer ? "Yes": "No"}  </td>
                    <td className="flex flex-wrap gap-2">
                    {
                     question.categories.map((cat: any, index: number) => (
                        <span key={index} className="even:text-blue-200 odd:text-purple-400" > {cat.name} </span>
                     ))
                    }
                    </td>
                    <td> counts </td>
                    <td className="flex items-center gap-1.5 justify-center pt-2">
                      <FaRegEdit className="text-green-500" />
                      <form action={deleteQuestion}>
                        <input type="hidden"  name="id" value={question._id.toString()} />
                        <button>
                        <FaRegTrashCan className="text-red-500" />
                        </button>
                      </form>
                    </td>
                  </tr>
                  ))
                }
                     
                
                </tbody>
              </table>
            </div>
    </div>
  )
}

export default QuestionPage
