
import serviceDoctor from "../services/service.doctor.js";
async function GetDoctors(req, res) {

    const name = req.query.name;

    const doctors = await serviceDoctor.GetDoctors(name);


    res.status(200).json(doctors);


}
async function InsertDoctor(req, res) {

    const {name , specialty, icon} = req.body;

    const doctor = await serviceDoctor.InsertDoctor(name, specialty, icon);


    res.status(201).json(doctor);


}
async function UpdateDoctor(req, res) {

    const { name , specialty, icon} = req.body;
    const { id } = req.params;

    const doctor = await serviceDoctor.UpdateDoctor(id, name, specialty, icon);


    res.status(200).json(doctor);


}

async function DeleteDoctor(req, res) {

    const { id } = req.params;

    const doctor = await serviceDoctor.DeleteDoctor(id );


    res.status(200).json(doctor);


}

async function GetServicesByDoctor(req, res) {
    const  id_doctor  = req.params.id_doctor;
    const services = await serviceDoctor.GetServicesByDoctor(id_doctor);
    res.status(200).json(services);
}

export default { GetDoctors, InsertDoctor,UpdateDoctor, DeleteDoctor,GetServicesByDoctor }