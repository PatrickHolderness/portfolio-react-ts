import MeetApp from '../assets/meet-app.webp'
// import Test from '../assets/image2.png'

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
    thumbnail: MeetApp,
    techs: ['MEAN full-stack', 'Angular', 'TypeScript', 'SPA', 'Angular Material'],
    livePage: 'https://patrickholderness.github.io/myFlix-Angular-client',
    repository: 'https://github.com/PatrickHolderness/myFlix-Angular-client',
  },
  {
    id: 3,
    title: 'myFlix React Client',
    description: 'Interacting with the same database but built using the MERN stack. Users can register, login, access different views: all movies, movie details, genre and director views, and create their own list of favorite movies.',
    thumbnail: MeetApp,
    techs: ['Mern full-stack', 'React', 'Redux', 'SPA', 'Parcel', 'Bootstrap'],
    livePage: 'https://movie-info-online.netlify.app/',
    repository: 'https://github.com/PatrickHolderness/myFlix-client',
  },
 
];

export default PORTFOLIO;