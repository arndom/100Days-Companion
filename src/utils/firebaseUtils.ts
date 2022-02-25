import { db } from './firebaseConfig';
import { collection, doc, updateDoc, arrayUnion, getDocs } from 'firebase/firestore';

export const addFeatureRequest = async (featureRequest: IFeatureRequest) => {
  const { title, description, type, votes } = featureRequest;
  const suggestionsRef = doc(db, 'roadmap', 'suggestions');

  const newFeatureRequest = await updateDoc(suggestionsRef, {
    type: 'suggestions',
    items: arrayUnion({ title, description, type, votes }),
  });

  return newFeatureRequest;
};

export const getRoadmaps = async () => {
  const featureRef = collection(db, 'roadmap');
  const snapshot = await getDocs(featureRef);
  return snapshot;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertRoadmapsSnapshotToMap = (roadmaps: any) => {
  const transformedRoadmaps = roadmaps.docs?.map(
    (doc: { data: () => { type: string; color: string; items: IFeatureRequest } }) => {
      const { type, color, items } = doc.data();

      return {
        type,
        color,
        items,
      };
    },
  );

  return transformedRoadmaps;
};
