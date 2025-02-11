'use client';
import { ThemeContext } from "@/utils/provider/Theme";
import { useContext } from "react";
import { IoIosSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";

const DarkToggle = () => {
    const themeResp  = useContext(ThemeContext)
  return (
    <div className="cursor-pointer" onClick={themeResp?.toggle}>
        {
            themeResp?.dark ? (
                <IoIosSunny size={32} />
            ) : (
                <IoIosMoon size={32} />
            )
        }
       
        
    </div>
  )
}

export default DarkToggle
