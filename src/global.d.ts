interface IMilestones {
  '7days': boolean;
  '14days': boolean;
  '21days': boolean;
  '30days': boolean;
  '60days': boolean;
  '90days': boolean;
  '100days': boolean;
}

interface IStack {
  [JS: string]: boolean;
  [React: string]: boolean;
  [Vue: string]: boolean;
  [Angular: string]: boolean;
  [Node: string]: boolean;
}

interface IFirebaseUser {
  name: string | null;
  email: string | null;
  photo: string | null;
  count: number;
  milestones: IMilestones;
  notificationFrequency: string;
  stack: IStack;
  startDate: Date | null;
}
