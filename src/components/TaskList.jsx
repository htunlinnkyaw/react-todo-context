import React, { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../context/TaskProvider";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <div className="mt-2 flex justify-between bg-black text-white px-4 py-2 rounded">
        <p className="font-serif">Tasks</p>
        <p className="font-serif">
          Done ({tasks.length}/ {tasks.filter((el) => el.isDone).length})
        </p>
      </div>
      {tasks.length === 0 && (
        <p className="text-xl font-serif text-center mt-20 text-gray-400 ">
          There is no tasks !
        </p>
      )}
      {tasks.map((task) => (
        <Task key={task.id} job={task} />
      ))}
    </div>
  );
};

export default TaskList;
