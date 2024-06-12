const getRepos = async (reposUrl) => {
    try {
      const response = await fetch(reposUrl);
      const data = await response.json();
      console.log('data inside getRepos of fetchData');
      return data;

    } catch (error) {
      console.error('Error fetching repositories: ', error);
    }
  };

const fetchUser = async (username) => {
    console.log('attempting fetch');
    const baseUrl = `https://api.github.com/`;
    const wordQuery = 'users/';
    const fetchRequest = `${baseUrl}${wordQuery}${username}`;

    console.log(fetchRequest);

    try {
      const response = await fetch(fetchRequest);
      const data = await response.json();
      const reposUrl = data.repos_url;

      console.log(data);

      return { data, reposUrl };

    } catch (error) {
      console.error('Error inside fetchUser: ', error);
    }
  };

export const fetchUserData = async (username) => {
    const { data, reposUrl } = await fetchUser(username);
    const reposData = await getRepos(reposUrl);

    return { data, reposData };
}