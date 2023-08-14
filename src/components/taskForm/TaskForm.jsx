/* eslint-disable react/prop-types */
import { useState } from 'react';

function TaskForm({ createTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
    });
    setTitle('');
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-10 mb-4">
        <input
          type="text"
          placeholder="Add a task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-200 w-full mb-2 rounded-md p-1 outline-none"
        />

        <button
          type="submit"
          className="bg-orange-700 px-4 py-1 rounded-md text-white font-bold outline-none hover:bg-orange-400"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
