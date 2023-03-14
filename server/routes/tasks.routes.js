import { Router } from "express";
import {
   getTask,
   getTasks,
   createTasks,
   updateTask,
   deleteTask
} from '../controllers/task.controllers.js'

const router = Router()

/* CREACION DE LAS RUTAS */
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', createTasks);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export default router