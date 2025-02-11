import { getCategories } from "@/utils/actions/category";
import Category from "./Category"

let categories = [
    {
        title: "Subject One",
        slug: "subject-one",
    },
    {
        title: "Subject Two",
        slug: "subject-two",
    },
    {
        title: "Subject Three",
        slug: "subject-three",
    },
    {
        title: "Subject Four",
        slug: "subject-four",
    },
    {
        title: "Subject Five",
        slug: "subject-five",
    },
    {
        title: "Subject Sixteen",
        slug: "subject-sixteen",
    },
    {
        title: "Subject Six",
        slug: "subject-six",
    },
    {
        title: "Subject Seven",
        slug: "subject-seven",
    },
    {
        title: "Subject Eight",
        slug: "subject-eight",
    },
    {
        title: "Subject Nine",
        slug: "subject-nine",
    },
    {
        title: "Subject Ten",
        slug: "subject-ten",
    },
    {
        title: "Subject Eleven",
        slug: "subject-eleven",
    },
    {
        title: "Subject Twelve",
        slug: "subject-twelve",
    },
    {
        title: "Subject Thirteen",
        slug: "subject-thirteen",
    },
    {
        title: "Subject Fourteen",
        slug: "subject-fourteen",
    },
    {
        title: "Subject Ten",
        slug: "subject-ten",
    },
    {
        title: "Subject Eleven",
        slug: "subject-eleven",
    },
    {
        title: "Subject Twelve",
        slug: "subject-twelve",
    },
    {
        title: "Subject Thirteen",
        slug: "subject-thirteen",
    },
    {
        title: "Subject Fourteen",
        slug: "subject-fourteen",
    },
]

const LeftSidebar = async () => {
     const categoryResp = await getCategories();
      if(!categoryResp.success && categoryResp.statusCode === 401) {
        return <h1 className="text-xl text-gray-300"> {categoryResp.message} </h1>
      }
  return (
    <div className="w-[18%] bg-bgLightSecondary dark:bg-bgDarkSecondary px-4">
      <h2 className="text-btnLink text-xl font-semibold border-b border-gray-600">Subject</h2>
      <div className="flex flex-col gap-2">
      {
         categoryResp.success && categoryResp.statusCode === 200 && categoryResp.payload?.map((category: any, index) => (
              <Category title={category?.name} slug={category?.slug} key={index} />
            ))
      }
    </div>
    </div>
  )
}

export default LeftSidebar
