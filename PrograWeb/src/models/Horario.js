import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'
import Persona from './Persona.js'

const Horario = sequelize.define('Horario', {
    idHorario: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idPersona: {
        type:DataTypes.INTEGER
    },
    horaInicio: {
        type:DataTypes.TIME
    },
    diaDeLaSemana: {
        type:DataTypes.DATE
    },
    horaFin: {
        type:DataTypes.TIME
    }
})

Horario.belongsTo(Persona, {
    foreignKey: 'idPersona',
    targetKey: 'idPersona'
})

Persona.hasMany(Horario, {
    foreignKey: 'idPersona',
    targetKey: 'idPersona'
})

export default Horario