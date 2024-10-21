import repositoryDoctor from "../repositories/repository.doctor.js";

async function GetDoctors(name) {
    return await repositoryDoctor.GetDoctors(name);

}
async function InsertDoctor(name, specialty, icon) {
    return await repositoryDoctor.InsertDoctor(name, specialty, icon);

}

export default {GetDoctors,InsertDoctor}