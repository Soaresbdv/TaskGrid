import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
    return [];
  }
};

export const fetchTasks = async (token) => {
  const response = await axios.get(`${API_URL}/tasks`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};