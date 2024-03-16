import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className='h-16 w-screen bg-black flex px-4 justify-between'>
        <div className='w-1/2 h-full flex gap-2 items-center'>

          <Image
            src={'/node-js.svg'}
            alt='node.js-img'
            width={25}
            height={25} />
          <p className='sm:text-3xl text-xl mt-1 text-white font-sans font-bold'>
            TODO App
          </p>
        </div>
        <div>
          <div className='flex gap-9 sm:gap-9 sm:mr-20 h-full justify-end items-center'>
            <Link
              href={'https://www.linkedin.com/in/gaurav-webdev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}>
              <Image
                src={'/linkedin.svg'}
                alt='linkedin-svg'
                height={25}
                width={25} />
            </Link>
            <Link
              href={'https://github.com/gaurv4'}>
              <Image
                src={'/github.svg'}
                alt='github-svg'
                height={25}
                width={25} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar