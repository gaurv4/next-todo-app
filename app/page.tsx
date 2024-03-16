import Navbar from "@/Components/Navbar"
import UserCard from "@/Components/UserCard"
import TaskCard from "@/Components/TaskCard"
import TaskCardData from "@/TaskCardData"

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className='bg-[url("/home-bg.jpeg")] bg-repeat-round sm:bg-contain min-h-screen'>
        <UserCard />
        {
          TaskCardData.map((data, index) => (
            <TaskCard
              key={index}
              name={data.name}
              tasks={data.tasks}
              link={data.link}
              img={data.img}
            />
          ))
        }
      </div>
    </>
  );
}
