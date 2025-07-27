import { create } from "zustand";
import { getRepositories } from "../api/repository";
import { persist } from "zustand/middleware";

interface Repository {
  name: string;
}

interface RepositoryState {
  repositories: string[];
  error: any;
  fetchRepositories: () => Promise<void>;
}

export const repositoryStore = create(
  persist<RepositoryState>((set) => ({
    repositories: [],
    isLoading: false,
    error: null,
    fetchRepositories: async () => {
      set({ error: null });
      try {
        const data = await getRepositories();
        const filteredRepos = data.filter(
          (repo: Repository) => !["Plain-TIL.github.io", "main_data"].includes(repo.name)
        );
        set({ repositories: filteredRepos.map((repo) => { return repo.name}) })
      } catch (error) {
        set({ error: error })
      }
    }
  }), {
    name: "repositoryStore"
  })
)