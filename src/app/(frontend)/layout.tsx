import Header from '@/components/frontend/header/Header'
import LeftSidebar from '@/components/frontend/sidebar/LeftSidebar'
import RightSidebar from '@/components/frontend/sidebar/RightSidebar'
import { ReactNode } from 'react'

const FrontendLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <Header />
      <div className="flex gap-5 container justify-between mt-5">
        <LeftSidebar />
        {children}
        <RightSidebar />
      </div>
    </div>
  )
}

export default FrontendLayout
