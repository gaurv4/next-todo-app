'use client'
import { useState } from "react";

const TodoPage = () => {

  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean; }[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleCompletion = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <div className="container mx-auto mt-8 md:px-40 lg:px-72">
        <h1 className="text-3xl font-bold mb-4">To-Do App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="py-2 px-3 border border-gray-300 rounded-l-md w-full"
            placeholder="Enter a task"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-r-md"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>
        <ul className="divide-y divide-gray-300">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between py-3 ${task.completed ? 'bg-gray-100' : ''
                }`}
            >
              <span
                className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
                onClick={() => handleToggleCompletion(task.id)}
              >
                {task.text}
              </span>
              <button
                className="text-red-500"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoPage