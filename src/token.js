import jwt from "jsonwebtoken";

const secretToken = "agendeijs123";

function CreateToken(id_user) {
    const token = jwt.sign({ id_user }, secretToken, { expiresIn: 9999999999 });
    return token;
}

function ValidateToken(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).json({ error: "Token não informado" });
    }

    const [bearer, token] = authToken.split(" ");
    jwt.verify(token, secretToken, (error, decoded) => {
        if (error) {
            return res.status(401).json({ error: "Token inválido" });
        }

        //o modelo abaixo altera o campo dentro de um objeto porem nao testei
        // req.user = {
        //     id_user: decoded.id_user
        // }
        req.id_user = decoded.id_user
        next();

    });
}


export default { CreateToken, ValidateToken }