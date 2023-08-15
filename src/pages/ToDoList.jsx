/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable spaced-comment */
import { useState } from 'react';
import TaskList from '../components/taskList/TaskList';
import TaskForm from '../components/taskForm/TaskForm';
import '../App.css';
import Navbar from '../components/navbar/Navbar';

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, updatedTitle) => {
    const title = document.querySelectorAll('.toDoDescription');
    title[taskId].removeAttribute('readonly');
    title[taskId].classList.add('active');
    title[taskId].addEventListener('keydown', (k) => {
      if (k.key === 'Enter') {
        title[taskId].setAttribute('readonly', 'readonly');
        title[taskId].classList.remove('active');
      }
    });
    const updatedTask = tasks.map((task) => task.id === taskId ? { ...task, title: updatedTitle } : task);
    setTasks(updatedTask);
  };

  return (
    <main className="bg-slate-900 h-screen">
      <Navbar />
      <div className="container mx-auto p-10">
        <TaskForm createTask={createTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </main>
  );
}

export default ToDoList;
