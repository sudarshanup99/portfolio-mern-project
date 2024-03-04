const nodemailer = require('nodemailer');

// Creating a transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.etheral.mail",
    port: 587, // Gmail SMTP port for SSL
    secure: true, // Use SSL
    auth: {
        user: 'mohammed.dubuque79@ethereal.email',
        pass: 'qK3akbXew5fUjV4A5C' // Use uppercase for password
    },
});

const sendEmailController = (req, res) => {
    try {
        const { name, email, msg } = req.body;

        // Validation
        if (!name || !email || !msg) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields",
            });
        }

        //email matter
        transporter.sendMail({
            to: "mohammed.dubuque79@ethereal.email",
            from: 'sudarshan Upadhaya',
            html: `
            <h5>Detail INFORMATION<h5/>
            <ul>
            <li><p>Name:${name}</p></li>
            <li><p>Name:${email}</p></li>
            <li><p>Name:${msg}</p></li>
            </ul>
            `
        })
        return res.status(200).send({
            success: true,
            message: "Your Message send successfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "send Email Api Error",
            error,
        });
    }
};

module.exports = { sendEmailController };