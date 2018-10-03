import api from './../assets/img/projects/api.svg';
import chat from './../assets/img/projects/chat.png';
import todo from './../assets/img/projects/todo.png';
import portfolio from './../assets/img/projects/portfolio.png';

export const projects = [
  {
    title: 'Todo\'s Manager',
    description: 'Front-end for managing todo\'s.',
    stack: ['HTML5', 'CSS3', 'Typescript', 'React'],
    image: todo,
    repo: 'https://github.com/nip10/todo-react-ts',
    demo: 'https://p.dcdev.pt/todo',
  },
  {
    title: 'Todo api',
    description: 'A RESTful API for managing todo\'s using all CRUD common operations.',
    stack: ['JavaScript', 'Typescript', 'NodeJS', 'Express', 'MongoDB', 'Jest'],
    image: api,
    repo: 'https://github.com/nip10/todo-api',
    demo: 'https://p.dcdev.pt/todo/api',
  },
  {
    title: 'Chat',
    description: 'Simple chat webapp.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'NodeJS', 'Express', 'SocketIO'],
    image: chat,
    repo: 'https://github.com/nip10/node-chat-app',
    demo: 'https://p.dcdev.pt/chat',
  },
  {
    title: 'Tvshow Manager',
    description: 'Manage your favourite tvshows and discover new ones. Relies on the TheTVDB API to get tvshow\'s information.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'NodeJS', 'PostgreSQL', 'Express', 'SocketIO'],
    image: 'https://via.placeholder.com/400x400',
    repo: 'https://github.com/nip10/tvshows-manager',
    demo: 'https://p.dcdev.pt/tsm',
  },
  {
    title: 'Telegram Bot',
    description: 'A Telegram bot that provides weather information. Location can be manually inputted or using the device\'s location. Users can add locations as favourites for a better experience.',
    stack: ['Javascript', 'Express', 'NodeJS'],
    image: 'https://via.placeholder.com/400x400',
    repo: 'https://github.com/nip10/telegram-bot',
  },
  {
    title: 'Portfolio',
    description: 'This website. SPA built with React and Styled Components.',
    stack: ['Typescript', 'React', 'CSS3'],
    image: portfolio,
    repo: 'https://github.com/nip10/portfolio',
    demo: 'https://dcdev.pt',
  },
];