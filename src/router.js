import {Router} from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import jwt from "./token.js";


const router = Router();


router.get("/doctors",jwt.ValidateToken, controllerDoctor.GetDoctors);

router.post("/doctors",jwt.ValidateToken, controllerDoctor.InsertDoctor);

router.put("/doctors/:id",jwt.ValidateToken, controllerDoctor.UpdateDoctor);

router.delete("/doctors/:id",jwt.ValidateToken, controllerDoctor.DeleteDoctor);


router.post("/users/register", controllerUser.InsertUser);

router.post("/users/login", controllerUser.Login);



export default router;