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

console.log(new Date());

export const fetchCommitCount = async ({ user, from }: ICommit) => {
  const today = new Date();

  const fetcher = () => {
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

  const res = await fetcher().then((res: ILGithubResponse) => {
    return res;
  });

  if (res.data.errors) {
    console.error(res.data.errors);
  }

  if (res.data.data.user === null) return { error: 'username non-existent' };

  const totalContributions = res.data.data.user.contributionsCollection.contributionCalendar.totalContributions;
  const totalContributionsByWeek = res.data.data.user.contributionsCollection.contributionCalendar.weeks;

  const _count = totalContributionsByWeek.map((week) => week.contributionDays.map((day) => day.contributionCount));

  const _array = _count.flat();
  const array = _array.slice(0, -1);
  let count = 0;

  array.forEach((val) => {
    if (val > 0) ++count;
    if (val === 0) count = 0;
  });

  if (totalContributions === 0) count = 0;

  return {
    totalContributions: totalContributions,
    count: count,
  };
};
