import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'
import Universidad from './Universidad.js'

const Curso = sequelize.define('Curso', {
    idCurso: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idUniversidad: {
        type:DataTypes.INTEGER
    }
})

Curso.belongsTo(Universidad, {
    foreignKey: 'idUniversidad',
    targetKey: 'idUniversidad'
})

Universidad.hasMany(Curso, {
    foreignKey: 'idUniversidad',
    targetKey: 'idUniversidad'
})

export default Curso