/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';
import Copyright from './pages/Copyright';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="to-do-list" element={<ToDoList />} />
      <Route path="copyright" element={<Copyright />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
