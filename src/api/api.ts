import { UserItemType } from '../redux/usersReducer';
import { FormValuesLoginPropsType } from './../commonTypes/commonTypes';
import axios from 'axios';
import { ProfileDataType } from '../redux/profileReducer';

//types

type ResponseBody = {
    resultCode: ResponseCodesEnum
    messages: Array<string>
}

type AuthApiLoginResponseType = {
    resultCode: ResponseCodesEnum | ResponseCodeCaptcha
    messages: Array<string>
    data: {
        userId: number
    }
}

type AuthApiLogoutResponseType = {
    data: {
    }
} & ResponseBody

type AuthApiAuthDataResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
} & ResponseBody

type AuthApiCaptchaResponseType = {
    url: string
}

type UsersApiUsersResponseType = {
    items: Array<UserItemType>
    totalCount: number
    error: string | null
}

type UsersApiFolowerPostDelResponseType = {
    data: {}
} & ResponseBody

type ProfileApiProfileResponseType = ProfileDataType

type ProfileApiUpdateStatusResponseType = {
    data: {}
} & ResponseBody

type ProfileApiUpdateAvatarResponseType = {
    data: {
        photos: {
            small: string
            large: string
        }
    }
    fieldsErrors: Array<string>

} & ResponseBody

type ProfileApiUpdateProfileResponseType = {
    data: {}
} & ResponseBody


// enum 

export enum ResponseCodesEnum {
    Succes = 0,
    Error = 1
}

export enum ResponseCodeCaptcha {
    addedCaptcha = 10
}


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b813de6c-1bc7-47ee-94b8-8283cbcb7526',
    },

});


export const usersAPI = {
    async getUsers(page = 1, size = 4) {
        const response = await instance.get<UsersApiUsersResponseType>(
            `users?count=${size}&page=${page}`);
        return response.data;
    },

    async postFollower(id: number) {
        const response = await instance.post<UsersApiFolowerPostDelResponseType>(`follow/${id}`, {});
        return response.data;

    },

    async deleteFollower(id: number) {

        const response = await instance.delete<UsersApiFolowerPostDelResponseType>(`follow/${id}`);

        return response.data;
    }
}

export const profileAPI = {

    async getProfile(userId: number | null) {
        const response = await instance.get<ProfileApiProfileResponseType>(`profile/${userId}`);
        return response.data;
    },

    async getStatus(userId: number | null) {

        const response = await instance.get<string>(`/profile/status/${userId}`);
        return response.data;
    },

    async updateStatus(status: string) {
        const response = await instance.put<ProfileApiUpdateStatusResponseType>(`/profile/status`, { status })
        return response.data;
    },

    async updateAvatarImg(file: globalThis.File) {

        const formData = new FormData();
        formData.append('image', file);

        const response = await instance.put<ProfileApiUpdateAvatarResponseType>(`/profile/photo`, formData, {
            headers: { "Content-type": "multipart/form-data", }
        });

        return response.data;
    },

    async updateProfile(profileData: ProfileDataType) {
        const response = await instance.put<ProfileApiUpdateProfileResponseType>(`/profile`, { ...profileData })
        return response.data
    }
};

export const authAPI = {
    async login(authData: FormValuesLoginPropsType) {

        const response = await instance.post<AuthApiLoginResponseType>(`/auth/login`, authData);
        return response.data;
    },

    async logout() {

        const response = await instance.delete<AuthApiLogoutResponseType>(`/auth/login`);
        return response.data;
    },

    async getIsAuthData() {
        const response = await instance.get<AuthApiAuthDataResponseType>(`auth/me`);
        return response.data;
    },

    async getCaptcha() {
        const response = await instance.get<AuthApiCaptchaResponseType>(`/security/get-captcha-url`);
        return response.data;
    }

}



