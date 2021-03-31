import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8zSHFZJgKZP9spRdQZxvP3w2r5mVlopTTFq9mRBeiao'
    }
});