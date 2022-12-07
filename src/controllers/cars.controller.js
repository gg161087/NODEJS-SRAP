import {Cars} from '../models/cars.js'
import {Errors} from '../const/errors.js'

const getCars = async (req, res) => {
    try {
        const cars = await Cars.findAll()
        res.json({
            success: true,
            data: {
                cars: cars
            }
        })

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};
const getCar = async (req, res) => {
    try {
        const car = await Cars.findOne({
            where: {
                id: req.params.id
            }
        })
        if(!car) return res.status(500).json(Errors.IdInexistente)

        res.json({
            success: true,
            data: {
                car: car
            }
        })

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

const createCar = async (req, res) => {
    try {
        const car = await Cars.create(req.body)
        res.json({
            success: true,
            data: {
                id: car.id,
                message: "Creado Correctamente"
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

const updateCar = async (req, res) => {
    try {
        const car = await Cars.findByPk(req.params.id)

        if(!car) return res.status(500).json(Errors.IdInexistente) 
           
        car.set(req.body);        
        await car.save();
        res.json({
            success: true,
            data: {
                id: car.id,
                message: "Actualizado correctamente"
            }
        })     
    } catch (error) {
        return res.status(500).json({message: error.message})
    }    
};

const deleteCar = async (req, res, next) => {
    try {
        await Cars.destroy({
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

export {getCars, getCar , createCar, updateCar, deleteCar};