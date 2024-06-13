This is a GitHub tracker that is in the stage of development.

Built with React and Vite.

Home Page loads a random notable GitHub user, such as Linus Torvalds, or Guido van Rossum.
<br>
<code>const getRandomNotableUser = () => {<br>
&nbsp;const randomIndex = Math.floor(Math.random() * notableUsers.length);<br>
&nbsp;return notableUsers[randomIndex];
    <br>
  }<br>
&nbsp;const randomNotableUser = getRandomNotableUser();
</code>

UserSearch component takes random notable user name and puts it through GitHub API, fetching relevant repositories, user bio and avatar.
<br>
<p>fetchData.js contains main fetching and analyzing logic, such as this function that gets 3 top used languages from a list of repositories.</p>
<code>

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
</code>