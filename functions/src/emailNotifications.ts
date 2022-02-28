'use strict';
import * as nodemailer from 'nodemailer';
import { db } from './utils/firebaseConfig';
// import * as cron from 'node-cron';

interface Transport {
  host: string;
  service: string | undefined;
  port: number;
  auth: { user: string | undefined; pass: string | undefined };
}

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

const transport: Transport = {
  host: 'gmail',
  service: process.env.EMAIL_SERVICE,
  port: 2525,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

const transporter = nodemailer.createTransport(transport);

const getUsers = async (notificationFrequency: string) => {
  const users = await db.collection('users').where('notificationFrequency', '==', notificationFrequency).get();
  const usersArray = users.docs.map((doc) => {
    return doc.data();
  });
  return usersArray;
};

export const sendMail = async (notificationFrequency: string) => {
  try {
    const users = await getUsers(notificationFrequency);
    users.forEach(async (user) => {
      const mailOptions: MailOptions = {
        from: '100 Days Companion',
        subject: 'Your daily reminder',
        text: `Hi ${user.name},\n\nThis is your reminder to keep pushing awesome code.\n\nYou can check your progress here: https://companion.netlify.app\n`,
        to: '',
      };
      mailOptions.to = user.email;
      return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent to ${user.email}: ` + info.response);
        }
      });
    });
    return { Success: 200 };
  } catch (error) {
    return { Failure: error };
  }
};
