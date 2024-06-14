/**
 * Fetches all repositories from a given GitHub API URL.
 *
 * This function makes an HTTP GET request to the specified GitHub API URL
 * to fetch the list of repositories. It parses the JSON response and
 * returns the data.
 *
 * @param {string} reposUrl - The GitHub API URL to fetch repositories from.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of repository objects.
 * @throws {Error} If the fetch operation fails.
 */
const getRepos = async (reposUrl) => {
  const repos = [];
  let page = 1;

  try {

      while(true) {
          const response = await fetch(`${reposUrl}?per_page=100&page=${page}`);
          if(response.ok) {
              const data = await response.json();
              // if no repositories left
              if(data.length === 0) {
                  //exit the loop
                  break; 
              }
              repos.push(...data);
              page += 1;     
          }
      }

  // //return data
    return repos;

  } catch (error) {
    console.error('Error fetching repositories: ', error);
  }
};

/**
* Fetches user data from the GitHub API.
*
* This function makes an HTTP GET request to the GitHub API to fetch
* the public repositories of a specified user. 
*
* @param {string} username - The GitHub username to fetch repositories for.
* @returns {{ data: Array<Object>, reposUrl: string }} An object containing the repository data and the API URL.
*/
const fetchUser = async (username) => {
  // console.log('attempting fetch');
  const baseUrl = `https://api.github.com/`;
  const wordQuery = 'users/';
  const fetchRequest = `${baseUrl}${wordQuery}${username}`;

  // console.log(fetchRequest);

  try {
    const response = await fetch(fetchRequest);
    const data = await response.json();
    const reposUrl = data.repos_url;

    // console.log(data, 'data');
    // console.log(reposUrl, 'reposUrl');
    return { data, reposUrl };

  } catch (error) {
    console.error('Error inside fetchUser: ', error);
  }
};

/**
* Determines the top 3 most used programming languages from a list of repositories.
*
* This function processes an array of repository data, extracts the programming languages
* used, counts the occurrences of each language, and returns the top 3 most used languages.
*
* @param {Array<Object>} reposData - An array of repository objects containing repository data.
* @returns {Array<string>} An array of the top 3 most used programming languages.
*/
const getMostUsedLang = (reposData) => {
  // get all languages
  const allLanguages = reposData
  // filter every repo where language exists
  .filter(repo => repo.language !== null)
  // return every language
  .map(repo => repo.language);

  //initialize languages object that will store counts
  let lang_dict = {};

  // console.log(allLanguages, 'allLanguages');

  //loop through languages
  allLanguages.forEach((language) => {
      //if this language has already been added
      if(Object.keys(lang_dict).includes(language)) {
          // increment count
          lang_dict[language] += 1;
      // if this language still needs to be added
      } else {
          // initialize with count 1
          lang_dict[language] = 1;
      }

      return lang_dict;
  })


  // get top 3 used languages, loop through entries
  const topLanguages = Object.entries(lang_dict)
      //sort by number(value) in desc order
      .sort((a,b) => b[1]-a[1])
      //map every first element(language)
      .map(el=>el[0])
      //get top 3 languages
      .slice(0,3);
  
  // console.log(topLanguages)
  return topLanguages;
}

/**
* Fetches user data, repositories, and most used languages for a given username.
*
* This function combines multiple API calls to fetch user data, their repositories,
* and determine the top three most used programming languages from those repositories.
*
* @param {string} username - The GitHub username to fetch data for.
* @returns {Promise<{ data: Object, reposData: Array<Object>, mostUsedLang: Array<string> }>} A promise that resolves to an object containing user data, repositories data, and top three most used languages.
*/
export const fetchUserData = async (username) => {
  // get user data and repos url
  const { data, reposUrl } = await fetchUser(username);
  // get array with first 30 repositories
  const reposData = await getRepos(reposUrl);
  console.log(reposData, 'repos data of fetchData');
  // get top three most used languages
  const mostUsedLang = getMostUsedLang(reposData);

  return { data, reposData, mostUsedLang };
}


// EXPERIMENTAL FEATURE: GET COMMIT HISTORY:---------------------------------------------------------------------------------
// const getCommitHistory = async (reposData) => {
//   let numOfCommits = 0;
//   const getCommitPromise = async (repo) => {
//     try {
//       const properUrl = repo.commits_url.slice(0, repo.commits_url.length - 6);
//        //fetch commits and return length
//         const response = await fetch(properUrl);
//         const commits = await response.json();
//         return commits.length;
//       } catch (error) {
//       console.error(`Error fetching commits for ${repo.name}:`, error);
//       return 0;
//     }
//   }
//     await Promise.all(reposData.map(async (repo) => {
//       const commitsLength = await getCommitPromise(repo);
//       numOfCommits += commitsLength;
//     }))
  
//   return numOfCommits;
// }

//-------------------------------------------------------------------------------------------------------------------------------