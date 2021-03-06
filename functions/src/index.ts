import * as functions from 'firebase-functions';
import { fetchTopLanguages } from './fetchTopLanguages';
import { sendMail } from './emailNotifications';
import { fetchContributionsDetails, updateCount, updateMilestone } from './fetchContributions';
import * as cors from 'cors';

// // // Start writing Firebase Functions
// // // https://firebase.google.com/docs/functions/typescript
// //

const corsHandler = cors({ origin: true });

export const getTopLanguages = functions.https.onRequest(async (request, response) => {
  corsHandler(request, response, async () => {
    functions.logger.info('Getting languages...', { structuredData: true });
    const username = request.query.username;
    const getLanguage = await fetchTopLanguages(`${username}`);
    response.send(getLanguage);
  });
});

export const getContributionDetails = functions.https.onRequest(async (request, response) => {
  corsHandler(request, response, async () => {
    functions.logger.info('Fetching Contributions...', { structuredData: true });

    const user = request.query.user;
    const from = request.query.from;

    const getCommits = await fetchContributionsDetails({
      user: `${user}`,
      from: `${from}`,
    });
    response.send(getCommits);
  });
});

//update user milestone at 1:00AM daily
export const updateUserMilestone = functions.pubsub
  .schedule('0 1 * * *')
  .timeZone('Etc/GMT')
  .onRun(async () => {
    functions.logger.info('Updating Milestones...', { structuredData: true });
    await updateMilestone();
  });

//update user count at 1:00AM daily
export const updateUserCount = functions.pubsub
  .schedule('0 1 * * *')
  .timeZone('Etc/GMT')
  .onRun(async () => {
    functions.logger.info('Updating user count...', { structuredData: true });
    await updateCount();
  });

export const sendEmails = functions.https.onRequest(async (request, response) => {
  const frequency = request.query.frequency;
  functions.logger.info(`Sending ${frequency} mails...`, { structuredData: true });

  const sendMails = await sendMail(`${frequency}`);
  response.send(sendMails);
});

// Send daily mails by 1:00 AM
export const dailyMails = functions.pubsub
  .schedule('0 1 * * *')
  .timeZone('Etc/GMT')
  .onRun(async () => {
    functions.logger.info('Sending daily mails...', { structuredData: true });

    await sendMail('daily');
  });

// Send weekly mails every Sunday by 1:00 AM
export const weeklyMails = functions.pubsub
  .schedule('0 1 * * Sun')
  .timeZone('Etc/GMT')
  .onRun(async () => {
    functions.logger.info('Sending weekly mails...', { structuredData: true });

    await sendMail('weekly');
  });
