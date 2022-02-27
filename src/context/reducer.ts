export const initialState: IFirebaseUser = {
  name: '',
  email: '',
  photo: '',
  count: 0,
  milestones: {
    '7days': false,
    '14days': false,
    '21days': false,
    '30days': false,
    '60days': false,
    '90days': false,
    '100days': false,
  },
  stack: {},
  notificationFrequency: 'daily',
  startDate: new Date(),
};

export interface Action {
  type: string;
  payload: IFirebaseUser;
}

export const reducer = (state: IFirebaseUser, action: Action): IFirebaseUser => {
  switch (action.type) {
    case 'CHECK_USER': {
      return action.payload;
    }

    default:
      return state;
  }
};
