import serviceAppointment from "../services/service.appointment.js";

async function GetAppointmentsByUser(req, res) {

    const id_user = req.id_user;

    const appointments = await serviceAppointment.GetAppointmentsByUser(id_user);
    res.status(200).json(appointments);
}

async function InsertAppointment(req, res) {
    const id_user = req.id_user;
    const { id_doctor, id_service, booking_date, booking_hour } = req.body;

    const doctor = await serviceAppointment.InsertAppointment(id_user, id_doctor, id_service, booking_date, booking_hour);


    res.status(201).json(doctor);


}


export default { GetAppointmentsByUser, InsertAppointment }