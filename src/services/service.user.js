import repositoryUser from "../repositories/repository.user.js";
import bcrypt from "bcrypt";
import jwt from "../token.js";
async function InsertUser(name, email, password) {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await repositoryUser.InsertUser(name, email, hashPassword);

    user.token = jwt.CreateToken(user.id_user);
    return user
}

async function Login(email, password) {
    const user = await repositoryUser.FindByEmail(email);

    if (user.length == 0) {
        return [];
    } else {
        if (await bcrypt.compare(password, user.password)) {
            delete user.password;
            user.token = jwt.CreateToken(user.id_user);
            return user;
        } else {
            return [];
        }
    }
}

async function Profile(id_user) {
    const user =  await repositoryUser.FindById(id_user);
    if (user.length == 0) {
        return [];
    } else {
        delete user.password;
        return user;
    }
}

export default { InsertUser, Login,Profile }