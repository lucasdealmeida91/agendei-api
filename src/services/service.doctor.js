import repositoryDoctor from "../repositories/repository.doctor.js";

async function GetDoctors(name) {
    return await repositoryDoctor.GetDoctors(name);

}
async function InsertDoctor(name, specialty, icon) {
    return await repositoryDoctor.InsertDoctor(name, specialty, icon);

}

async function UpdateDoctor(id, name, specialty, icon) {
    return await repositoryDoctor.UpdateDoctor(id ,name, specialty, icon);

}

async function DeleteDoctor(id, ) {
    return await repositoryDoctor.DeleteDoctor(id );

}

export default {GetDoctors,InsertDoctor,UpdateDoctor,DeleteDoctor}