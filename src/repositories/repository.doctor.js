
    // const doctors = [ { id_doctor: 1, name: "Dr. John Doe", specialty: "Cardiology", icon: "M" },
    //     { id_doctor: 2, name: "Dr. Jane Smith", specialty: "Dermatology", icon: "F" },
    //     { id_doctor: 3, name: "Dr. Michael Brown", specialty: "Pediatrics", icon: "M" },
    //     { id_doctor: 4, name: "Dr. Emily Johnson", specialty: "Oncology", icon: "F" },
    //     { id_doctor: 5, name: "Dr. William Lee", specialty: "Neurology", icon: "M" },
    //     { id_doctor: 6, name: "Dr. Sarah Wilson", specialty: "Psychiatry", icon: "F" },
    //     { id_doctor: 7, name: "Dr. Christopher Davis", specialty: "Orthopedics", icon: "M" },
    //     { id_doctor: 8, name: "Dr. Amanda Martinez", specialty: "Gynecology", icon: "F" },
    //     { id_doctor: 9, name: "Dr. James Thompson", specialty: "Urology", icon: "M" },
    //     { id_doctor: 10, name: "Dr. Samantha White", specialty: "Endocrinology", icon: "F" },
    //     { id_doctor: 11, name: "Dr. Robert Harris", specialty: "Rheumatology", icon: "M" },
    //     { id_doctor: 12, name: "Dr. Laura Garcia", specialty: "Ophthalmology", icon: "F" },
    //     { id_doctor: 13, name: "Dr. Daniel Clark", specialty: "Dentistry", icon: "M" },
    //     { id_doctor: 14, name: "Dr. Olivia Rodriguez", specialty: "Allergy & Immunology", icon: "F" },
    //     { id_doctor: 15, name: "Dr. Kevin Nguyen", specialty: "Gastroenterology", icon: "M" },
    //     { id_doctor: 16, name: "Dr. Maria Lopez", specialty: "Pulmonology", icon: "F" },
    //     { id_doctor: 17, name: "Dr. Eric Scott", specialty: "Hematology", icon: "M" },
    //     { id_doctor: 18, name: "Dr. Jessica Adams", specialty: "Otolaryngology", icon: "F" },
    //     { id_doctor: 19, name: "Dr. Brian Hall", specialty: "Nephrology", icon: "M" },
    //     { id_doctor: 20, name: "Dr. Michelle Carter", specialty: "Infectious Diseases", icon: "F" },];
    //     return doctors;
       
    import { query } from "../database/sqlite.js";

    async function GetDoctors(name) {
        //uma forma de fazer 
        // let sql = "select * from doctors ";
        // sql += name ? `where name like '%${name}%'` : "";
        // sql = sql + "order by name "
    
        let filtro = [];
    
        let sql = "select * from doctors ";
        if (name) {
            sql = sql + "where name like ? ";
            filtro.push('%' + name + '%');
        }
        sql = sql + "order by name"
        const doctors = await query(sql, filtro);
        return doctors;
    
    }
    

    async function InsertDoctor(name, specialty, icon) {   

    
        let sql = `insert into doctors (name, specialty, icon) values (?, ?, ?)
        returning id_doctor`;
        const doctor = await query(sql, [name, specialty, icon]);
        return doctor[0];
    }
     
    
    export default { GetDoctors,InsertDoctor }