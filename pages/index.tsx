import Image from "next/image";
import { FaceSmileIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { horizontalLoop } from "../utils/loop";

export default function HappyCodingWithoutTears() {
  const documentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      horizontalLoop("[data-loop-text]", {
        repeat: -1,
      });

      gsap.to("[data-rotate]", {
        rotate: -360,
        repeat: -1,
        duration: 5,
        ease: "none",
      });
    }, documentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-screen mx-auto font-mono bg-white" ref={documentRef}>
      <div className="container flex items-center mx-auto h-14">
        <span className="mr-20 text-2xl font-bold">DEADRABBIT</span>
        <ul className="flex">
          <li className="mx-5">HOME</li>
          <li className="mx-5">WORKS</li>
          <li className="mx-5">ABOUT</li>
        </ul>

        <button className="px-3 py-1 ml-auto text-sm font-light text-white bg-black rounded-full">
          contact
        </button>
      </div>

      <div className="flex items-center justify-around px-5 font-serif font-black leading-tight border border-black text-8xl">
        <div className="">
          <h1>Happy Coding</h1>
          <h1>Without Tears</h1>
        </div>

        <div className="">
          <Image
            src="/happy-coding/surfing.svg"
            alt="a man is surfing"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[1px] border-x border-b border-black bg-black ">
        <div className="relative p-5 overflow-hidden bg-white">
          <div className="text-2xl w-[300px] leading-7">
            Create your own website with best practices.
          </div>
          <div>
            <div className="mt-5">
              <span className="text-4xl">$99</span>{" "}
              <span className="text-xs">per year</span>
            </div>

            <button className="px-4 py-3 mt-5 ml-auto text-xl font-light text-white bg-black rounded-xl ">
              <div className="flex items-center">
                <span>Talk Right Now</span>
                <ArrowRightIcon className="w-5 h-5 ml-5"></ArrowRightIcon>
              </div>
            </button>
          </div>

          <div
            className="absolute right-0 translate-x-1/2 -translate-y-1/2 top-1/2"
            data-rotate
          >
            <div
              className="bg-no-repeat scale-75 w-[439px] h-[439px]"
              style={{
                backgroundImage: "url(/happy-coding/build-your-site.svg)",
              }}
            ></div>
          </div>
        </div>
        <div className="relative p-5 overflow-hidden bg-white ">
          <div className="text-2xl">Get In Touch</div>
          <div>DeadRabbbbit@Gmail.com</div>

          <div className="absolute bottom-3">
            <div className="text">[Fake Number]</div>
            <div className="text-5xl"> +00 8888-888</div>
          </div>

          <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <FaceSmileIcon className="w-48 h-48 opacity-10"></FaceSmileIcon>
          </div>
        </div>
        <div className="flex items-center justify-center p-10 bg-white">
          <Image
            src="/commom/logo-b.svg"
            alt="a man is surfing"
            width={300}
            height={300}
          ></Image>
        </div>
      </div>

      <div className="flex w-full mt-5 overflow-hidden font-mono text-6xl font-bold whitespace-nowrap">
        {new Array(6).fill(0).map((_, index) => {
          return (
            <div key={index} data-loop-text>
              <span
                style={{
                  WebkitTextStrokeColor: "black",
                  WebkitTextStrokeWidth: "2px",
                  color: "#fff",
                }}
              >
                DEADRABBIT <span className="mx-5"></span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
