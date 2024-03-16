import Image from "next/image"
import Link from "next/link"
import TaskCard from "@/Components/TaskCard"
import TaskCardData from "@/TaskCardData"
import TodoPage from "@/Components/TodoPage"

const page = ({ params }: any) => {

  const id = params.id
  const data = TaskCardData[id]

  if (id <= 4 && id >= 0) {

    return (
      <>
        <div className='bg-[url("/bg.jpg")] min-h-svh bg-cover bg-top'>
          <div className='w-full h-16 flex justify-start pl-6 items-center'>
            <Link href={'/'}>
              <Image
                src="/arrow-left-solid.svg"
                alt="back"
                width={20}
                height={20}
                className='w-9 flex' />
            </Link>
          </div>
          <div>
            <TaskCard
              name={data.name}
              tasks={data.tasks}
              img={data.img}
              link={data.link = id} />
          </div>
          <div className='relative min-h-screen px-8'>
            <TodoPage />
          </div>
        </div>
      </>
    )
  }
  return (
    <h1 className="m-5 text-3xl">Page not found 404.</h1>
  )
}

export default page
