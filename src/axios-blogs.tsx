import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


const instance = axios.create( {

    baseURL: 'http://localhost:3000'
});

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
//instance.defaults.headers.post['Content_Type'] = 'application/json';   //default Content_Type

//Request interceptor
instance.interceptors.request.use( (request: AxiosRequestConfig) => {
    
    //console.log("Axios Request Interceptor:",request);
    //request.headers.common['Authorization'] = 'AUTH_TOKEN_CHG';
    return request;
}, error => {

    console.log(error);
    return error;
});

//Response interceptor
instance.interceptors.response.use( (response: AxiosResponse) => {

    //console.log("Axios Response Interceptor:",response);
    return response;
}, error => {

    console.log(error);
    return error;
});

export default instance;