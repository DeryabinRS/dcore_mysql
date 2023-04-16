import { sign } from "jsonwebtoken";
import { serialize } from 'cookie';

const secret: any = process.env.SECRET_JWT

//api/auth/login
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req:any, res:any) {
    const { username, password } = req.body;

    if(username === 'Admin' && password === 'Admin'){
        const token = sign({
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, //30 days
                username: username,
            }, secret);
        const serialised = serialize("OursiteJWT", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
        });

        res.setHeadet('Set-Cookie', serialised);
        res.status(200).json({ message: 'Success' })
    } else {
        res.status(401).json({ message: "Invalid credentials!" })
    }

}