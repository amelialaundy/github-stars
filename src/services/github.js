export const getRepositories = async (languageName, since) => {
  const url = `https://api.github.com/search/repositories?q=language:${languageName}+created:>${since}&sort=stars`;
  const response = await fetch(url);
  console.log(response);
  const repositoriesData = await response.json();
  return repositoriesData.items.slice(0,3);
}