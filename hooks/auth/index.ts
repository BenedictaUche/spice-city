import axios, { AxiosRequestConfig } from "axios";
import {
  ConfirmOtpProps,
  LoginProps,
  SignUpProps,} from "./types";



export const AuthSignUp = async (payload: SignUpProps) => {
  const config = {
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_API_URL}/signup`,
    data: payload,
    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log("Payload:", payload);
  return await axios(config);

};
export const AuthLogin = async ({ ...rest }: LoginProps) => {
  const config: AxiosRequestConfig = {
    method: "post",
    url: `${process.env.NEXT_PUBLIC_API_URL}/login`,
    data: rest,
  };

  return await axios(config);
};

export const AuthConfirmOtp = async (payload: {
  email: string;
  otp_code: string;
}) => {
  const config = {
    method: "post",
    url: `${process.env.NEXT_PUBLIC_API_URL}/otp/send-otp`,
    data: payload,
  };

  const { data } = await axios(config);

  return data;
};

// export const AuthResendOtp = async (email: string) => {
//   try {
//     const config = {
//       method: "post",
//       url: `${process.env.NEXT_PUBLIC_API_URL}/auth/users/resend_activation/`,
//       data: {
//         email,
//       },
//     };

//     const { data } = await axios(config);

//     return data;
//   } catch (e) {
//     console.log(e);
//   }
//     };

//     export const AuthConfirmResetOtp = async (payload: ConfirmResetOtpProps) => {
//   const config = {
//     method: "post",
//     url: `${process.env.NEXT_PUBLIC_API_URL}/auth/users/reset_password_confirm/`,
//     data: payload,
//   };

//   const { data } = await axios(config);

//   return data;
// };

// export const AuthInitPasswordReset = async (email: string) => {
//   const config = {
//     method: "post",
//     url: `${process.env.NEXT_PUBLIC_API_URL}/auth/users/reset_password/`,
//     data: {
//       email,
//     },
//   };

//   const { data } = await axios(config);

//   return data;
// };

// export const AuthSetPassword = async (payload: SetPasswordProps) => {
//   const config = {
//     method: "post",
//     url: `${process.env.NEXT_PUBLIC_API_URL}/auth/password/reset/`,
//     data: payload,
//   };

//   const { data } = await axios(config);

//   return data;
// };
