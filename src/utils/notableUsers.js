const notableUsers = [
    { 
      notable: `Guido van Rossum is a Dutch programmer. 
              He is the creator of the Python programming language, 
              for which he was the "benevolent dictator for life" 
              until he stepped down from the position on 12 July 2018.`, 
      nickname: 'gvanrossum'
  }, {
     notable: `Linus Benedict Torvalds is a Finnish-American 
            software engineer who is the creator and lead developer 
            of the Linux kernel. He also created the distributed 
            version control system Git.`, 
     nickname: 'torvalds'
  }, {
     notable: `Lennart Poettering is a German software engineer 
              working for Microsoft and the original author of PulseAudio, 
              Avahi and systemd.`, 
     nickname: 'poettering'
  } , {
     notable: `David Heinemeier Hansson is a Danish programmer 
            and racing driver. As a programmer, 
            he is the creator of Ruby on Rails, a software framework 
            for web development. He is also a partner at the web-based 
            software development firm 37signals.`,
     nickname: 'dhh'
  } , {
     notable: `Brendan Eich is an American computer programmer 
            and technology executive. He created the JavaScript programming 
            language and co-founded the Mozilla project, the Mozilla Foundation, 
            and the Mozilla Corporation.`,
     nickname: 'BrendanEich'
  } , {
     notable: `Avram Joel Spolsky is a software engineer and writer. 
              In 2008, he launched the Stack Overflow.`,
     nickname: 'jspolsky'
 } , {
     notable: `Bjarne Stroustrup is a Danish computer scientist, 
            most notable for the invention and development of the C++ 
            programming language.`,
     nickname: 'BjarneStroustrup'
 }
];

export const getRandomNotableUser = () => {
   const randomIndex = Math.floor(Math.random() * notableUsers.length);
   return notableUsers[randomIndex];
 }