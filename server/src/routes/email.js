const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer")
const { EMAIL_RESERVA,CONTRA_RESERVA } = process.env;

router.post("/", async (req, res) => {

        const {email, option} = req.body
        
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.email",
            port: 587,
            secure: true,
            auth: {
                user: `${EMAIL_RESERVA}`,
                pass: `${CONTRA_RESERVA}`
            }
        })

        const mailOptions = {
            from: `${EMAIL_RESERVA}`,
            to: email,
            subject: "Enviado desde nodemailer",
            text:"Inscripcion Completada."
        }

        transporter.sendMail(mailOptions, (error,info)=>{
            if(error){
                res.status(500).send(error.message)
            } else{
                console.log("Email enviado", info.response)
                res.status(200).json(info)
            }
        })

    
});

module.exports = router;