import Link from 'next/link'
import Image from 'next/image'


const TaskCard = ({ name, tasks, link, img }) => {

  return (
    <>
      <div className='lg:px-72 md:px-40'>
        <Link
          href={`/Link/${link}`}>
          <div className=" flex h-28 my-5 bg-gray-200 backdrop:filter backdrop-blur-md bg-opacity-30 border border-slate-400 mx-5 py-2 px-4 rounded-lg hover:animate-pulse  active:animate-ping active:duration-500 active:bg-blue-500 lg:px-10">
            <div className='flex items-center justify-center'>
              <Image
                src={`${img}`}
                alt="personimg"
                className='rounded-full'
                width={80}
                height={80} />
            </div>
            <div className='flex flex-col pl-9 w-3/4 justify-center'>
              <h1 className='text-3xl -mt-1 font-sans font-bold'>{`${name}`}</h1>
              <p className='text-xl font-light'>{`${tasks}`}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default TaskCard