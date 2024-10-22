
import serviceUser from "../services/service.user.js";
async function InsertUser(req, res) {

    const { name, email, password } = req.body;

    const user = await serviceUser.InsertUser(name, email, password);


    res.status(201).json(user);


}
async function Login(req, res) {

    const { email, password } = req.body;

    const user = await serviceUser.Login(email, password);

    if (user.length == 0) {
        res.status(401).json({ error: "E-mail ou senha inválidos" });
    } else {
        res.status(200).json(user);
    }


}

async function Profile(req, res) {
    const id_user = req.id_user;
    const user = await serviceUser.Profile(id_user);
    if (user.length == 0) {
        res.status(400).json({ error: "Erro ao buscar dados" });

    }else{
        res.status(200).json(user);

    }

}

export default { InsertUser, Login, Profile }