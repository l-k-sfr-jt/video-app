import axios from "axios";

const KEY = 'AIzaSyD_2m2C6MWg4_4LJk8YXD1SMiDxrLp2p4U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});