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
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_API_URL}/otp/send-otp`,
    data: payload,
  };

  const { data } = await axios(config);

  return data;
};
