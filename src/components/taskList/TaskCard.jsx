/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/role-supports-aria-props */
function taskCard({ task, deleteTask, editTask }) {
  return (
    <div className="bg-gray-800 text-white p-4 max-w-md rounded-md">
      <textarea
        className="bg-gray-800 w-full toDoDescription resize-none outline-none"
        rows={1}
        cols={20}
        value={task.title}
        readOnly
        onChange={(e) => editTask(task.id, e.target.value)}
      />
      <div className="flex justify-between">
        <button
          type="button"
          className="bg-red-600 w-16 px-2 py-1 mt-4 rounded-md hover:bg-red-500"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          type="button"
          className="bg-orange-400 w-16 px-2 py-1 mt-4 rounded-md hover:bg-orange-600"
          onClick={() => editTask(task.id, task.title)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default taskCard;
