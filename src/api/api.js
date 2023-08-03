import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b813de6c-1bc7-47ee-94b8-8283cbcb7526',
    },        
});


export const usersAPI = {
    async getUsers(page = 1, size = 4) {
        const response = await instance.get(
            `users?count=${size}&page=${page}`);
        return response.data;
    },

    async postFollower(id) {
        const response = await instance.post(`follow/${id}`, {});
        return response.data;

    },

    async deleteFollower(id) {

        const response = await instance.delete(`follow/${id}`);

        return response.data;
    }
}

export const profileAPI = {

    async getProfile(userId) {
        const response = await instance.get(`profile/${userId}`);
        return response.data;
    },

    async getStatus(userId) {

        const response = await instance.get(`/profile/status/${userId}`);
        return response.data;
    },

    async updateStatus(status) {
        const response = await instance.put(`/profile/status`, { status })

        return response.data;
    }
};

export const authAPI = {
    async login(authData) {

        const response = await instance.post(`/auth/login`, authData);
        return response.data;
    },

    async logout() {

        const response = await instance.delete(`/auth/login`);
        return response.data;
    },

    async getIsAuthData() {
        const response = await instance.get(`auth/me`);
        return response.data;
    }


}



