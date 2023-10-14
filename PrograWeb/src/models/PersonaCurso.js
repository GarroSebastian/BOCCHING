import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'
import Persona from './Persona.js'
import Curso from './Curso.js'

const PersonaCurso = sequelize.define('PersonaCurso', {
    idPersonaCurso: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idPersona: {
        type:DataTypes.INTEGER
    },
    idCurso: {
        type:DataTypes.INTEGER
    }
})

PersonaCurso.belongsTo(Persona, {
    foreignKey: 'idPersona',
    targetKey: 'idPersona'
})

Persona.hasMany(PersonaCurso, {
    foreignKey: 'idPersona',
    targetKey: 'idPersona'
})

PersonaCurso.belongsTo(Curso, {
    foreignKey: 'idCurso',
    targetKey: 'idCurso'
})

Curso.hasMany(PersonaCurso, {
    foreignKey: 'idCurso',
    targetKey: 'idCurso'
})

export default PersonaCurso