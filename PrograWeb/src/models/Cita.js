import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'
import Persona from './Persona.js'
import Curso from './Curso.js'

const Cita = sequelize.define('Cita', {
    idCita: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idPersonaDocente: {
        type:DataTypes.INTEGER
    },
    idPersonaAlumno: {
        type: DataTypes.INTEGER
    },
    Fecha: {
        type:DataTypes.DATE
    },
    horaInicio: {
        type: DataTypes.TIME
    },
    horaFin: {
        type: DataTypes.TIME
    },
    enlaceSesion: {
        type: DataTypes.TIME
    },
    estado: {
        type: DataTypes.STRING
    },
    idCurso: {
        type: DataTypes.INTEGER
    }
})

Cita.belongsTo(Persona, {
    foreignKey: 'idPersona',
    targetKey: 'idPersona'
})

Persona.hasMany(Cita, {
    foreignKey: 'idPersona',
    targetKey: 'idPersona'
})

Cita.belongsTo(Curso, {
    foreignKey: 'idCurso',
    targetKey: 'idCurso'
})

Curso.hasMany(Cita, {
    foreignKey: 'idCurso',
    targetKey: 'idCurso'
})

export default Cita