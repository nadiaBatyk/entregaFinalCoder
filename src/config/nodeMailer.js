import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:process.env.ADMIN_MAIL,
        pass:process.env.ADMIN_MAIL_PASS
    }
})
export default transporter;