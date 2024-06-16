This is a GitHub tracker that is in the stage of development. The main idea is to learn to visualize data, in this particular situation it was most used languages of a specific GitHub user.

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

<p align='center'>
    <img src='./public/screenshots/Screenshot Torvalds.png' alt='Screenshot with a page of Linus Torvalds, a random notable user of GitHub'/>
</p>

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

<p>Stats component animates border radii of most used languages elements. Creating an animation of this type was the main purpose of the entire app. Every border has pseudo-classes <code>::before</code> and <code>::after</code> that create more volume.</p><br>
<p  align='center'>
    <img width='400px' src='./public/screenshots/topLanguagesGif.gif' alt='Most used languages gif'/>
</p>
<br>
<hr>
Shortcuts to both of my GitHub accounts are added as well:<code><br>
< Route path='/kweeuhree' element={<MainLayout user={{nickname: 'kweeuhree'}} />} / > <br>
< Route path='/firstnamenika' element={<MainLayout user={{nickname: 'firstnamenika'}} />} / >
</code>

<p align='center'>
    <img src='./public/screenshots/Screenshot firstnamenika.png' alt='Screenshot with a page of firstnamenika'/>
</p>

<p align='center'>
    <img src='./public/screenshots/Screenshot kweeuhree.png' alt='Screenshot with a page of kweeuhree'/>
</p>