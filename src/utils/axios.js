import axios from "axios";

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

export { get, post };