import {Router} from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import controllerAppointment from "./controllers/controller.appointment.js";
import jwt from "./token.js";


const router = Router();

//doctor
router.get("/doctors",jwt.ValidateToken, controllerDoctor.GetDoctors);

router.post("/doctors",jwt.ValidateToken, controllerDoctor.InsertDoctor);

router.put("/doctors/:id",jwt.ValidateToken, controllerDoctor.UpdateDoctor);

router.delete("/doctors/:id",jwt.ValidateToken, controllerDoctor.DeleteDoctor);

router.get("/doctors/:id_doctor/services",jwt.ValidateToken, controllerDoctor.GetServicesByDoctor);

//user
router.post("/users/register", controllerUser.InsertUser);

router.post("/users/login", controllerUser.Login);

router.get("/users/profile",jwt.ValidateToken, controllerUser.Profile);

//appointments
router.get("/appointments",jwt.ValidateToken, controllerAppointment.GetAppointmentsByUser);

router.post("/appointment",jwt.ValidateToken, controllerAppointment.InsertAppointment);


export default router;