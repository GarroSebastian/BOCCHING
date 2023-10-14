/*import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import rolRoutes from './src/routes/rol.js'
import universidadRoutes from './src/routes/universidades.js'
import personaRoutes from './src/routes/persona.js'
import carreraRoutes from './src/routes/carrera.js'
import cursoRoutes from './src/routes/curso.js'
import horarioRoutes from './src/routes/horario.js'
import citaRoutes from './src/routes/cita.js'
import calificacionRoutes from './src/routes/calificacion.js'
import PersonaCursoRoutes from './src/routes/personaCurso.js'

let app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) =>{
    return res.json({result: 'OK'})
})

app.use("/rol", rolRoutes);
app.use("/Universidad", universidadRoutes)
app.use("/Persona", personaRoutes)
app.use("/Carrera", carreraRoutes)
app.use("/Curso", cursoRoutes)
app.use("/Horario", horarioRoutes)
app.use("/Cita", citaRoutes)
app.use("/Calificacion", calificacionRoutes)
app.use("/PersonaCurso", PersonaCursoRoutes)

export default app*/