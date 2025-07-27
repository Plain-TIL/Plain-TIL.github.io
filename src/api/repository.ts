import { Octokit } from "octokit";

const orgName = import.meta.env.VITE_ORG_NAME || ''

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN
})

// 필요
export const getRepositories = async () => {
  const { data, status } = await octokit.request("GET /orgs/{org}/repos", {
    org: orgName,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  if (status == 200) {
    return data;
  } else {
    return [];
  }
}


export const getRepository = async (repo: string) => {
  const { data, status } = await octokit.request("GET /repos/{owner}/{repo}/", {
    owner: orgName,
    repo: repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  if (status == 200) {
    return data;
  } else {
    return [];
  }
}

// 특정 Repo의 JSON 데이터 가져오기
export const getRepositoryContent = async (repo: string, path: string) => {
  const { data, status } = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
    owner: orgName,
    repo: repo,
    path,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  if (status === 200) {
    if (Array.isArray(data)) {
      console.error("Error: Path is a directory.");
      return null;
    }

    if ('content' in data) {
      const content = atob(data.content);
      return JSON.parse(content);
    }
  }

  return null;
};