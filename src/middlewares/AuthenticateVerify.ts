import { Request, Response, NextFunction} from 'express'
import { verify } from 'jsonwebtoken'

export function AuthenticateVerify(req: Request, res: Response, next:NextFunction) {
    const auth = req.headers.authorization

    if(!auth) return res.status(400).json({error:"Token Invalido"});

    const [,token] = auth.split(" ")

    try {
        const { sub } = verify(token, 'loli');

        req.body.email = sub
        
        next()
    } catch (
    error) {
        console.log(error)
        res.status(400).json({error:"Token Expirado."})
    }
    
}