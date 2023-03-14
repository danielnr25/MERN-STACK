import React from 'react'
import { useTasks } from '../../context/TaskProvider';
import { useNavigate } from 'react-router-dom'

function TaskCard({ task }) {
   const { deleteTask, toggleTaskDone } = useTasks();
   const navigate = useNavigate();

   const handleDone = async () => {
      /*   if (taskDone === 0) {
           task.done = 1;
        } */
      await toggleTaskDone(task.id)
   }


   return (
      <div className='bg-gray-200 rounded-md p-4 max-w-md'>
         <header className='flex justify-between'>
            <h2 className='text-lg font-bold capitalize'>{task.title}</h2>
            <span>{task.done == 1 ? "✅" : '❌'}</span>
         </header>
         <p className='text-md capitalize'>{task.description}</p>
         <div className='gap-x-1 flex pt-5'>
            <button className='bg-green-500 rounded px-2 py-1 text-white hover:bg-green-400' onClick={() => navigate(`/edit/${task.id}`)}>Editar</button>
            <button className='bg-red-500 rounded px-2 py-1 text-white hover:bg-red-400' onClick={() => deleteTask(task.id)}>Eliminar</button>
            <button className='bg-gray-500 rounded px-2 py-1 text-white hover:bg-gray-400' onClick={() => handleDone(task.done)}>{task.done == 1 ? "Realizado" : "No realizado"}</button>
         </div>
      </div>
   )
}

export default TaskCard