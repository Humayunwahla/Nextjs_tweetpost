//import { getUsers } from '@/lib/prisma/users'
import Link from 'next/link'
import React from 'react'


const Users = async ({ users }) => {
    // const { users } = await getUsers()
  
    return (
      <section className='bg-stone-900 w-96  mt-8'>
        <div className='container py-4 px-3'>
          <h2 className='mb-4 pb-3 text-xl border-b border-stone-500 font-medium text-white'>
            Users
          </h2>
          <ul className='flex flex-col text-sm text-white list-none gap-1 list-inside'>
            {users?.map(user => (
              <li key={user.id} className='text-base'>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
export default Users
