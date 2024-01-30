import axios, { AxiosRequestConfig } from "axios";
import { headers } from "./config";

export interface FetchResponse<T> {
  results: T[];
  total_pages: number;
}

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: headers,
});

class APICLient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APICLient;
