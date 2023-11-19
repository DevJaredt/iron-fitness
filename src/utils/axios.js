import axios from "axios";
import { getData } from "./localStorage";

axios.interceptors.request.use((config) => {
    const token = getData("token");
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

const get = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(({ data }) => {
                resolve(data);
            }).catch((error) => reject(error));
    });
};

const post = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(({ data }) => {
                resolve(data);
            }).catch((error) => reject(error));
    });
};

const remove = (url) => {
    return new Promise((resolve, reject) => {
        axios.delete(url)
            .then(({ data }) => {
                resolve(data);
            }).catch((error) => reject(error));
    });
};

export { get, post, remove };