import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3004'
});

instance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


export default instance;
