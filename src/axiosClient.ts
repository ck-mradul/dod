import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { message } from "antd";
import { AUTH_LOCAL_STORAGE_KEY } from "./contants/SystemVariables";
import { getAuth } from "./app/core/AuthHelper";

export const base_url = "https://staging-api.orderflo.com/";
export const s_id = "s_id";

const authData = getAuth();

const getToken = (): {
  token: string | undefined;
  sId: string | number | null;
} => {
  const lsValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);
  const sId: string | number | null = sessionStorage.getItem(s_id);
  let token: string | undefined = undefined;

  if (lsValue) {
    try {
      token = JSON.parse(lsValue)?.data?.token;
    } catch (error) {
      console.error("Error parsing localStorage value:", error);
    }
  }

  if (!token) {
    token = token;
  }

  return { token, sId };
};

const handle401Error = async (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    message.warning("Session expired. Please log in again to continue.");

    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
    sessionStorage.clear();

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (typeof window !== "undefined") {
      //   window.location.href = "/auth/login";
    }
  }
  return Promise.reject(error);
};

const axiosInstance = axios.create({
  baseURL: base_url,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const { token, sId } = getToken();

    if (token && !config.headers?.["Authorization"]) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      } as AxiosRequestHeaders;
    }

    return config;
  },
  (error: AxiosError) => {
    console.log("Error in axios request interceptor:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response && error.response.data) {
      try {
        error.message = JSON.parse(error.response.data);
      } catch (e) {
        console.error("Error parsing error response data:", e);
        error.message = error.response.statusText;
      }
    } else {
      error.message = "Unexpected end of JSON input";
    }
    return handle401Error(error);
  }
);

export default axiosInstance;
