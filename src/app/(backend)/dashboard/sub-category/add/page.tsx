import PageTitle from '@/components/backend/PageTitle'
import SubCategoryForm from '@/components/body/subcategory/SubCategoryForm'
import { getCategories } from '@/utils/actions/category'
import React from 'react'

const AddSubCategoryPage = async () => {
    const categoryResp = await getCategories();
    if(!categoryResp.success && categoryResp.statusCode === 401) {
        return (
            <div className="h-[400px] flex items-center justify-center gap-4 text-gray-500">
                <h1 className="text-3xl font-semibold">No Parent Category Available</h1>
                <h2>Add Some Parent Categries First</h2>
            </div>
        )
    }
    if(categoryResp.success && categoryResp.statusCode === 200) {
        return (
          <div>
            <PageTitle title="Add Sub Category" />
            <SubCategoryForm categories= {categoryResp.payload} />
          </div>
        )
    }
}

export default AddSubCategoryPage
