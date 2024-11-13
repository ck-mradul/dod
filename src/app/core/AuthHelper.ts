import axios from "axios";
import { AuthModel } from "./_models";

const AUTH_LOCAL_STORAGE_KEY = "of-auth-react-v";
export const getAuth = (): AuthModel | undefined => {
  if (typeof window === "undefined") {
    return;
  }

  const lsValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);
  if (!lsValue) {
    return;
  }

  try {
    const auth: AuthModel = JSON.parse(lsValue) as AuthModel;
    if (auth) {
      setupAxios(auth);
      return auth;
    }
  } catch (error) {
    console.error("AUTH LOCAL STORAGE PARSE ERROR", error);
  }
};

export function setupAxios(auth: any) {
  axios.defaults.headers.Accept = "application/json";
  axios.interceptors.request.use(
    (config) => {
      if (auth && auth.data && auth.data.token) {
        config.headers.Authorization = `Bearer ${auth.data.token}`;
      }
      return config;
    },
    (err: any) => Promise.reject(err)
  );
}
