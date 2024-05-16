import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavigationMenus } from "@/components/parts/Menus";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-[300px] gap-6 rounded-tr-[80px] bg-[#F0EAE8] flex flex-col w-full items-center align-middle justify-center px-[100px] py-[50px]">
      <div className=" w-[90%] justify-between flex bg-none z-99 font-[400] text-[14px] text-white gap-8 items-center ">
        <Image
          className="h-[100px] w-[100px]"
          src="/SGALOGO.svg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <div className="flex flex-col ">
          <h3 className="text-lg font-bold text-[#000000] ">Features</h3>
          <Link className="text-[#000000]" href="">
            Free Lessons
          </Link>
          <Link className="text-[#000000]" href="">
            Premium Courses
          </Link>
          <Link className="text-[#000000]" href="">
            Categories
          </Link>
          <Link className="text-[#000000]" href="">
            Community
          </Link>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-[#000000] ">Support</h3>
          <Link className="text-[#000000]" href="">
            FAQ
          </Link>
          <Link className="text-[#000000]" href="">
            Contact Us
          </Link>
          <Link className="text-[#000000]" href="">
            About
          </Link>
          <Link className="text-[#000000]" href="">
            Privacy Policy
          </Link>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-[#000000] ">Social Media</h3>
          <div className="flex gap-3">
            <Image
              className="h-[20px] w-[20px]"
              src="/images/social-icons/facebook.svg"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <Link className="text-[#000000]" href="">
              Facebook
            </Link>
          </div>
          <div className="flex gap-3">
            <Image
              className="h-[20px] w-[20px]"
              src="/images/social-icons/youtube.svg"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <Link className="text-[#000000]" href="">
              YouTube
            </Link>
          </div>
          <div className="flex gap-3">
            <Image
              className="h-[20px] w-[20px]"
              src="/images/social-icons/instagram.svg"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <Link className="text-[#000000]" href="">
              Instagram
            </Link>
          </div>
          <div className="flex gap-3">
            <Image
              className="h-[20px] w-[20px]"
              src="/images/social-icons/x.svg"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <Link className="text-[#000000]" href="">
              Twitter
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-[#000000] ">Lessons</h3>
          <Image
            className="h-[40px] w-[100px]"
            src="/images/googleplay.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <Image
            className="h-[40px] w-[100px]"
            src="/images/apple.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="mt-4 flex w-[90%] gap-2 justify-center items-center">
        <div className="h-[2px] w-[70%] bg-black bg-opacity-45"></div>
        <p className="text-[13px]">© Spicy Guitar Academy 2024. All rights reserved.</p>
      </div>
    </div>
  );
}
