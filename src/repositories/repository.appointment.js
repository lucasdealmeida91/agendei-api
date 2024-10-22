import { query } from "../database/sqlite.js";

async function GetAppointments(id_user) {


    let sql = `
    select a.id_appointment,
    s.description as service,
    d.name as doctor,
    d.specialty,
    a.booking_date,
    a.booking_hour,
    u.name as user,
    ds.price
    from appointments a 
    join services s on (s.id_service = a.id_service) 
    join doctors d on (d.id_doctor = a.id_doctor) 
    join users u on (u.id_user = a.id_user) 
    join doctors_services ds on (ds.id_doctor = a.id_doctor and ds.id_service = a.id_service) 
    where a.id_user = ? order by a.booking_date, a.booking_hour`;
    const appointments = await query(sql, id_user);
    return appointments;
}

async function InsertAppointment(id_user, id_doctor, id_service, booking_date, booking_hour) {


    let sql = `insert into appointments (id_user, id_doctor, id_service, booking_date, booking_hour) values (?, ?, ?, ?, ?)
        returning id_appointment`;
    const appointment = await query(sql, [id_user, id_doctor, id_service, booking_date, booking_hour]);
    return appointment[0];
}

export default { GetAppointments, InsertAppointment }

/*
{ id_appointment: 1, service: "Consultation", doctor: "Dr. John Doe", specialty: "Cardiology", booking_date: "2023-11-01", booking_hour: "09:00" },
    { id_appointment: 2, service: "Follow-up", doctor: "Dr. Jane Smith", specialty: "Dermatology", booking_date: "2023-11-02", booking_hour: "10:30" },
    { id_appointment: 3, service: "Check-up", doctor: "Dr. Michael Brown", specialty: "Pediatrics", booking_date: "2023-11-03", booking_hour: "11:00" },
    { id_appointment: 4, service: "Therapy", doctor: "Dr. Emily Johnson", specialty: "Oncology", booking_date: "2023-11-04", booking_hour: "14:00" },
    { id_appointment: 5, service: "Consultation", doctor: "Dr. William Lee", specialty: "Neurology", booking_date: "2023-11-05", booking_hour: "15:30" },
    { id_appointment: 6, service: "Follow-up", doctor: "Dr. Sarah Wilson", specialty: "Psychiatry", booking_date: "2023-11-06", booking_hour: "16:00" },
    { id_appointment: 7, service: "Surgery", doctor: "Dr. Christopher Davis", specialty: "Orthopedics", booking_date: "2023-11-07", booking_hour: "08:00" },
    { id_appointment: 8, service: "Consultation", doctor: "Dr. Amanda Martinez", specialty: "Gynecology", booking_date: "2023-11-08", booking_hour: "09:30" },
    { id_appointment: 9, service: "Check-up", doctor: "Dr. James Thompson", specialty: "Urology", booking_date: "2023-11-09", booking_hour: "11:30" },
    { id_appointment: 10, service: "Therapy", doctor: "Dr. Samantha White", specialty: "Endocrinology", booking_date: "2023-11-10", booking_hour: "13:00" },
    { id_appointment: 11, service: "Consultation", doctor: "Dr. Robert Harris", specialty: "Rheumatology", booking_date: "2023-11-11", booking_hour: "14:30" },
    { id_appointment: 12, service: "Follow-up", doctor: "Dr. Laura Garcia", specialty: "Ophthalmology", booking_date: "2023-11-12", booking_hour: "15:00" },
    { id_appointment: 13, service: "Check-up", doctor: "Dr. Daniel Clark", specialty: "Dentistry", booking_date: "2023-11-13", booking_hour: "16:30" },
    { id_appointment: 14, service: "Therapy", doctor: "Dr. Olivia Rodriguez", specialty: "Allergy & Immunology", booking_date: "2023-11-14", booking_hour: "09:00" },
    { id_appointment: 15, service: "Consultation", doctor: "Dr. Kevin Nguyen", specialty: "Gastroenterology", booking_date: "2023-11-15", booking_hour: "10:00" },
    { id_appointment: 16, service: "Follow-up", doctor: "Dr. Maria Lopez", specialty: "Pulmonology", booking_date: "2023-11-16", booking_hour: "11:30" },
    { id_appointment: 17, service: "Check-up", doctor: "Dr. Eric Scott", specialty: "Hematology", booking_date: "2023-11-17", booking_hour: "13:00" },
    { id_appointment: 18, service: "Therapy", doctor: "Dr. Jessica Adams", specialty: "Otolaryngology", booking_date: "2023-11-18", booking_hour: "14:00" },
    { id_appointment: 19, service: "Consultation", doctor: "Dr. Brian Hall", specialty: "Nephrology", booking_date: "2023-11-19", booking_hour: "15:30" },
    { id_appointment: 20, service: "Follow-up", doctor: "Dr. Michelle Carter", specialty: "Infectious Diseases", booking_date: "2023-11-20", booking_hour: "16:00" },

*/ 