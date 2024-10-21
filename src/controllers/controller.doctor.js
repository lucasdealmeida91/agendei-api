
import serviceDoctor from "../services/service.doctor.js";
async function GetDoctors(req, res) {

    const name = req.query.name;

    const doctors = await serviceDoctor.GetDoctors(name);

    console.log(doctors);

    res.status(200).json(doctors);


}
async function InsertDoctor(req, res) {

    const {name , specialty, icon} = req.body;

    const doctor = await serviceDoctor.InsertDoctor(name, specialty, icon);

    console.log(doctor);

    res.status(201).json(doctor);


}

export default { GetDoctors, InsertDoctor }