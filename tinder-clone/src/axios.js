import axios from 'axios';

const instance = axios.create({
    // baseURL: "http://localhost:8001",     localhost url
    baseURL: "https://tinder-backend-sami.herokuapp.com/",  // heroku cloud deployed url
});

export default instance;