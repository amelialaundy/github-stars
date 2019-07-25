/* eslint-disable no-console */
export const getRepositories = async (languageName, since) => {
  const url = `https://api.github.com/search/repositories?q=language:${languageName}+created:>${since}&sort=stars`;
  const response = await fetch(url).catch((err) => {
    console.error("Error retrieving repositories from GitHub API", err);
  });
  if (!response) {
    return [];
  }
  const body = await response.json();

  if (!response.ok) {
    console.error("Error retrieving repositories from GitHub API", body);
    return [];
  }
  return body.items.slice(0, 3);
};
