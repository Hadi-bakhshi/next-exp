import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import config from "../config";
import { AxiosError, AxiosResponse } from "../../types/axios/axiosTypes";

const http = axios.create({
  baseURL: config.baseURL,
  headers: config.apiHeaders,
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  config.headers = { Authorization: ` ${localStorage.getItem("token")}` };
  console.log(config)
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.log(response)
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // if (error.response?.status === 401) {
  //   window.location.replace("http://localhost:3000/login");
  //   sessionStorage.clear();
  //   localStorage.clear();
  // }
  // if (error.response?.data?.statusCode === 401) {
  //   window.location.replace("http://localhost:3000/login");
  //   sessionStorage.clear();
  //   localStorage.clear();
  // }
  if (error.response?.data?.message) {
    console.log(error.response?.data?.message);
  } else {
    console.error(error.message!);
  }
  return Promise.reject(error);
};

export function setInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

setInterceptorsTo(http);

export default http;