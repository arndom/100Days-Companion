interface IMilestones {
  '7days': boolean;
  '14days': boolean;
  '21days': boolean;
  '30days': boolean;
  '60days': boolean;
  '90days': boolean;
  '100days': boolean;
}

interface IFirebaseUser {
  count: number;
  email: string;
  milestones: IMilestones;
  name: string;
  notification_frequency: string;
  photo: string;
  selected_paths: string[];
  start_date: string;
}

interface IFeatureRequest {
  id: string;
  title: string;
  description: string;
  type: string;
  votes: number;
  status: string;
  timestamp: number;
}
