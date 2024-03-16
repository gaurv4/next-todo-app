import React from 'react'
import Image from 'next/image'

const UserCard = () => {
  return (
    <>
      <div className='flex md:justify-center'>
        <div className='flex w-full md:w-1/2 pb-5 pt-10 justify-between items-center px-10'>
          <div className=''>
            <h1 className='text-3xl font-semibold font-sans'> Hello username</h1>
            <p className='text-xl'>Add your tasks</p>
          </div>
          <div>
            <Image
              src="/person-img.png"
              alt="person-img"
              width={90}
              height={90}
              className='rounded-full' />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCard