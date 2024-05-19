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
import { SignUpProps } from "../../../../hooks/auth/types";
import { useMutation } from "@tanstack/react-query";
import { AuthSignUp } from "../../../../hooks/auth";
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
    },
  });

  const { mutate, isLoading} = useMutation({
    mutationKey: [QUERY_KEYS.signUp],
    mutationFn: (data: SignUpProps) => AuthSignUp(data),
    onSuccess(res) {
      console.log("Mutation success:", res);
       toast({
          title: `Account Successfuly Created`,
          className: "toast-success",
        });
      router.push(`/auth/confirm?email=${res.data.email}`);
    },
    onError(e: any) {
      console.log("Mutation error:", e);
      if (e.response.data.email) {
        toast({
          title: `Something went wrong!`,
          description: "User with this email address already exist",
          variant: "destructive",
        });
        return;
      }
      toast({
        title: `Something went wrong!`,
        description: e?.response?.data.error || e?.response?.data.password,
        variant: "destructive",
      });
    },
  });


  const onSubmit = (values: SignUpProps) => {

    console.log("Form values:", values);
    // if (values.password !== values.confirmPassword) {
    //   toast({
    //     title: `Uhh, something went wrong!`,
    //     description: "Password and Confirm Password do not match",
    //     className: "text-[#141619] bg-[#d3d3d4] border-[#bcbebf]",
    //   });
    //   console.log("Password and Confirm Password do not match");
    //   return;
    // }

    const payload = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      // confirmPassword: values.confirmPassword,
      role: "student",
      username: values.firstName + values.lastName,
    };

    console.log("Submitting payload: ", payload);
    mutate(payload);
    }


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
            name="confirmPassword"
            render={({ field }) => (
              <FormRender
                label="Confirm Password"
                placeholder="Confirm your password"
                field={field}
                type="password"
              />
            )}
          />


          <CustomButton
            type="submit"
            className=" bg-[#A85334]"
            disabled={isLoading}
            isLoading={isLoading}
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
