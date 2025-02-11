import { RxCross2 } from "react-icons/rx";


const QuestionModal = ({setOpen}: {setOpen: any}) => {
  return (
    <div className="fixed z-10 w-screen h-screen bg-black/60 flex items-center justify-center left-0 bottom-0">
        <div className="flex flex-col gap-3 w-[40%] bg-white text-black rounded-md p-5 relative pt-9">
            <button onClick={()=> setOpen((prev: boolean) => !prev)} className="absolute top-4 right-4"> <RxCross2 className="text-xl font-extrabold hover:text-gray-500" /> </button>
            <div>
                <h1 className="text-3xl font-semibold text-gray-700">Ask Your Question:</h1>
                <div className="flex flex-col border border-gray-300 rounded-md p-2 mt-1.5">
                    <textarea name="" rows={4} className="border-none outline-none resize-none" placeholder="Ask Your Question"></textarea>
                    <span className="self-end text-gray-500 text-sm">0/255</span>
                </div>
                <div className="mt-4">
                    <h2 className="font-semibold">Add Tags <span className="text-sm font-medium text-gray-600">(Optional)</span> </h2>
                    <div className="flex gap-2 items-center mt-1.5">
                        <input type="text" className="px-2 py-1.5 border border-gray-400 rounded-sm outline-none text-sm w-1/5" />
                        <input type="text" className="px-2 py-1.5 border border-gray-400 rounded-sm outline-none text-sm w-1/5" />
                        <input type="text" className="px-2 py-1.5 border border-gray-400 rounded-sm outline-none text-sm w-1/5" />
                        
                    </div>
                </div>
            </div>
            <button className="px-10 py-2 bg-btnPrimary rounded-md text-white w-max self-end hover:bg-btnPrimary/90">Submit</button>
        </div>
    </div>
  )
}

export default QuestionModal
