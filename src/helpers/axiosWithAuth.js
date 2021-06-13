import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            authorization: `${token}`,
        },
        baseURL: 'http://localhost5000/api'
    });
};

//Task List:
//Build and export a function used to send in our authorization token