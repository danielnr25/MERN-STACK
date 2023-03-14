import { useContext, useState } from "react";
import { createTaskRequest, deleteTaskRequest, getTaskRequest, getTasksRequest, updateTaskRequest, toggleTaskDoneRequest } from "../api/task.api";
import { TaskContext } from "./TaskContext";


/* CONFIGURANDO EL CONTEXTO */
export const useTasks = () => {
   const context = useContext(TaskContext);
   if (!context) {
      throw new Error("El useTasks no se encuentra dentro de TaskContextProvider");
   }
   return context;
}

const TaskContextProvider = ({ children }) => {
   const [tasks, setTasks] = useState([]);

   /* CARGAR TAREAS */
   async function loadTasks() {
      const response = await getTasksRequest()
      setTasks(response.data)
   }

   /* ELIMINAR TAREAS */
   const deleteTask = async (id) => {
      try {
         const response = await deleteTaskRequest(id);
         setTasks(tasks.filter(task => task.id !== id))
      }
      catch (error) {
         console.error(error)
      }
   }

   /* CREAR TAREAS */
   const createTask = async (task) => {
      try {
         await createTaskRequest(task)
         // setTasks([...task, response.data])
      } catch (error) {
         console.error(error)
      }
   }

   /* ACTUALIZAR TAREA */
   const getTask = async (id) => {
      try {
         const response = await getTaskRequest(id);
         return response.data;
      } catch (error) {
         console.error(error);
      }
   }

   const updateTask = async (id, newFields) => {
      try {
         const response = await updateTaskRequest(id, newFields);
         console.log(response);
      } catch (error) {
         console.error(error);
      }
   };

   /* actualizar estado de la tarea */
   const toggleTaskDone = async (id) => {
      try {
         const taskFound = tasks.find((task) => task.id === id);
         await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);
         setTasks(
            tasks.map((task) =>
               task.id === id ? { ...task, done: !task.done } : task
            )
         );
      } catch (error) {
         console.error(error);
      }
   };
   return (
      <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask, getTask, updateTask, toggleTaskDone }}>
         {children}
      </TaskContext.Provider>
   )
}

export default TaskContextProvider