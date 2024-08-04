import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [job, setJob] = useState("");

  const handleInput = (event) => {
    setJob(event.target.value);
  };

  const handleAddBtn = () => {
    const newTask = {
      id: Date.now(),
      task: job,
      isDone: false,
    };
    addTask(newTask);
    setJob("");
  };

  return (
    <div className="flex w-[400px]">
      <input
        value={job}
        onChange={handleInput}
        type="text"
        className="border-2 px-4 py-2 font-serif text-sm flex-grow outline-none  border-slate-500"
      />
      <button
        onClick={handleAddBtn}
        className=" bg-black border-2 px-4 py-2
       border-black text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default CreateTask;
