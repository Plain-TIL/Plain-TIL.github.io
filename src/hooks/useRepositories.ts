import { useEffect } from 'react';
import { repositoryStore } from '../stores/repositoryStore';
import useRendering from './useRendering';

const useRepositories = () => {
  const { repositories, error, fetchRepositories } = repositoryStore();

  useEffect(() => {
    if (repositories.length === 0) {
      fetchRepositories();
    }
  }, [repositories.length, fetchRepositories]);

  useRendering(() => {
    fetchRepositories();
  });

  return { repositories, error };
};

export default useRepositories;