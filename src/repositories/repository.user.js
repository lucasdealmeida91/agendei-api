import { query } from "../database/sqlite.js";


async function InsertUser(name, email, password) {


    let sql = `insert into users (name, email, password) values (?, ?, ?)
        returning id_user`;
    const user = await query(sql, [name, email, password]);
    return user[0];
}

async function FindByEmail(email) {
    let sql = `select * from users where email = ?`;
    const user = await query(sql, [email]);
    if (user.length == 0) {
        return [];
    } else {
        return user[0];
    }
}

export default { InsertUser,FindByEmail }