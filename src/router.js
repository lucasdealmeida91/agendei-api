import {Router} from "express";
import controllerDoctor from "./controllers/controller.doctor.js";


const router = Router();


router.get("/doctors", controllerDoctor.GetDoctors);

router.post("/doctors", controllerDoctor.InsertDoctor);

router.put("/doctors/:id", controllerDoctor.UpdateDoctor);

router.delete("/doctors/:id", controllerDoctor.DeleteDoctor);

export default router;