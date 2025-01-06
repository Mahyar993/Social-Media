import axios from 'axios';

const API_URL = 'http://localhost:5205';

export const fetchInstagramData = async (name: string) => {
    const response = await axios.get(`${API_URL}/influencer/instagram/${name}`);
    return response.data;
};

export const fetchYouTubeData = async (name: string) => {
    const response = await axios.get(`${API_URL}/influencer/youtube/${name}`);
    return response.data;
};
