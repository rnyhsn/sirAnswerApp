import React from 'react'
import TrendingSection from './TrendingSection'
import QuestionSearch from './QuestionSearch'

const RightSidebar = () => {
  return (
    <div className="w-[25%] flex flex-col gap-5">
      <TrendingSection />
      <QuestionSearch />
      <TrendingSection />
    </div>
  )
}

export default RightSidebar
