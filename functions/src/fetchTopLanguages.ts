import axios from 'axios';
import 'dotenv/config';

interface ILedgenode {
  name: string;
}

interface ILedge {
  size: string;
  node: ILedgenode;
}
interface ILedges {
  edges: ILedge[];
}

interface ILnode {
  name: string;
  languages: ILedges;
  createdAt: string;
}

interface ILnodes {
  nodes: ILnode[];
}

interface ILrepos {
  repositories: ILnodes;
}

interface ILuser {
  user: ILrepos;
}

interface ILanuageResponse {
  data: ILuser;
  errors: any;
}

interface ILGithubResponse {
  data: ILanuageResponse;
}

const request = (data: any, headers: any) => {
  return axios({
    url: 'https://api.github.com/graphql',
    method: 'post',
    headers,
    data,
  });
};

const GITHUB_SECRET = process.env.GH_SECRET;

export const fetchTopLanguages = async (user: string) => {
  const fetcher = () => {
    return request(
      {
        query: `
            {
              user(login: "${user}") {
                repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
                  nodes {
                    name
                    languages(first: 30, orderBy: {field: SIZE, direction: DESC}) {
                      edges {
                        size
                        node {
                          name
                        }
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

  if (res.data.data.user === null) return;

  let repoNodes: any = res.data.data.user.repositories.nodes;

  repoNodes = repoNodes
    .filter((node: ILnode) => {
      return node.languages.edges.length > 0;
    })

    // flatten the list of language nodes
    .reduce((acc: any, curr: any) => curr.languages.edges.concat(acc), [])
    .reduce((acc: any, prev: any) => {
      // get the size of the language (bytes)
      let langSize = prev.size;

      // if we already have the language in the accumulator
      // & the current language name is same as previous name
      // add the size to the language size.
      if (acc[prev.node.name] && prev.node.name === acc[prev.node.name].name) {
        langSize = prev.size + acc[prev.node.name].size;
      }
      return {
        ...acc,
        [prev.node.name]: {
          name: prev.node.name,
          size: langSize,
        },
      };
    }, {});

  const topLangs = Object.keys(repoNodes)
    .sort((a: any, b: any) => repoNodes[b].size - repoNodes[a].size)
    .reduce((result: any, key: any) => {
      result[key] = repoNodes[key];
      return result;
    }, {});

  return topLangs;
};
