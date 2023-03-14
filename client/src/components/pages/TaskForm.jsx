import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from '../../context/TaskProvider';
import { useEffect, useState } from "react";


function TaskForm() {

   const { createTask, getTask, updateTask } = useTasks();
   const [task, setTask] = useState({
      title: "",
      description: "",
   });
   const params = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      const loadTask = async () => {
         if (params.id) {
            const task = await getTask(params.id)
            setTask({
               title: task.title,
               description: task.description,
            })
         }
      };
      loadTask();
   }, []);

   return (
      <div>
         <h1 className="text-4xl text-blue-600 font-bold tracking-wider text-center py-5">{params.id ? "Editar Tarea" : "Crear Tarea"}</h1>

         <Formik
            initialValues={task}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
               console.log(values);
               if (params.id) {
                  await updateTask(params.id, values);
               } else {
                  await createTask(values);
               }
               navigate('/')
               // actions.resetForm();
               /* actualizando */
               setTask({
                  title: "",
                  description: ""
               })
            }}
         >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
               <Form onSubmit={handleSubmit} className="bg-gray-200 rounded-md p-4 max-w-md mx-auto mt-10">
                  <label className="block py-2 font-medium">Titulo</label>
                  <input
                     type="text"
                     name="title"
                     placeholder="Ingrese el titulo de la tarea"
                     className="px-2 py-1 rounded-sm w-full"
                     onChange={handleChange}
                     value={values.title}
                  />
                  <label className="block py-2 font-medium
                  ">Descripción</label>
                  <textarea
                     name="description"
                     rows="3"
                     placeholder="Descripción de su tarea ...!"
                     onChange={handleChange}
                     className="px-2 py-1 rounded-sm w-full"
                     value={values.description}
                  ></textarea>
                  <div className="py-2">
                     <button
                        type="submit"
                        disabled={isSubmitting}
                        className="block bg-indigo-600 px-2 py-1 text-white w-full rounded-md hover:bg-indigo-500"
                     >
                        {isSubmitting ? "Guardando..." : "Guardar"}
                     </button>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   )
}

export default TaskForm