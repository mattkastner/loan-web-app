const nodemailer = require("nodemailer");

module.exports = function(req, res, next) {
    const send = (to, subject, body = "", attachments = []) => {
        var transporter = nodemailer.createTransport({
            host: "smtp.sendgrid.net",
            port: 587,
            secure: false,
            auth: {
                user: "apikey",
                pass: "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",
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false,
            },
        });

        var defaultBody = `<p>Dear Concern,</p>
        <p>A Non-Conformity (NC) in your designated area has been generated through the FFL Compliance App.</p>
        <p>For details please visit the App and submit necessary Corrective Action Plan (CAP).</p>
        <br>
        <p> Regards,
        <br>
        FFL Compliance Team</p>`;

        var mailOptions = {
            from: "sabbir.hossain2668@gmail.com",
            to,
            subject,
            html: body == "" ? defaultBody : body,
            attachments,
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log("Email err:" + error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
    };
    send("sabbir.h2668@gmail.com", "Hello", "This is body");
    res.send("Email sent");
};