import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import {Patients} from './patients.js'

export const Doctors = sequelize.define('doctors',{
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
  specialty: {
    type: DataTypes.STRING,
  },
  enrollment: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  deletedAt: {
    type: DataTypes.DATE,
    field: 'deleted_at'
  }  
});

Doctors.hasMany(Patients, {
  foreingKey: 'doctorId',
  sourceKey: 'id'
})

Patients.belongsTo(Doctors, {
  foreingKey: 'doctorId',
  targetKey: 'id'
})