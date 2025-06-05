import { useState, useEffect } from 'react';
import { getTasks, createTask } from '../api/taskService';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getTasks();
      setTasks(tasksData);
      setLoading(false);
    };
    
    fetchTasks();
  }, []);

  const addTask = async (newTask) => {
    const createdTask = await createTask(newTask);
    setTasks([...tasks, createdTask]);
  };

  return { tasks, loading, addTask };
};