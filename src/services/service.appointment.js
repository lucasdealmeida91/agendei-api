import repositoryAppointment from "../repositories/repository.appointment.js";
async function GetAppointmentsByUser(id_user) {
    return repositoryAppointment.GetAppointments(id_user);
}   

async function InsertAppointment(id_user, id_doctor, id_service, booking_date, booking_hour) {
    return await repositoryAppointment.InsertAppointment(id_user, id_doctor, id_service, booking_date, booking_hour);

}
export default {GetAppointmentsByUser,InsertAppointment}