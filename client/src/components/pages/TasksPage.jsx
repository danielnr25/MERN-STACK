import { useEffect } from 'react'
import { useTasks } from '../../context/TaskProvider';
import TaskCard from '../card/TaskCard'

function TasksPage() {

   const { tasks, loadTasks } = useTasks();
   useEffect(() => {
      loadTasks()
   }, []);

   function renderMain() {

      if (tasks.length === 0) {
         return <h1>No hay tareas disponibles</h1>
      }
      return tasks.map((task) => <TaskCard task={task} key={task.id} />);
   }

   return (
      <div>
         <h1 className='text-blue-600 text-4xl text-center font-bold py-5  tracking-wider'>Listado de tareas</h1>
         <div className='grid grid-cols-3 gap-3'>
            {renderMain()}
         </div>
      </div>
   )
}

export default TasksPage