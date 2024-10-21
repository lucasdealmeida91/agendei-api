import {Router} from "express";
import controllerDoctor from "./controllers/controller.doctor.js";


const router = Router();


router.get("/doctors", controllerDoctor.GetDoctors);

router.post("/doctors", controllerDoctor.InsertDoctor);

export default router;