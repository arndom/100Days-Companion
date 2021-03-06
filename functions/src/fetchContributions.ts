import { db } from './utils/firebaseConfig';
import { request } from './utils/request';

interface ICommit {
  user: string;
  from: string;
}

interface IContributionDays {
  contributionCount: number;
  date: string;
}

interface IContributionWeek {
  contributionDays: IContributionDays[];
}

interface IContributionsCalendarContent {
  totalContributions: number;
  weeks: IContributionWeek[];
}

interface IContributionsCalendar {
  contributionCalendar: IContributionsCalendarContent;
}

interface IContributions {
  contributionsCollection: IContributionsCalendar;
}

interface IUser {
  user: IContributions;
}

interface ICommitResponse {
  data: IUser;
  errors: any;
}

interface ILGithubResponse {
  data: ICommitResponse;
}

const GITHUB_SECRET = process.env.GH_SECRET;

const fetcher = ({ user, from }: ICommit) => {
  const today = new Date();

  return request(
    {
      query: `
          {
              user(login: "${user}") {
                contributionsCollection(
                  from: "${from}"
                  to: "${today.toISOString()}"
                ) {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      contributionDays {
                        contributionCount
                        date
                      }
                    }
                  }
                }
              }
            }
            `,
    },
    {
      Authorization: `bearer ${GITHUB_SECRET}`,
    },
  );
};

export const fetchContributionsDetails = async ({ user, from }: ICommit) => {
  const res = await fetcher({ user, from }).then((res: ILGithubResponse) => {
    return res;
  });

  if (res.data.errors) {
    console.error(res.data.errors);
  }

  if (res.data.data.user === null) return { error: 'username non-existent' };

  const totalContributions = res.data.data.user.contributionsCollection.contributionCalendar.totalContributions;
  const totalContributionsByWeek = res.data.data.user.contributionsCollection.contributionCalendar.weeks;

  const _contributions = totalContributionsByWeek.map((week) => week.contributionDays);
  const contributions = _contributions.flat();

  const _streak = totalContributionsByWeek.map((week) => week.contributionDays.map((day) => day.contributionCount));

  const _array = _streak.flat();
  const array = _array.slice(0, -1);
  let streak = 0;

  array.forEach((val) => {
    if (val > 0) ++streak;
    if (val === 0) streak = 0;
  });

  if (totalContributions === 0) streak = 0;

  return {
    totalContributions: totalContributions,
    contributionFrequency: contributions,
    streak: streak,
  };
};

const fetchUserContributionCount = async ({ user, from }: ICommit) => {
  const res = await fetcher({ user, from }).then((res: ILGithubResponse) => {
    return res;
  });

  if (res.data.errors) {
    console.error(res.data.errors);
  }

  if (res.data.data.user === null) return { error: 'username non-existent' };

  const totalContributions = res.data.data.user.contributionsCollection.contributionCalendar.totalContributions;
  const totalContributionsByWeek = res.data.data.user.contributionsCollection.contributionCalendar.weeks;

  const _streak = totalContributionsByWeek.map((week) => week.contributionDays.map((day) => day.contributionCount));

  const _array = _streak.flat();
  const array = _array.slice(0, -1);
  let streak = 0;

  array.forEach((val) => {
    if (val > 0) ++streak;
    if (val === 0) streak = 0;
  });

  if (totalContributions === 0) streak = 0;

  return streak;
};

const getUsersDetails = async () => {
  const fetchUsers = await db.collection('users').get();

  const _users = fetchUsers.docs.map((doc) => {
    return { id: doc.id, data: doc.data() };
  });

  const users = _users.map((user) => {
    return {
      id: user.id,
      user: user.data.name as string,
      from: user.data.startDate as string,
    };
  });

  return users;
};

export const updateCount = async () => {
  try {
    const _users = await getUsersDetails();

    const users = await Promise.all(
      _users.map(async (user) => {
        const res = await fetchUserContributionCount({ user: user.user, from: user.from });

        const _user = {
          id: user.id,
          user: user.user,
          from: user.from,
          count: res,
        };

        db.collection('users').doc(user.id).set(
          {
            count: res,
          },
          { merge: true },
        );

        console.log(_user);
        return _user;
      }),
    );

    return { sucess: 200, updatedData: users };
  } catch (error) {
    return { Failure: error };
  }
};

const calculateMilestone = (count: any) => {
  const keys: string[] = [
    'milestones.7days',
    'milestones.14days',
    'milestones.21days',
    'milestones.30days',
    'milestones.60days',
    'milestones.90days',
    'milestones.100days',
  ];

  if (count === 7) return { [keys[0]]: true };
  if (count === 14) return { [keys[1]]: true };
  if (count === 21) return { [keys[2]]: true };
  if (count === 30) return { [keys[3]]: true };
  if (count === 60) return { [keys[4]]: true };
  if (count === 90) return { [keys[5]]: true };
  if (count === 100) return { [keys[6]]: true };

  return 'no update';
};

export const updateMilestone = async () => {
  try {
    const _users = await getUsersDetails();

    const users = await Promise.all(
      _users.map(async (user) => {
        const res = await fetchUserContributionCount({ user: user.user, from: user.from });

        const updatedMilestone = calculateMilestone(res);

        const _user = {
          id: user.id,
          user: user.user,
          count: res,
          updatedMileStone: updatedMilestone,
        };

        if (updatedMilestone !== 'no update') {
          db.collection('users')
            .doc(user.id)
            .update(updatedMilestone)
            .then(() => {
              console.log('Document successfully updated!');
            });
        }

        console.log(_user);
        return _user;
      }),
    );

    return { sucess: 200, updatedUser: users };
  } catch (error) {
    return { Failure: error };
  }
};
