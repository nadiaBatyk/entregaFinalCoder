import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();
const client = twilio(process.env.TWILIO_SID,process.env.TWILIO_AUTHTOKEN)

export class MensajeBase {
    constructor(body,to){
        this.body=body;
        this.from=process.env.TWILIO_NUMBER;
        this.to=to;
    }
    async sendMessage(whatsapp=false){
        if(whatsapp){
            this.from = `whatsapp:${process.env.TWILIO_WHATSAPP}`
            this.to = `whatsapp:${this.to}`
        }
        try {
            const message = await client.messages.create(this)
            console.log(message);
        } catch (error) {
            console.log(error);
            
        }
    }
}