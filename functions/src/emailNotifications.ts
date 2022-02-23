'use strict';
import * as nodemailer from 'nodemailer';
// import * as cron from 'node-cron';
import * as admin from 'firebase-admin';

admin.initializeApp();

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
  const users = await admin
    .firestore()
    .collection('users')
    .where('notification_frequency', '==', notificationFrequency)
    .get();
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
        text: `Hi ${user.name},\n\nThis is your daily reminder.\n\nYou can check your progress here: https://100dayscompanion.com/users/${user.name}\n`,
        to: '',
      };
      mailOptions.to = user.email;
      return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    });
  } catch (error) {
    return error;
  }
};
