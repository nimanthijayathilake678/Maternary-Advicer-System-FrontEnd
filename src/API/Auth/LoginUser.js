import axios,{SERVER_URL} from "../api";

const LoginUser = async (credentials)=>{
    const URL = SERVER_URL+"/authenticate";
    return await axios.post(URL,credentials);
}

export default LoginUser;