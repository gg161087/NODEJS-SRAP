import {Doctors} from '../models/doctors.js'
import {Errors} from '../const/errors.js'

const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctors.findAll()
        res.json({
            success: true,
            data: {
                doctors: doctors
            }
        })

    } catch (err) {
        return next(err)
    }
};
const getDoctor = async (req, res) => {
    try {
        const doctor = await Doctors.findOne({
            where: {
                id: req.params.id
            }
        })
        if(!doctor) return next(Errors.IdInexistente)

        res.json({
            success: true,
            data: {
                doctor: doctor
            }
        })

    } catch (err) {
        return next(err)
    }
};

const createDoctor = async (req, res) => {
    try {
        const doctor = await Doctors.create(req.body)
        res.json({
            success: true,
            data: {
                id: doctor.id
            }
        })
        res.sendStatus(204)
    } catch (err) {
        return next(err)
    }
};

const updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctors.findByPk(req.params.id)    
        const { name, last_name, email, specialty, enrollment} = req.body;
        doctor.name = name;
        doctor.last_name = last_name;
        doctor.email = email;
        doctor.specialty = specialty;
        doctor.enrollment = enrollment; 
        await doctor.save();
        res.json({
            success: true,
            data: {
                id: doctor.id
            }
        })     
    } catch (err) {
        return res.status(500).json({message: Errors.NoSePudoActualizar});
    }    
};

const deleteDoctor = async (req, res) => {
    try {
        await Doctors.destroy({
            where:{
                id: req.params.id
            }
        }) 
    } catch (error) {
        return next(err)
    }   
};

export {getDoctors, getDoctor , createDoctor, updateDoctor, deleteDoctor};