import Link from "next/link";
import { GoSearch } from "react-icons/go";


const SearchCard = () => {
  return (
    <div className="w-full px-5 py-5 rounded-md bg-bgLightSecondary dark:bg-bgDarkSecondary flex flex-col gap-4 justify-center items-center">
      <h1 className="text-4xl font-semibold">What's Your Question</h1>
      <p className="text-txtSecondary dark:text-txtDarkSecondary">Get an instant answer</p>
      <div className="flex gap-4 items-center w-full">
        <input type="text" placeholder="Type your Question" className="flex-1 border-gray-300 px-4 py-2 rounded-md outline-none bg-bgLightPrimary dark:bg-bgDarkPrimary" />
        <button className="bg-btnPrimary text-white px-4 py-3 rounded-md"> <GoSearch /> </button> 
      </div>
      <p>Or have some fun and ask our cast of character bots</p>
        <div className="flex gap-4 items-center">
            <Link href="/" className="text-btnLink font-semibold">Login</Link>
            <span>Or</span>
            <Link href="/" className="text-btnLink font-semibold">Sign Up</Link>
        </div>
    </div>
  )
}

export default SearchCard
