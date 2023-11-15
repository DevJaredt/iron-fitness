import { toast } from 'react-toastify';

export const success = (msg) => {
    toast(msg, {
        type: "success",
        position: "top-right"
    })
};

export const info = (msg) => {
    toast(msg, {
        type: "info",
        position: "top-right"
    })
};

export const error = (msg) => {
    toast(msg, {
        type: "error",
        position: "top-right"
    })
};