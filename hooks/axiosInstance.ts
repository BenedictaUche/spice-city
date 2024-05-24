import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

const apiKey = process.env.NEXT_PUBLIC_API_KEY || localStorage.getItem("api-key");

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Api-Key": apiKey,
  },
  withCredentials: false,
});

function logout() {
  localStorage.clear();
  window.location.href = "/auth/login";
}

axiosInstance.interceptors.request.use(
  (config) => {
    const AccessToken = localStorage?.getItem("access-token")
      ? JSON.parse(localStorage?.getItem("access-token")!)
      : null;

    if (AccessToken) {
      config.headers!["Authorization"] = "Bearer " + AccessToken;
    }
    if (apiKey) {
      config.headers["X-Api-Key"] = apiKey;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error response:", error.response);

    if (error.response?.status === 401) {
      const { toast } = useToast();
      toast({
        title: "Your session has expired, kindly login again.",
        className: "toast-error",
      });
      logout();
    }


    if (error.response && error.response.data) {
      try {
        JSON.parse(error.response.data);
      } catch (e) {
        console.error("Response data is not valid JSON:", error.response.data);
      }
    }

    return Promise.reject(error);
  },
);
