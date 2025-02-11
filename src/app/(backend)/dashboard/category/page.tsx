import PageTitle from '@/components/backend/PageTitle'
import { deleteCategory, getCategories } from '@/utils/actions/category'
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";


const CategoryPage = async () => {
  const categoryResp = await getCategories();
  if(!categoryResp.success && categoryResp.statusCode === 401) {
    return <div className="h-[400px] w-full flex items-center justify-center">
        <h1 className="text-5xl text-gray-300"> {categoryResp.message} </h1>
    </div>
  }
  return (
    <div>
      <PageTitle title="Category" link="/dashboard/category/add" />
      <div className="p-4 rounded-md bg-bgLightSecondary dark:bg-bgDarkSecondary">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>
                #S.N.
              </th>
              <th> Name </th>
              <th> Slug </th>
              <th> Description </th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            categoryResp.payload?.map((category: any, i) => (
                <tr key={i} className="odd:dark:bg-bgDarkPrimary odd:bg-bgLightPrimary">
                  <td className="py-1.5 pl-2"> {i+1} </td>
                  <td className="font-medium"> {category.name} </td>
                  <td className="text-blue-500"> {category.slug} </td>
                  <td> {category.description.slice(0,20)} ... </td>
                  <td className={`${category.status ? "text-green-500" : "text-red-500"}`}> { category.status ? "Active" : "Inactive" } </td>
                  <td className="flex items-center gap-1.5 justify-center pt-2">
                    <FaRegEdit className="text-green-500" />
                    <form action={deleteCategory}>
                      <input type="hidden" value={category._id} name="id" />
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

export default CategoryPage
