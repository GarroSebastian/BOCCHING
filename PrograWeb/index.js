/*import app from './app.js'
import sequelize from './src/config/database.js'

async function main() {
    try {
        const init =  process.argv[2];
        console.log({init})
        if (init)
            await sequelize.sync({force: true})
        else 
            await sequelize.sync({force: false})

        console.log('connection successful')
        
        app.listen(3002)

        console.log('app iniciada')
    }
    catch(err) {
        console.error('Connection error: ', err)
    }
}

main()*/

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import calificacionRoute from './src/routes/calificacion.js'
import carreraRoute from './src/routes/carrera.js'
import citaRoute from './src/routes/cita.js'
import cursoRoute from './src/routes/curso.js'
import horarioRoute from './src/routes/horario.js'
import personaRoute from './src/routes/persona.js'
import personaCursoRoute from './src/routes/personaCurso.js'
import rolRoute from './src/routes/rol.js'
import universidadesRoute from './src/routes/universidades.js'

let app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.json({result: 'OK'})
})

app.use('/calificacion', calificacionRoute)
app.use('/carrera', carreraRoute)
app.use('/cita', citaRoute)
app.use('/curso', cursoRoute)
app.use('/horario', horarioRoute)
app.use('/persona', personaRoute)
app.use('/personaCurso', personaCursoRoute)
app.use('/rol', rolRoute)
app.use('/universidad', universidadesRoute)

app.listen(3001, () => {
    console.log('Servidor iniciado.')
})