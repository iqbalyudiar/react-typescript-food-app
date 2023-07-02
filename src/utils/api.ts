import axios from 'axios';

export default axios.create({
  baseURL: 'https://a67a-36-78-46-130.ngrok-free.app',
  headers: {
    'ngrok-skip-browser-warning': true,
  },
});
