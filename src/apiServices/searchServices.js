import request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('ddx/');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
