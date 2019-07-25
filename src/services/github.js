export const getRepositories = async () => {
  const url = "https://api.github.com/search/repositories?q=language%3Ajavascript&sort=stars";
  const response = await fetch(url);
  console.log(response);
  const repositoriesData = await response.json();
  return repositoriesData.items;
}