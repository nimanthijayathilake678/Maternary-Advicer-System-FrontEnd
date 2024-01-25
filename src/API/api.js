import axios from "axios";

axios.defaults.headers.common['Accept']='application/json';

export const SERVER_URL = "http://localhost:8080";

export default axios.create({
    baseURL: "http://localhost:8080",
    withCredentials:true,
});

