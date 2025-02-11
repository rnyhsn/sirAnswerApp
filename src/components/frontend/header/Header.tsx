import { IoSearch } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";



import Image from "next/image";
import DarkToggle from "@/components/DarkToggle";
import CreateBtn from "./CreateBtn";
import LoginBtn from "./LoginBtn";
import { auth } from "@/utils/auth";
import Link from "next/link";


const Header = async () => {
  const session = await auth();
  return (
    <div className="bg-blue-400">
      <div className="w-[90%] container flex items-center justify-between py-3">
        {/* Logo Section */}
        <div>
            <h2 className="text-4xl font-semibold italic">Logo</h2>
        </div>
        {/* Right Nav Section */}
        <div className="flex gap-5 items-center">
            <div className="flex gap-2 items-center">
              {
                session?.user?.email === 'admin@gmail.com' && 
                <Link href="/dashboard" className="px-5 py-1.5 bg-btnPrimary rounded-md">Dashboard</Link>
              }
                <DarkToggle />
                <IoSearch size={32} />
                <IoMdNotifications size={32} />
                <CreateBtn />
                <div className="flex items-center gap-1">
                    <Image src="/coinIcon.svg" width={20} height={20} alt="coin" />
                    <span> 0 </span>
                </div>
            </div>
            <LoginBtn />
        </div>
      </div>
    </div>
  )
}

export default Header
