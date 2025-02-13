'use client';
import { getSubCategories } from "@/utils/actions/category";
import { createQuestion } from "@/utils/actions/question";
import { useDebounce } from "@/utils/actions/useDebounce";
import { FormEvent, useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";


const QuestionModal = ({setOpen}: {setOpen: any}) => {
    const [tags, setTags] = useState<{name: string, id: string}[]>([]);
    const [cats, setCats] = useState([])
    const [tag, setTag] = useState("");
    const inputRef = useRef<null|HTMLInputElement>(null);
    const query = useDebounce(tag)


    const selectTags = (cat: {name: string, _id: string}) => {
        setTags([...tags, {name: cat.name, id: String(cat._id)}]);
        setTag("");
        if(tags.length < 2) {
            inputRef?.current?.focus()
        }
    }

    const removeTags = (name: string) => {
        setTags(tags.filter(tag => tag.name !== name));
    }

    useEffect(() => {
        const fetchedCategories = async () => {
            const resp: any = query.length > 1 && await getSubCategories(query);
            console.log(resp);
            if(resp.success) {
                setCats(resp.payload);
            }
        }
        fetchedCategories();
    }, [query]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log(tags);
        const resp = await createQuestion(formData, tags);
        console.log(resp);
        if(resp.success && resp.statusCode === 202) {
            toast.success(resp.message);
            setOpen(false);
        }
    }

  return (
    <div className="fixed z-10 w-screen h-screen bg-black/60 flex items-center justify-center left-0 bottom-0">
        <div className="w-[40%] bg-white text-black rounded-md p-5 relative pt-9">
            <button onClick={()=> setOpen((prev: boolean) => !prev)} className="absolute top-4 right-4"> <RxCross2 className="text-xl font-extrabold hover:text-gray-500" /> </button>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <h1 className="text-3xl font-semibold text-gray-700">Ask Your Question:</h1>
                <div className="flex flex-col border border-gray-300 rounded-md p-2 mt-1.5">
                    <textarea name="question" rows={2} className="border-none outline-none resize-none" placeholder="Ask Your Question"></textarea>
                    <span className="self-end text-gray-500 text-sm">0/255</span>
                </div>
                <div className="flex flex-col">
                <label className="mt-5 text-gray-700 font-semibold">You can Answer your Question <span className="font-bold">(optional)</span>  </label>
                    <textarea name="answer" rows={5} className="border outline-none resize-none border-gray-300 rounded-md p-2 mt-1.5" placeholder="Ask Your Question"></textarea>
                    
                </div>
                <div className=" relative">
                    <h2 className="font-semibold">Add Tags <span className="text-sm font-medium text-gray-600">(Optional)</span> </h2>
                    <div className="flex flex-wrap gap-2 items-center mt-1.5 px-4 py-2 rounded-md border border-gray-400 group">
                    {
                        tags.map((tag, i) => (
                            <div key={i} className="py-1 px-3 rounded-md bg-gray-300 font-semibold relative"> 
                                <span> {tag.name} </span>
                                <div onClick={()=> removeTags(tag.name)} className="absolute cursor-pointer -top-1 -right-1 text-sm bg-red-600 text-white rounded-full"> <RxCross2 /> </div>
                            </div>
                        ))
                    }
                        <div className="relative flex-1">
                            <input type="text" ref={inputRef} value={tag} onChange={(e) => setTag(e.target.value)} className="w-full outline-none" />
                            {
                                (tag.length > 0 && cats.length > 0) && (
                                    <ul className="py-2 px-4 rounded-md bg-gray-200 shadow-md space-y-2 absolute">
                                    {
                                        cats.map((cat: any, i) => (
                                            <li onClick={()=> selectTags(cat)} key={i} className="font-semibold text-sm cursor-pointer hover:text-gray-700"> {cat.name} </li>
                                        ))
                                    }
                                    </ul>
                                )
                            }
                         
                        </div>
                    </div>
                    
                    <p className={`text-sm font-semibold mt-0.5 text-right ${tags.length > 3 ? "text-red-500" : "text-blue-600"}`}>
                    {
                        tags.length > 2 ? "no more addition is possible" : "add upto 3 tags"
                    }
                    </p>
                </div>
                <button className="px-10 py-2 bg-btnPrimary rounded-md text-white w-max self-end hover:bg-btnPrimary/90">Submit</button>
            </form>

        </div>
    </div>
  )
}

export default QuestionModal
