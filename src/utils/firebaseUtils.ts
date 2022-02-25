import { db } from './firebaseConfig';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

export const addFeatureRequest = async (featureRequest: IFeatureRequest) => {
  const { title, description, type, votes } = featureRequest;
  const suggestionsRef = doc(db, 'roadmap', 'suggestions');

  const newFeatureRequest = await updateDoc(suggestionsRef, {
    type: 'suggestions',
    items: arrayUnion({ title, description, type, votes }),
  });

  return newFeatureRequest;
};
