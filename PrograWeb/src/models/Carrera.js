import { DataTypes, ForeignKeyConstraintError } from 'sequelize'
import sequelize from '../config/database.js'
import Universidad from './Universidad.js'

const Carrera = sequelize.define('Carrera', {
    idCarrera: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idUniversidad: {
        type:DataTypes.INTEGER
    }
})

Carrera.belongsTo(Universidad, {
    foreignKey: 'idUniversidad',
    targetKey: 'idUniversidad'
})

Universidad.hasMany(Carrera, {
    foreignKey: 'idUniversidad',
    targetKey: 'idUniversidad'
})

export default Carrera