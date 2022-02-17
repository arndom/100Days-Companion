import { fetchTopLanguages } from './utils';
import * as functions from 'firebase-functions';

// // // Start writing Firebase Functions
// // // https://firebase.google.com/docs/functions/typescript
// //
export const helloWorld = functions.https.onRequest(async (request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  const getLanguage = await fetchTopLanguages('ardnom');
  // console.log('Your top language is', Object.keys(getLanguage)[0]);
  response.send(getLanguage);
});
