import { fetchTopLanguages } from './fetchTopLanguages';
import { sendMail } from './emailNotifications';
import * as functions from 'firebase-functions';

// // // Start writing Firebase Functions
// // // https://firebase.google.com/docs/functions/typescript
// //
export const getTopLanguages = functions.https.onRequest(async (request, response) => {
  functions.logger.info('Getting languages...', { structuredData: true });

  const username = request.query.username;
  const getLanguage = await fetchTopLanguages(`${username}`);
  response.send(getLanguage);
});

export const sendEmails = functions.https.onRequest(async (request, response) => {
  const frequency = request.query.frequency;
  functions.logger.info(`Sending ${frequency} mails...`, { structuredData: true });

  const sendMails = await sendMail(`${frequency}`);
  response.send(sendMails);
});
