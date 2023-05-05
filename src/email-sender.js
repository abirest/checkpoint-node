const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'abirbelhaj5@gmail.com',
    pass: 'abir1919est1997'
  }
});

const mailOptions = {
  from: 'abirbelhaj5@gmail.com',
  to: 'abirbelhaj5@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent using Node.js and nodemailer!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
