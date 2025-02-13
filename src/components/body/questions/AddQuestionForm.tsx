'use client';

import { getSubCategories } from "@/utils/actions/category";
import { createQuestion } from "@/utils/actions/question";
import { useDebounce } from "@/utils/actions/useDebounce";
import { useRouter } from "next/navigation";

import { FormEvent, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";



const AddQuestionForm = () => {
    const [categories, setCategories] = useState<{id: string, name: string}[]>([]);
    const [fetchedCategories, setFetchedCategories] = useState<any>([]);
    const [cat, setCat] = useState("");
    const query = useDebounce(cat);
    const router = useRouter();

    const handleSelectCategory = (category: {_id: string, name: string}) => {
            setCategories([...categories, {id: category._id, name: category.name}]);
            setCat("");
            setFetchedCategories((prev: any) => prev.filter((c: any) => c.name !== category.name));
    }

    const removeCat = (cat: string) => {
        setCategories(prev => prev.filter((category) => category.name !== cat));
    }
    useEffect(() => {
        
        const findCategories = async () => {
            const resp = await getSubCategories(query);
            if(resp.success && resp.statusCode === 202) {
                setFetchedCategories(resp?.payload?.filter((c: any) => !categories.includes(c.name)));
                // console.log(categories);
                // console.log(fetchedCategories);
            }
        }
        if(query.length > 0) {
            findCategories();
        }
    }, [query]);

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        // formData.set("categories", categories);
        console.log(formData);
        const resp = await createQuestion(formData, categories);
        console.log(resp);
        if(resp.success && resp.statusCode === 202) {
            toast.success("Question created successfully");
            router.push("/dashboard/question");
        }
    }

  return (
    <div className="p-5 bg-bgLightSecondary dark:bg-bgDarkSecondary rounded-md w-[80%] mx-auto">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
            <label className="font-semibold">Question</label>
            <textarea name="question" className="px-4 h-max overflow-auto py-3 resize-none bg-bgLightPrimary dark:bg-bgDarkPrimary rounded-md outline-none" />
        </div>
        <div className="flex flex-col gap-1">
            <label className="font-semibold">Answer <span className="text-gray-400 text-sm">(optional)</span> </label>
            <textarea name="answer" rows={7} className="px-4 h-max overflow-auto py-2 resize-none bg-bgLightPrimary dark:bg-bgDarkPrimary rounded-md outline-none" />
        </div>
        <div className="flex flex-col gap-1">
            <label className="font-semibold">Category</label>
            <div className="px-4 py-2 min-h-10 bg-bgLightPrimary dark:bg-bgDarkPrimary rounded-md outline-none flex gap-2 flex-wrap">
            {
                categories.map((category, i) => (
                    <div key={i} className="bg-bgLightSecondary group dark:bg-bgDarkSecondary px-2 py-1.5 text-sm rounded-md relative cursor-pointer">
                        {category.name}
                        <span className="hidden group-hover:flex absolute -top-2 -right-2 text-xs w-4 h-4 rounded-full bg-red-500 items-center justify-center" onClick={() => removeCat(category.name)}> <RxCross2 /> </span>
                    </div>
                ))
            }
            <div className="flex-1 relative">
                <input type="text" value={cat} onChange={(e)=> setCat(e.target.value)}   name="category" className="bg-transparent w-full outline-none text-white" />
            
                <ul className="absolute bg-bgLightSecondary dark:bg-bgDarkSecondary px-4 py-4 top-10 min-h-10 max-h-[200px] overflow-y-auto">
                {
                   fetchedCategories.map((category: any) => (
                        <li key={category._id} onClick={() => handleSelectCategory(category)}  className="py-0.5 cursor-pointer"> {category.name} </li>
                    )) 
                }
                </ul>
            </div>
            </div>
        </div>
        <button className="px-8 py-2 rounded-md text-white bg-btnPrimary self-end">Create</button>
      </form>
    </div>
  )
}

export default AddQuestionForm
