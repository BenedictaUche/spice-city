import AuthLayout from "@/components/layout/auth/AuthLayout";
import AuthSection from "@/components/layout/auth/AuthSection";
import { TypographyH1 } from "@/components/typography";
import { signInFormSchema } from "@/lib/formSchema";
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
import { LoginProps } from "../../../../hooks/auth/types";
import { useMutation } from "@tanstack/react-query";
import { AuthLogin } from "../../../../hooks/auth";
import { QUERY_KEYS } from "@/lib/utils";

const SignIn: NextPageWithLayout = () => {
  const { toast } = useToast();
  // const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationKey: [QUERY_KEYS.login],
    mutationFn: (data: LoginProps) => AuthLogin(data),
    onSuccess(res) {
      console.log("Mutation success:", res);
      toast({
        title: `Logged in successfully`,
        className: "toast-success",
      });
      router.push("/dashboard/student/account");
    },
    onError(e: any) {
      console.log("Mutation error:", e);
      if (e.response.data.email) {
        toast({
          title: e.response.data.email,
          className: "toast-error",
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


  const onSubmit = (values: z.infer<typeof signInFormSchema>) => {
    console.log("Values:", values);
    mutate(values);
  };

  return (
    <AuthSection>
      <TypographyH1 className="mb-4">Welcome back</TypographyH1>
      <p className="">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="text-[#A85334]">
              Sign up
            </Link>
          </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormRender

                placeholder="Enter email address / username"
                field={field}
              />
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormRender

                placeholder="Enter password"
                field={field}
                type="password"
              />
            )}
          />


          <CustomButton
            type="submit"
            className=" bg-[#A85334] w-full"
            disabled={isLoading}
            isLoading={isLoading}
          >
            Log in
          </CustomButton>


        </form>
      </Form>
    </AuthSection>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout page={"signIn"}>{page}</AuthLayout>;
};
