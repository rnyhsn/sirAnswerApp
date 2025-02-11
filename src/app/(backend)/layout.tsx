import Header from '@/components/backend/header/Header'
import Sidebar from '@/components/backend/sidebar/Sidebar'
import { ReactNode } from 'react'

const BackendLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex gap-5">
        <Sidebar />
        <div className="flex flex-col gap-5 w-[80%] pr-5">
            <Header />
            {children}
        </div>
    </div>
  )
}

export default BackendLayout
