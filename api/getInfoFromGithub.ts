import { Octokit } from '@octokit/core';

export type USER = {
  user: string;
  repository: string;
};

export type GITHUB_INFO = {
  name: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
};

export const getInfoFromGit = async (urls: Array<USER>): Promise<any> => {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  const repositories = [];

  for (const url of urls) {
    try {
      const {
        data: { name, description, forks, stargazers_count, html_url },
      } = await octokit.request(`GET /repos/${url.user}/${url.repository}`, {
        owner: 'OWNER',
        repo: 'REPO',
      });
      repositories.push({
        name,
        description,
        forks,
        stars: stargazers_count,
        url: html_url,
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  return repositories;
};
