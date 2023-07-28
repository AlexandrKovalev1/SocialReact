import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b813de6c-1bc7-47ee-94b8-8283cbcb7526',
    }
});



export const usersAPI = {
    getUsers(page = 1, size = 4) {
        return instance.get(
            `users?count=${size}&page=${page}`)
            .then(response => response.data)
    },

    postFollower(id) {
        return (
            instance.post(`follow/${id}`, {})
                .then(response => response.data)
        )
    },

    deleteFollower(id) {
        return (
            instance.delete(`follow/${id}`)
                .then(response => response.data)
        )
    }
}

export const profileAPI = {
    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`)
                .then(response => response.data)
        )
    },

    getStatus(userId) {
        return (
            instance.get(`/profile/status/${userId}`)
                .then(response => response.data)
        )
    },

    updateStatus(status) {
        return (
            instance.put(`/profile/status`, { status })
                .then(response => response.data)
        )
    }
};

export const authAPI = {
    login(authData) {
        return (instance.post(`/auth/login`, authData))
            .then(response => response.data);
    },

    logout() {
        return (instance.delete(`/auth/login`))
            .then(response => response.data);
    },

    getIsAuthData() {
        return (instance.get(`auth/me`)
            .then(response => response.data)
        );
    }


}



