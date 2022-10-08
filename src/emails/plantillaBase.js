import transporter from "../config/nodeMailer.js"

export class PlantillaMail {
    constructor(to,subject,text){
        this.from=`'"Nadu Dev 👩‍💻" <naduCodes@gmail.com>'`,
        this.to=to,
        this.subject=subject,
        this.text=text
    }
    async sendMail(){
        try {
            const info = await transporter.sendMail({from:this.from,to:this.to,subject:this.subject,text:this.text})
            console.log(info);
        } catch (error) {
            console.log(error);
            
        }
    }
}