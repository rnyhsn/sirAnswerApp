'use client';
import { createSubCategory } from '@/utils/actions/category';
import { Response } from '@/utils/types'
import { redirect } from 'next/navigation';
import React, { useActionState } from 'react'

const SubCategoryForm = ({categories}: {categories: any[] }) => {

    const initialState: Response = {
        success: false,
        message: "",
        statusCode: 0
    }

    const [state, formAction] = useActionState(createSubCategory, initialState);

    if(state.success && state.statusCode === 202) {
        redirect("/dashboard/sub-category");
    }
  return (
    <div className="p-5 bg-bgLightSecondary dark:bg-bgDarkSecondary rounded-md w-[60%] mx-auto">
      <form action={formAction} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
            <label className="font-semibold">Name</label>
            <input type="text" name="name" placeholder="Name" className="px-4 py-2 bg-bgLightPrimary dark:bg-bgDarkPrimary rounded-md outline-none" />
            {
               !state.success && state.statusCode === 401 && <p className="text-red-500 text-sm font-semibold"> {state.message} </p>
            }
        </div>
        <div className="flex flex-col gap-1">
            <label className="font-semibold">Description</label>
            <textarea name="description" rows={5} placeholder="Description" className="px-4 py-2 bg-bgLightPrimary dark:bg-bgDarkPrimary rounded-md outline-none" />
        </div>
        <div className="flex flex-col gap-1">
            <label className="font-semibold">Parent Category</label>
            <select name="parentCategory" className="px-4 py-2 bg-bgLightPrimary dark:bg-bgDarkPrimary rounded-md outline-none">
                <option value="">---Select One---</option>
                {
                    categories.map((category, i) => (
                        <option key={i} value={category._id.toString()} className="text-sm"> {category.name} </option>
                    ))
                }
            </select>
            {
                !state.success && state.statusCode === 404 && <p className="text-red-500 text-sm font-semibold"> {state.message} </p>
            }
        </div>
        <button className="px-10 py-2 bg-btnPrimary text-white rounded-md self-end w-max">Create</button>
      </form>
    </div>
  )
}

export default SubCategoryForm
