import Axios, { InternalAxiosRequestConfig } from "axios";
import { env } from "@/config/env";

// TODO: Use in the future if we need to call the API

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = "application/json";
  }

  config.withCredentials = false;
  return config;
}

export const api = Axios.create({
  baseURL: env.API_URL,
  withCredentials: false,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log(message);
    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams();
      const redirectTo = searchParams.get("redirectTo");
      window.location.href = `/auth/login?redirectTo=${redirectTo}`;
    }

    return Promise.reject(error);
  }
);
