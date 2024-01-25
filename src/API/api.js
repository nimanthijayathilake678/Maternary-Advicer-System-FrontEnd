import axios from "axios";

axios.defaults.headers.common['Accept']='application/json';

export default axios.create({
    baseURL: "http://localhost:8080",
    withCredentials:true,
});