import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { name, lastname, number, email, city, message } =
                req.body;

            console.log(req.body);

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: "bosc790@gmail.com", // generated ethereal user
                    pass: "Bosc010629", // generated ethereal password
                },
            });

            console.log(transporter);

            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    return;
                } else {
                    console.log("Server is ready to take our messages");
                }
            });

            
            const info = await transporter.sendMail({
                from: "bosc790@gmail.com",
                to: "bosc790@gmail.com",
                subject: "MESSAGE FROM SOFTKITEC WEBPAGE",
                text: "Envio este correo de prueba",
                // text: `Name: ${name}${" "}${lastname}\nPhone number: ${number}\nE-mail: ${email}\nCity: ${city}\nMessage: ${message}`,
            });

            console.log("Message sent: %s", info.messageId);
            res.status(200).json({ message: "Email sent" });
        } catch (err) {
            res.status(500).json({
                message: "Error sending the message",
                error: err,
            });
        }
    }
}
