import PageTitle from '@/components/backend/PageTitle'
import AddQuestionForm from '@/components/body/questions/AddQuestionForm'
import React from 'react'

const AddQuestionPage = () => {
  return (
    <div>
      <PageTitle title="Add New Question" />
      <AddQuestionForm />
    </div>
  )
}

export default AddQuestionPage
