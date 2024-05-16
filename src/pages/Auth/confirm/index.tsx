import AuthLayout from "@/components/layout/auth/AuthLayout";
import AuthSection from "@/components/layout/auth/AuthSection";
import { TypographyH1 } from "@/components/typography";
import { signUpFormSchema } from "@/lib/formSchema";
import { NextPageWithLayout } from "@/pages/_app";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import FormRender from "@/components/FormRender";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { emailVerificationSchema } from "@/lib/formSchema";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";
import CustomButton from "@/components/CustomButton";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import VerifyModal from "@/components/modal/auth/VerifyModal";
import { Input } from "postcss";

const EmailVerification: NextPageWithLayout = () => {
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(59);
  const [modalOpen, setModalOpen] = useState(false);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const email = "catalina@gmail.com";

  const form = useForm<z.infer<typeof emailVerificationSchema>>({
    resolver: zodResolver(emailVerificationSchema),
    defaultValues: {
      otp_code: "",
    },
  });

  const onSubmit = (values: z.infer<typeof emailVerificationSchema>) => {
    setIsLoading(true);
    setModalOpen(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleResendClick = () => {
    if (!resendDisabled) {
      setResendDisabled(true);
      setCountdown(10);
    }
  };

  useEffect(() => {
    if (countdown > 0 && resendDisabled) {
      const timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (countdown === 0 && resendDisabled) {
      setResendDisabled(false);
    }
  }, [countdown, resendDisabled]);

  return (
    <AuthSection>
      <TypographyH1 className="mb-4">Verify your account</TypographyH1>
      <p className="text-[#6b7280] mb-8">Enter the 6-digit code we sent to <span className="text-[#E89222]">{email}</span></p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
                control={form.control}
                name="otp_code"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                        <InputOTP maxLength={6} {...field}>
                            <InputOTPGroup className="space-x-4">
                                <InputOTPSlot index={0} {...form.register("otp_code")} className="bg-[#1E1E1E0D] " />
                                <InputOTPSlot index={1} {...form.register("otp_code")} className="bg-[#1E1E1E0D] "/>
                                <InputOTPSlot index={2} {...form.register("otp_code")} className="bg-[#1E1E1E0D] "/>
                                <InputOTPSeparator />
                                <InputOTPSlot index={3} {...form.register("otp_code")} className="bg-[#1E1E1E0D] "/>
                                <InputOTPSlot index={4} {...form.register("otp_code")} className="bg-[#1E1E1E0D] "/>
                                <InputOTPSlot index={5} {...form.register("otp_code")} className="bg-[#1E1E1E0D] "/>
                            </InputOTPGroup>
                        </InputOTP>
                    </FormControl>
                  </FormItem>
                )}
            />
          <CustomButton
            type="submit"
            className=" bg-[#A85334]"
            disabled={isLoading}
            isLoading={isLoading}
          >
            Verify Account
          </CustomButton>
        </form>
      </Form>
      <div className="flex items-center justify-between mt-6">
        <p className="text-[#6b7280]">Didn&apos;t receive the code?{" "}
          <button
            type="button"
            onClick={handleResendClick}
            className="text-[#E89222] focus:outline-none"
            disabled={resendDisabled}
          >
            Resend
          </button>
        </p>
      </div>
      {modalOpen && <VerifyModal open={modalOpen} setOpen={setModalOpen} />}
    </AuthSection>
  )
}

export default EmailVerification

EmailVerification.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout page={"emailVerification"}>{page}</AuthLayout>;
};
