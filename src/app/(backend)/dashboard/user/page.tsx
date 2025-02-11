import PageTitle from '@/components/backend/PageTitle'
import { getUsers } from '@/utils/actions/user'
import React from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';

const UserPage = async () => {
    const resp = await getUsers();
    if(!resp.success && resp.statusCode === 500) {
        <div className="flex items-center justify-center w-full h-[400px]">
          <h1>
            {resp.message}
          </h1>
        </div>
    }
  return (
    <div>
      <PageTitle title="User" link='/dashboard/user/add' />
      <div className="p-4 rounded-md bg-bgLightSecondary dark:bg-bgDarkSecondary">
        <table className="text-left w-full">
            <thead>
                <tr>
                    <th>#s.n.</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
              resp.success && resp.statusCode === 200 && (
                resp.payload?.map((user, i) => (
                  <tr key={i} className="odd:dark:bg-bgDarkPrimary odd:bg-bgLightPrimary">
                    <td> {i+1} </td>
                    <td> {user.name} </td>
                    <td> {user.email} </td>
                    <td className="text-xs text-gray-400"> {user.status} </td>
                    <td className="flex items-center gap-1.5 justify-center pt-2">
                      <FaRegEdit className="text-green-500" />
                      <form>
                        <input type="hidden" name="id" />
                        <button>
                        <FaRegTrashCan className="text-red-500" />
                        </button>
                      </form>
                    </td>
                </tr>
                ))
              )
            }
               
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserPage
