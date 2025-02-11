import PageTitle from '@/components/backend/PageTitle'
import { deleteSubCategories, getSubCategories } from '@/utils/actions/category'
import Link from 'next/link';
import React from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';

const SubCategoryPage = async () => {
    const subCatResp = await getSubCategories();
    if(subCatResp.success && subCatResp.statusCode === 401) {
        return (
            <div className="w-full h-[400px] flex flex-col gap-4 items-center justify-center">
                <h1 className="text-4xl font-semibold text-gray-500">No Sub Category is Available</h1>
                <Link href="/dashboard/sub-category/add" className="px-4 py-3 text-lg font-semibold bg-btnPrimary rounded-md text-white"> Add Categories </Link>
            </div>
        )
    }
  return (
    <div>
      <PageTitle title="Sub Category" link="/dashboard/sub-category/add" />
      <div className="p-5 rounded-md bg-bgLightSecondary dark:bg-bgDarkSecondary">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>#s.n.</th>
              <th>Name</th>
              <th>Slug</th>
              <th>Parent Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            subCatResp.payload?.map((subCat: any, i) => (
            <tr key={i} className="odd:bg-bgLightPrimary odd:dark:bg-bgDarkPrimary text-sm" >
                <td className="px-2 py-2"> {i+1} </td>
                <td> {subCat.name} </td>
                <td className="text-green-500"> {subCat.slug} </td>
                <td className="font-semibold"> {subCat.parentCategory?.name} </td>
                <td className={subCat.status ? "text-green-500" : "text-red-500"}> {subCat.status ? "Active" : "Inactive"}  </td>
                <td className="flex items-center gap-1.5 justify-center pt-2">
                    <FaRegEdit className="text-green-500" />
                    <form action={deleteSubCategories}>
                      <input type="hidden" value={subCat._id} name="id" />
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

export default SubCategoryPage
