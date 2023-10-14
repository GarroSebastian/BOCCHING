import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'
import Cita from './Cita.js'

const Calificacion = sequelize.define('Calificacion', {
    idCalificacion: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idCita: {
        type:DataTypes.INTEGER
    },
    calificacion: {
        type:DataTypes.STRING
    },
    comentario: {
        type:DataTypes.STRING
    }
})

Calificacion.belongsTo(Cita, {
    foreignKey: 'idCita',
    targetKey: 'idCita'
})

Cita.hasOne(Calificacion, {
    foreignKey: 'idCita',
    targetKey: 'idCita'
})

export default Calificacion