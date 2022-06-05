import { AxiosRequestConfig, AxiosResponseHeaders } from "axios";

export interface AxiosError<D = any> {
  message?: string;
  code?: string;
  config?: AxiosRequestConfig<D>;
  request?: any;
  response?: AxiosResponse<D>;
}
export interface AxiosResponse<D = any> {
  data: {
    [T: string]: any;
  };
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<D>;
  request?: any;
}