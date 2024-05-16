/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { NavigationMenus } from "@/components/parts/Menus";
import Headers from "@/components/parts/Headers";
import { SPGCarousel } from "@/components/parts/Carousel";
import { FaYoutube } from "react-icons/fa";
import Footer from "@/components/parts/Footer";
import { TabsDisplay } from "@/components/parts/Tabs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <div className="w-full absolute ">
      <Headers />
      </div>
      <div
        className=" w-full h-[80vh] mb-10 bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url('/bghe.svg')" }}
      >
        <div className="bg-cover bg-[rgba(0,0,0,0.8)] flex flex-col w-full items-center justify-center gap-20 align-middle h-[100%]">
          <h1 className="text-white text-bold text-center text-2xl font-extrabold tracking-wide leading-6 lg:text-4xl ">
            <span className="text-brown">Learn</span> Guitar With <br />
            Spicy Guitar Academy
          </h1>
          <Button className="bg-brown h-[35px] w-[auto] rounded-2xl p-[15px] text-[14px] items-center justify-center">
            Your Guitar Journey Starts Here!
          </Button>
        </div>
      </div>
      <section className="flex my-[30px] flex-col w-full items-center justify-center gap-12 align-middle h-[100%]">
        <h1 className="text-black text-bold text-center text-2xl font-extrabold tracking-wide leading-6 lg:text-4xl">
          JOIN US FOR FREE
        </h1>
        <div className="flex w-full items-center justify-center gap-20 align-middle h-[100%]">
          <div className="flex flex-col items-center justify-center  align-middle">
            <h2 className="text-black text-bold text-center font-extrabold tracking-wide leading-6 text-md">
              Registered Students
            </h2>
            <h2 className="text-black text-bold text-center font-extrabold tracking-wide leading-6 text-md">
              10,000+
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center  align-middle">
            <h2 className="text-black text-bold text-center font-extrabold tracking-wide leading-6 text-md">
              Courses
            </h2>
            <h2 className="text-black text-bold text-center font-extrabold tracking-wide leading-6 text-md">
              101,000+
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center  align-middle">
            <h2 className="text-black text-bold text-center font-extrabold tracking-wide leading-6 text-md">
              Lessons
            </h2>
            <h2 className="text-black text-bold text-center font-extrabold tracking-wide leading-6 text-md">
              70,000+
            </h2>
          </div>
        </div>

        <SPGCarousel />

        <div className="flex pl-4 justify-center items-center gap-5 rounded-3xl border-2 border-solid border-[#D1831F]">
          <FaYoutube fill="red" className="text-white" />
          <p>15K subscribers on YOUTUBE</p>
          <Button className="bg-brown h-[35px] w-[auto] rounded-2xl p-[15px] text-[14px] items-center justify-center">
            FREE Guitar Lessons
          </Button>
        </div>
      </section>

      <section className="flex mt-[150px] mb-[30px] flex-col w-full items-center justify-center gap-12 align-middle h-[100%]">
        <h1 className="text-black mb-14 text-bold text-center text-2xl font-bold tracking-wide leading-6 lg:text-3xl">
          OUR MISSION
        </h1>

        <div className="bg-[#2B1108] flex flex-col w-full py-[50px] px-[100px]">
          <div className="flex w-full justify-around align-top ">
            <div className="flex flex-col justify-center gap-5 h-[160px] ">
              <p className=" capitalize text-[16px] tracking-wider font-bold text-white">
                Spicy Guitar Academy Is Aimed At Guiding <br /> Beginners To
                Fulfill Their Dream Of <br />
                Becoming Professional Guitar Players.
              </p>
              <p className="text-[#D1831F] text-[14px] font-semibold ">
                - Guitarism, Igniting Creativity.
              </p>
              <Button className="bg-brown h-[35px] w-[auto] rounded-2xl p-[15px] text-[16px] items-center justify-center">
                Create Account
              </Button>
            </div>
            <div className="flex flex-col justify-between gap-5 relative top-[-180px]">
              <Image
                className=" contain h-[auto] w-[450px] "
                src="/mobile.png"
                width={500}
                height={100}
                alt="Picture of guitar"
              />
            </div>
          </div>
          <div className="bg-[#FDF4E9] p-[50px] items-center justify-center w-full px-[100px] flex flex-col gap-6 rounded-xl ">
            <h2 className="font-extrabold text-[#2B1108]">
              HOW WE SUPPORT YOUR LEARNING JOURNEY
            </h2>
            <div className="flex justify-between w-[70%] items-center ">
              <div className="flex flex-col gap-3 justify-between h-[180px]">
                <Image
                  className=" flex-1 h-[60px] w-[auto] "
                  src="/lessons.svg"
                  width={500}
                  height={100}
                  alt="Picture of the author"
                />
                <p className="text-[#2B1108] font-bold text-[12px] text-center">
                  Learn At Your <br />
                  Convinience And Pace.
                </p>
              </div>
              <div className="flex flex-col gap-3 justify-between h-[180px] ">
                <Image
                  className=" flex-1 h-[60px] w-[auto] "
                  src="/tutorialcourses.svg"
                  width={500}
                  height={100}
                  alt="Picture of the author"
                />
                <p className="text-[#2B1108] font-bold text-[12px] text-center">
                  Hundreds Of Lessons <br />
                  From Beginners To <br />
                  Advance.
                </p>
              </div>
              <div className="flex flex-col gap-3 justify-between h-[180px]">
                <Image
                  className=" flex-1 h-[60px] w-[auto] "
                  src="/tutorialaudio.svg"
                  width={500}
                  height={100}
                  alt="Picture of the author"
                />
                <p className="text-[#2B1108] font-bold text-[12px] text-center">
                  Backing Track With <br /> Adjustable Tempo <br />
                  Features.
                </p>
              </div>

              <div className="flex flex-col gap-3 justify-between h-[180px]">
                <Image
                  className=" flex-1 h-[60px] w-[auto] bg-cover "
                  src="/studentforum.svg"
                  width={500}
                  height={100}
                  alt="Picture of the author"
                />
                <p className="text-[#2B1108] font-bold text-[12px] text-center">
                  Join Our <br />
                  Student Forum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex bg-[#F0EAE8] my-[30px] p-20 flex-col w-full items-center justify-center gap-12 align-middle h-[100%]">
        <div className="flex flex-col items-center justify-center gap-10">
          <h2 className="text-black text-bold mb-10 text-center text-2xl font-bold tracking-wide leading-6 lg:text-3xl">
            OVERCOME YOUR
            <span className="bg-[#2B1108] text-white px-3 py-2 rounded-2xl">
              GUITAR STRUGGLES
            </span>
          </h2>

          <div className="flex justify-between">
            <div className="w-[45%]">
              <p className=" text-2xl text-bolder ">
                You're <span className="text-[#F7B500]"> never alone </span>on
                your
                <br /> guitar journey. Our dedicated <br /> team of instructors
                is on
                <br />
                standby to help you overcome
                <br /> trouble spots.
              </p>
            </div>
            <div className="w-[45%]">
              <Image
                className=" flex-1 h-full w-[80%] "
                src="/struggles.svg"
                width={500}
                height={100}
                alt="your guitar struggles"
              />
            </div>
          </div>
          <Button className="bg-brown h-[35px] w-[auto] rounded-2xl p-[15px] text-[14px] items-center justify-center">
            Join Spicy Guitar Academy for FREE
          </Button>
        </div>
      </section>

      <section className="flex my-[30px] p-20 flex-col w-full items-center justify-center gap-12 align-middle h-[100%]">
        <div className="w-[80%]">
          <h2 className="text-black text-bold mb-10 text-center text-2xl font-bold tracking-wide leading-6 lg:text-3xl">
            <span className="mr-5 ">Lessons For</span>
            <span className="bg-[#2B1108] text-white px-3 py-2 rounded-2xl">
              All Skill Levels
            </span>
          </h2>
          <div className="flex justify-between w-full ">
            <div
              style={{ backgroundImage: "url('/bghe.svg')" }}
              className="bg-[#7A402C] bg-[rgba(0,0,0,0.8)] flex flex-col items-right p-4 text-white justify-center bg-center bg-cover bg-no-repeat w-[240px] h-[140px]"
            >
              <p>Level</p>
              <h4>BEGINNER</h4>
            </div>
            <div className="bg-[#744911] flex flex-col items-right p-4 text-white justify-center  w-[240px] h-[140px]">
              <p>Level</p>
              <h4>AMATEUR</h4>
            </div>
            <div className="bg-[#4B1E0E] flex flex-col items-right p-4 text-white justify-center  w-[240px] h-[140px]">
              <p>Level</p>
              <h4>INTERMIDIATE</h4>
            </div>
            <div className="bg-[#200D06] flex flex-col items-right p-4 text-white justify-center  w-[240px] h-[140px]">
              <p>Level</p>
              <h4>ADVANCED</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="flex bg-[#F0EAE8] my-[30px] p-20 flex-col w-full items-center justify-center gap-12 align-middle h-[100%]">
        <div className="flex gap-6 flex-col w-[90%]">
          <h2 className="text-[#401A0C] text-bold text-left text-[24px] font-bold tracking-wide leading-6 lg:text-3xl">
            Students success stories
          </h2>
          <div className="flex items-center justify-center gap-10">
            <div>
              <Image
                className=" flex-1 h-[180px] w-[180px] rounded-full items-center"
                src="/bghero.png"
                width={500}
                height={500}
                alt="your guitar struggles"
              />
            </div>
            <div className="flex flex-col items-left justify-center  gap-8 w-[70%] ">
              <h3 className="text-[#401A0C] font-bold text-[24px] ">
                Ifiok Isaiah
              </h3>
              <p className="text-[#401A0C] text-[20px] ">
                Spicy Guitar Academy Is A Great Learning Hub For Any Guitarist
                That Want To Get On Top Of His/Her Craft. Whether You're A
                Beginner, Amateur Or Advance Guitar Player, The Academy Will
                Teach You To Grow From Any Of These Categories To A More
                Advanced Level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-center items-center py-[50px] gap-9">
          <h2 className="text-[#401A0C] text-[20px] font-bold text-center ">
            ABOUT OC OMOFUMA
          </h2>

          <div className="flex  items-center justify-center">
            <TabsDisplay />
          </div>

          <div className="flex justify-center gap-x-16 items-center ">
            <div className="flex flex-col ">
              <p className="text-[#401A0C] text-[20px] font-bold text-center ">
                8 YEARS
              </p>
              <p className="text-[#401A0C] text-[20px] font-bold text-center ">
                Of Online Lessons
              </p>
            </div>
            <div className="flex flex-col ">
              <p className="text-[#401A0C] text-[20px] font-bold text-center ">
                26+ YEARS
              </p>
              <p className="text-[#401A0C] text-[20px] font-bold text-center ">
                Teaching Guitar
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
