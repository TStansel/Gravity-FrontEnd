const functions = require("firebase-functions");
const config = functions.config();
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});


admin.initializeApp();


const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const {name, email, phone, message} = request.query;

    let mailOptions = {
      from: "Gravity Data Platforms",
      to: "cory.brad.anderson@gmail.com",
      subject: "Message Received for Gravity",
      html: `
        <p style="font-size: 16px;">From: ${name}</p>
        <p style="font-size: 16px;">Email: ${email}</p>
        <p style="font-size: 16px;">Phone Number: ${phone}</p>
        <p style="font-size: 16px;">Message: ${message}</p>
      `,
    };
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });

    mailOptions = {
      from: "Gravity Data Platforms",
      to: email,
      subject: "We have received your message",
      html: `
        <p style="font-size: 16px;">We have received 
        your email and will be in touch shortly</p>
        <p style="font-size: 16px;">Thank You,</p>
        <p style="font-size: 16px;">Gravity Team</p>
      `,
    };
    transporter.sendMail(mailOptions);
  });
});
