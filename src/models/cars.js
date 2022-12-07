import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import {Drivers} from './drivers.js'

export const Cars = sequelize.define('cars',{
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  factory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  patent: {
    type: DataTypes.STRING,
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

Cars.hasMany(Drivers, {
  foreingKey: 'CarId',
  sourceKey: 'id'
});

Drivers.belongsTo(Cars, {
  foreingKey: 'carId',
  targetKey: 'id'
});