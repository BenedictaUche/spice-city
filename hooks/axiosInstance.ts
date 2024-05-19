import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

function logout() {
  localStorage.clear();
  window.location.href = "/auth/login";
}

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const AccessToken = localStorage?.getItem("access-token")
//       ? JSON.parse(localStorage?.getItem("access-token")!)
//       : null;

//     if (AccessToken) {
//       config.headers!["Authorization"] = "Bearer " + AccessToken;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response?.status === 401) {
//       const { toast } = useToast();
//       toast({
//         title: "Your session has expired, kindly login again.",
//         className: "toast-error",
//       });
//       logout();
//     }
//     return Promise.reject(error);
//   },
// );
