import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        // request.get tra ve 1 promise
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log('error');
    }
};
