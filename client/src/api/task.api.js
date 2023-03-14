import axios from 'axios'

/* listar tareas */
export const getTasksRequest = async () =>
   await axios.get('http://localhost:4000/tasks');

/* crear tareas */
export const createTaskRequest = async (task) =>
   await axios.post('http://localhost:4000/tasks', task);

/* eliminar tarea */
export const deleteTaskRequest = async (id) =>
   await axios.delete(`http://localhost:4000/tasks/${id}`);

/* Mostrar tarea para editar */
export const getTaskRequest = async (id) =>
   await axios.get(`http://localhost:4000/tasks/${id}`);
   
/* Actualiza */
export const updateTaskRequest = async (id, newFields) =>
   await axios.put(`http://localhost:4000/tasks/${id}`, newFields);

/* cambiar estado de la tarea */
export const toggleTaskDoneRequest = async (id, done) =>
   await axios.put(`http://localhost:4000/tasks/${id}`, {
      done,
   });