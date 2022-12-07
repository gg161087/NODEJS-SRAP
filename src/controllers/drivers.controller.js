import {Drivers} from '../models/drivers.js'
import {Errors} from '../const/errors.js'

const getDrivers = async (req, res) => {
    try {
        const drivers = await Drivers.findAll()
        res.json({
            success: true,
            data: {
                drivers: drivers
            }
        })

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};
const getDriver = async (req, res) => {
    try {
        const driver = await Drivers.findOne({
            where: {
                id: req.params.id
            }
        })
        if(!driver) return res.json(Errors.IdInexistente)

        res.json({
            success: true,
            data: {
                driver: driver
            }
        })

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};
const createDriver = async (req, res) => {
    try {
        const driver = await Drivers.create(req.body)
        res.json({
            success: true,
            data: {
                id: driver.id
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};
const updateDriver = async (req, res) => {
    try {
        const driver = await Drivers.findByPk(req.params.id)
        
        if (!driver) return res.json(Errors.IdInexistente)

        driver.set(req.body);
        await driver.save();
        res.json({
            success: true,
            data: {
                id: driver.id
            }
        })  
    } catch (error) {
        return res.status(500).json({message: error.message})
    }    
};
const deleteDriver = async (req, res, next) => {
    try {
        await Drivers.destroy({
            where:{
                id: req.params.id
            }
        })
        res.json({
            success: true,
            data: {
                id: req.params.id,
                message: "Eliminado Correctamente"
            }
        })  
    } catch (error) {
        return res.status(500).json({message: error.message})
    }   
};

export {getDrivers, getDriver , createDriver, updateDriver, deleteDriver};