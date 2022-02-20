import { fetchTopLanguages } from './fetchTopLanguages';
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
