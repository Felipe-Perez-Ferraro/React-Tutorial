/* eslint-disable react/prop-types */
import TaskCard from './TaskCard';

function TaskList({ tasks, deleteTask, editTask }) {
  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        There is nothing yet...
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
