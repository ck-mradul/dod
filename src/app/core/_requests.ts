import axios from "axios";
import { AuthModel } from "./_models";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/api/user/login`;
export const LOGOUT_URL = `${API_URL}/api/logout`;
export const REGISTER_URL = `${API_URL}/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`;
export const GET_USER_PERMISSION_URL = `${API_URL}/permission`;

// Server should return AuthModel
// export function login(email: string, password: string) {
//   return axios.post<AuthModel>(LOGIN_URL, {
//     email,
//     password,
//   });
// }

// Server should return AuthModel
export function logout(id: string) {
  return axios.post<AuthModel>(LOGOUT_URL, {
    id,
  });
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  });
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  });
}

// export function getUserByToken(token: string) {
//   return axios.post<{ data: UserModel }>(GET_USER_BY_ACCESSTOKEN_URL, {
//     api_token: token,
//   })
// }

export function getUserPermission(params: any) {
  return axios.get(GET_USER_PERMISSION_URL, {
    params,
  });
}
