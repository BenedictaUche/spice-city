import AuthLayout from "@/components/layout/auth/AuthLayout";
import AuthSection from "@/components/layout/auth/AuthSection";
import { TypographyH1 } from "@/components/typography";
import { signUpFormSchema } from "@/lib/formSchema";
import { NextPageWithLayout } from "@/pages/_app";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import FormRender from "@/components/FormRender";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";
import CustomButton from "@/components/CustomButton";
import { Input } from "@/components/ui/input";
import { SignUpProps, ConfirmOtpProps } from "../../../../hooks/auth/types";
import { useMutation } from "@tanstack/react-query";
import { AuthSignUp, AuthConfirmOtp } from "../../../../hooks/auth";
import { QUERY_KEYS } from "@/lib/utils";


const SignUp: NextPageWithLayout = () => {
  const { toast } = useToast();
  // const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  // const { token } = router.query;
  // console.log(token);

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      // confirmPassword: "",
      firstName: "",
      lastName: "",
      username: "",
      role: "",
    },
  });

  // const { mutate, isPending} = useMutation({
  //   mutationKey: [QUERY_KEYS.signUp],
  //   mutationFn: (data: SignUpProps) => AuthSignUp(data),
  //   onSuccess(res) {
  //     console.log("Mutation success:", res);
  //      toast({
  //         title: `Account Successfuly Created`,
  //         className: "toast-success",
  //       });
  //     router.push(`/auth/confirm?email=${res.data.email}`);
  //   },
  //   onError(e: any) {
  //     console.log("Mutation error:", e);
  //     if (e.response.data.email) {
  //       toast({
  //         title: `Something went wrong!`,
  //         description: "User with this email address already exist",
  //         variant: "destructive",
  //       });
  //       return;
  //     }
  //     toast({
  //       title: `Something went wrong!`,
  //       description: e?.response?.data.error || e?.response?.data.password,
  //       variant: "destructive",
  //     });
  //   },
  // });

  // const {mutate, isPending} = useMutation({
  //   mutationKey: [QUERY_KEYS.confirmOtp],
  //   mutationFn: (data: ConfirmOtpProps) => AuthConfirmOtp(data),
  //   onSuccess(res) {
  //     console.log("Mutation success:", res);
  //     toast({
  //       title: `Account Successfuly Created`,
  //       className: "toast-success",
  //     });
  //     router.push(`/auth/confirm?email=${res.data.email}`);
  //   },
  //   onError(e: any) {
  //     console.log("Mutation error:", e);
  //     if (e.response.data.email) {
  //       toast({
  //         title: `Something went wrong!`,
  //         description: "User with this email address already exist",
  //         variant: "destructive",
  //       });
  //       return;
  //     }
  //     toast({
  //       title: `Something went wrong!`,
  //       description: e?.response?.data.error || e?.response?.data.password,
  //       variant: "destructive",
  //     });
  //   },
  // });


  const onSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
    const payload = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      role: values.role,
      username: values.firstName + values.lastName,
    };

    localStorage.setItem('signUpFormData', JSON.stringify(payload));

    try {
      await AuthConfirmOtp({ email: payload.email, otp_code: "" });
      router.push(`/auth/confirm?email=${payload.email}`);
    } catch (error) {
      toast({
        title: `Something went wrong!`,
        description: "Unable to send OTP. Please try again.",
        variant: "destructive",
      });
    }
  };


  return (
    <AuthSection>
      <TypographyH1 className="mb-4">Hi, create an account to get started</TypographyH1>
      <p className="">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#A85334]">
              Log in
            </Link>
          </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormRender
                  label="First Name"
                  placeholder="Enter your First Name"
                  field={field}
                />
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormRender
                  label="Last Name"
                  placeholder="Enter your Last Name"
                  field={field}
                />
              )}
            />


          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormRender
                label="Email"
                placeholder="Enter your email"
                field={field}
              />
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormRender
                label="Password"
                placeholder="Enter your password"
                field={field}
                type="password"
              />
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormRender
                label="role"
                placeholder="role"
                field={field}
                type="role"
              />
            )}
          />


          <CustomButton
            type="submit"
            className=" bg-[#A85334] w-full hover:bg-[#A85334]/50 "
            // disabled={isPending}
            // isLoading={isPending}
          >
            Sign Up
          </CustomButton>


        </form>
      </Form>
    </AuthSection>
  );
};

export default SignUp;

SignUp.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout page={"signUp"}>{page}</AuthLayout>;
};
