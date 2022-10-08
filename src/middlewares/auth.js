import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const {TOKEN_KEY} = process.env;

 const verifyToken = (req,res,next)=>{
    console.log(req.headers);
    const token = req.body.token || req.query.token || req.headers['authorization']
    if(!token) return res.status(403).json({message:`Unauthenticated`})
    try {
        const decoded = jwt.verify(token,TOKEN_KEY);
        req.user = decoded
    } catch (error) {
        return res.status(401).json({mesage:`Invalid Token`})
    }
    return next()
}
export default verifyToken;