'use client';
import { createCategory } from "@/utils/actions/category";
import { Response } from "@/utils/types";
import { redirect } from "next/navigation";
import { useActionState } from "react";

const AddForm = () => {

    const initialState: Response = {
        success: false,
        statusCode: 0,
        message: "",
    }

    const [state, formAction] = useActionState(createCategory, initialState);

    if(state.success && state.statusCode === 200) {
        redirect("/dashboard/category");
    }

  return (
    <div className="p-5 rounded-md bg-bgLightSecondary dark:bg-bgDarkSecondary w-[60%] mx-auto">
    <form action={formAction}  className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
            <label className="font-semibold">Name</label>
            <input type="text" placeholder="Category Name" name="name" className="px-4 py-2 rounded-md bg-bgLightPrimary dark:bg-bgDarkPrimary outline-none font-semibold" />
            {
                !state.success && state.statusCode === 401 && <p className="text-red-500 text-sm font-semibold"> {state.message} </p>
            }
        </div>
        <div className="flex flex-col gap-1">
            <label className="font-semibold">Description</label>
            <textarea placeholder="Category Description" rows={6} name="description" className="px-4 py-2 rounded-md bg-bgLightPrimary dark:bg-bgDarkPrimary outline-none text-sm" />
        </div>
        <button className="px-20 py-2 bg-btnPrimary rounded-md text-white w-max self-end">Create</button>
    </form>
  </div>
  )
}

export default AddForm
