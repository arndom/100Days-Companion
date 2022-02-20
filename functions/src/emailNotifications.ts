'use strict';
import nodemailer = require('nodemailer');

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  host: 'gmail',
  service: process.env.EMAIL_SERVICE,
  port: 2525,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async (mailOptions: MailOptions): Promise<any> => {
  try {
    return await transporter.sendMail(mailOptions);
  } catch (error) {
    return error;
  }
};
