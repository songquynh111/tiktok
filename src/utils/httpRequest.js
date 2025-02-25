import axios from 'axios';

// console.log(process.env);

const request = axios.create({
    baseURL: ' https://67a2ebaf409de5ed5256c0df.mockapi.io/',
});

export const get = async (path, options = {}) => {
    const res = await request.get(path, options);
    return res.data;
};
export default request;
