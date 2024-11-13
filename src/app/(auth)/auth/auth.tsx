"use client";
import axiosInstance from "@/axiosClient";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState, ReactNode } from "react";

type LoginType = {
  email: string;
  password: string;
  remember_me?: boolean;
};

interface AuthContextType {
  user: string | null;
  token: string;
  login: (data: LoginType) => void;
  logout: () => void;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: "",
  login: () => {},
  logout: () => {},
  isLoading: false,
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const storedInfo =
    typeof window !== "undefined" && localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth") || "{}")
      : null;

  const [user, setUser] = useState<string | null>(storedInfo || null);
  const [token, setToken] = useState<string>(storedInfo?.token || "");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const login = async (data: LoginType) => {
    setIsLoading(true);

    try {
      const res = await axiosInstance.post("api/user/login", data);
      const token = res?.data?.data?.token;
      const resData = res?.data?.data?.user_data;
      const userData = { ...resData, token: token };
      setUser(userData);
      setToken(token);
      localStorage.setItem("auth", JSON.stringify(userData));
      router.push("/dashboard");
      setIsLoading(false);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Failed to send request";
      message.error(errorMessage);
    }
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("auth");
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
