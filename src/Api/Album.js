import axios from 'axios';


export default axios.create({
    baseURL: 'https://www.theaudiodb.com/api/v1/json/1/'
});
