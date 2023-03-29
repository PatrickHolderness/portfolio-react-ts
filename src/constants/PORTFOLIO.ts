import MeetApp from '../assets/thumb-meet-app.webp'
import myFlixReact from '../assets/thumb-myflix-react.webp';
import myFlixAngular from '../assets/thumb-myflix-angular.webp';
import myFlixAPI from '../assets/thumb-myflix-API.webp';
import PokeDex from '../assets/thumb-pokedex.webp';
import ChatApp from '../assets/thumb-chatapp.jpg';

const PORTFOLIO = [
  {
    id: 1,
    title: 'Meet App',
    description: 'A web app for viewing information about web-development events world-wide, which can be filtered by number of events and by city. The data is fetched from a private Google calendar.',
    thumbnail: MeetApp,
    techs: ['SPA', 'PWA', 'TDD', 'Google Calendar API', 'OAuth2', 'Serverless Functions', 'React', 'Recharts', 'Unit & Integration Tests', 'Offline caching'],
    livePage: 'https://patrickholderness.github.io/meet/',
    repository: 'https://www.github.com/patrickholderness/meet-app/',
  },
  {
    id: 2,
    title: 'myFlix Angular Client',
    description: 'A client-side for a movie app based on server-side REST API and database built with Angular and Material Design. Users can sign up and log in, update their personal information and create a list of their favorite movies, as well as view data about the movies.',
    thumbnail: myFlixAngular,
    techs: ['MEAN full-stack', 'Angular', 'TypeScript', 'SPA', 'Angular Material'],
    livePage: 'https://patrickholderness.github.io/myFlix-Angular-client',
    repository: 'https://github.com/PatrickHolderness/myFlix-Angular-client',
  },
  {
    id: 3,
    title: 'myFlix React Client',
    description: 'Interacting with the same database but built using the MERN stack. Users can register, login, access different views: all movies, movie details, genre and director views, and create their own list of favorite movies.',
    thumbnail: myFlixReact,
    techs: ['Mern full-stack', 'React', 'Redux', 'SPA', 'Parcel', 'Bootstrap'],
    livePage: 'https://movie-info-online.netlify.app/',
    repository: 'https://github.com/PatrickHolderness/myFlix-client',
  },

  {
    id: 4,
    title: 'myFlix Back End',
    description: 'A public Web Server built from scratch, providing several endpoints to query information from a selection of handpicked movies, directors and movie genres. The final NoSQL database was written from scratch in MongoDB using Mongo Shell. Registered users are authenticated using JWT, and authorisation of a valid user is required to access the database. All API testing was done using postman.',
    thumbnail: myFlixAPI,
    techs: ['RESTful API', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Postman', 'Heroku', 'Basic HTTP & JWT authentication and authorisation'],
    livePage: 'https://movie-info-online.herokuapp.com/documentation.html',
    repository: 'https://github.com/PatrickHolderness/movie_api',
  },

  {
    id: 5,
    title: 'Mobile Chat App',
    description: 'Chat App is a real-time native mobile app written in JS using React Native. It is optimised for iOS and Android. It is connected to a Firebase database to allow users to remotely chat with each other live, as well as share pictures or their location. The app works offline, loading cached messages from the last online visit. Testing was set up using Expo, in conjunction with iOS simulator and the Expo Go mobile app.',
    thumbnail: ChatApp,
    techs: ['React Native', 'Firebase', 'Firestore', 'real-time offline capabilities'],
    // livePage: 'https://movie-info-online.netlify.app/',
    repository: 'https://github.com/patrickholderness/chat-app',
  },

  {
    id: 6,
    title: 'PokeDex',
    description: 'A fun, front-end app built to develop my Javascript skills. It fetches Pokemon characters from a public API. Users can search and display vector images and details from their favorite characters.',
    thumbnail: PokeDex,
    techs: ['HTML', 'CSS', 'Javascript', 'jQuery', 'Bootstrap'],
    livePage: 'https://patrickholderness.github.io/pokedex-js-app/',
    repository: 'https://github.com/PatrickHolderness/pokedex-js-app',
  },

  
 
];

export default PORTFOLIO;