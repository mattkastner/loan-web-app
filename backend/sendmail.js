const nodemailer = require("nodemailer");

const send = (to, subject, body = "", attachments = []) => {
    var transporter = nodemailer.createTransport({
        // host: "smtp.sendgrid.net",
        // port: 587,
        // secure: false,
        // auth: {
        //     user: "apikey",
        //     pass: "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",
        // },
        // tls: {
        //     // do not fail on invalid certs
        //     rejectUnauthorized: false,
        // },
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "8f87a8998fbe41",
            pass: "0ae6c802418875",
        },
    });

    var defaultBody = `Default body`;

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

module.exports = function(req, res, next) {
    const { email, name, phoneNum, getfinanceInfo, textFeild } = req.body;
    var body = `
        <dl>
            <dt>Name:</dt>
            <dd>${name}</dd>
            <dt>Email:</dt>
            <dd>${email}</dd>
            <dt>Phone:</dt>
            <dd>${phoneNum}</dd>
            <dt>Fet Fianance Info:</dt>
            <dd>${getfinanceInfo}</dd>
            <dt>Texts:</dt>
            <dd>${textFeild}</dd>
        </dl>`;
    try {
        send("sabbir.h2668@gmail.com", "Hello", body);
    } catch (err) {
        res.send(`Error: ${err}`);
    }
    res.send("Email sent successfully");
};