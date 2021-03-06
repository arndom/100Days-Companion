import { db } from './firebaseConfig';
import { collection, doc, addDoc, updateDoc, onSnapshot, Timestamp } from 'firebase/firestore';

export const addFeatureRequest = async (featureRequest: IFeatureRequest) => {
  const { title, description, type, status, votes, timestamp } = featureRequest;
  const featureRequestRef = collection(db, 'roadmap');
  const newFeatureRequest = await addDoc(featureRequestRef, { title, description, type, status, votes, timestamp });

  return newFeatureRequest;
};

export const getFeatureRequests = async () => {
  const featureRef = collection(db, 'roadmap');
  // const snapshot = await getDocs(featureRef);
  return featureRef;
};

export const voteFeatureRequest = async (id: string, votes: number) => {
  const featureRef = doc(db, 'roadmap', id);
  await updateDoc(featureRef, {
    votes: votes + 1,
  });
};

export const updateNotificationsFreq = async (id: string, value: string) => {
  const ref = doc(db, 'users', id);
  await updateDoc(ref, {
    notificationFrequency: value,
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const filterRoadmapsByStatus = (roadmaps: any, status: string) => {
  const filteredRoadmap = roadmaps.filter((roadmap: IFeatureRequest) => roadmap.status === status);
  const sortedRoadmap = filteredRoadmap.sort((a: IFeatureRequest, b: IFeatureRequest) => {
    return b.votes - a.votes;
  });
  return sortedRoadmap;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertRoadmapsSnapshotToMap = (roadmaps: any) => {
  const transformedRoadmaps = roadmaps.docs?.map(
    (doc: { id: string; data: () => { title: string; description: string; type: string; votes: number } }) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    },
  );

  return transformedRoadmaps;
};

export { onSnapshot, Timestamp };
