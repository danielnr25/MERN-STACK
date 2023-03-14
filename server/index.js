import express  from "express";
import cors from 'cors'
import { PORT } from "./config.js";
import indexRoute from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js"
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

// IMPORTANTE PROCESA LOS DATOS INGRESADOS DEL CLIENTE
app.use(express.json());
// PERMITIR LA CONEXION CON OTROS SERVIDORES
app.use(cors())

/* app.use(cors({
   origin: 'http://localhost:5173'
})) */


//RUTAS
app.use(indexRoute); 
app.use(taskRoutes);

app.use(express.static(join(__dirname, '../client/dist')))

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);