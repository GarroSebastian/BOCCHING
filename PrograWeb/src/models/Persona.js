import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'
import Carrera from './Carrera.js'
import Rol from './Rol.js'

const Persona = sequelize.define('Persona', {
    idPersona: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type:DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    tipoDocumento: {
        type:DataTypes.STRING
    },
    dni: {
        type: DataTypes.INTEGER
    },
    idRol: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    contrasena: {
        type: DataTypes.STRING
    },
    idCarrera: {
        type: DataTypes.INTEGER
    },
    tituloPresentacion: {
        type: DataTypes.STRING
    },
    presentacion: {
        type: DataTypes.STRING
    },
    grado: {
        type: DataTypes.STRING
    }
})

Persona.belongsTo(Carrera, {
    foreignKey: 'idCarrera',
    targetKey: 'idCarrera'
})

Carrera.hasMany(Persona, {
    foreignKey: 'idCarrera',
    targetKey: 'idCarrera'
})

Persona.belongsTo(Rol, {
    foreignKey: 'idRol',
    targetKey: 'idRol'
})

Rol.hasOne(Persona, {
    foreignKey: 'idRol',
    targetKey: 'idRol'
})

export default Persona