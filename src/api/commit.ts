import { Octokit } from "octokit"

const orgName = import.meta.env.VITE_ORG_NAME || ''
const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN
})

interface Props {
  users: any[]
}

export const pushRepositoryContent = async (repo: string, data: Props, path: string) => {
  // 데이터를 blob으로 변환
  const { sha: blobSha } = (await octokit.request('POST /repos/{owner}/{repo}/git/blobs', {
    owner: orgName,
    repo: repo,
    content: JSON.stringify(data),
    encoding: 'utf-8',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  })).data;

  // ref/heads/main 브랜치의 최신 커밋 SHA 가져오기
  const { object: { sha: latestCommitSha } } = (await octokit.request('GET /repos/{owner}/{repo}/git/ref/{ref}', {
    owner: orgName,
    repo: repo,
    ref: 'heads/main',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  })).data;

  // 최신 커밋 정보를 가져와서 트리 SHA를 얻기
  const { tree: { sha: latestTreeSha } } = (await octokit.request('GET /repos/{owner}/{repo}/git/commits/{commit_sha}', {
    owner: orgName,
    repo: repo,
    commit_sha: latestCommitSha,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  })).data;

  // tree 개체 생성
  const { sha: newTreeSha } = (await octokit.request('POST /repos/{owner}/{repo}/git/trees', {
    owner: orgName,
    repo: repo,
    base_tree: latestTreeSha,
    tree: [
      {
        path: path,
        mode: '100644',
        type: 'blob',
        sha: blobSha
      }
    ],
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  })).data;

  // Commit 개체 생성
  const { sha: newCommitSha } = (await octokit.request('POST /repos/{owner}/{repo}/git/commits', {
    owner: orgName,
    repo: repo,
    message: "User Recode Update",
    tree: newTreeSha,
    parents: [latestCommitSha], // 최신 커밋을 부모로 설정
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })).data;

  // Refs 업데이트
  const update = await octokit.request('PATCH /repos/{owner}/{repo}/git/refs/{ref}', {
    owner: orgName,
    repo: repo,
    ref: 'heads/main',
    sha: newCommitSha,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  console.log('Refs updated successfully:', update.data);
}