"use client";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ViewportSection = () => {
  const comp = useRef<HTMLDivElement | null>(null);
  const headingElement = useRef<HTMLHeadingElement | null>(null);
  const paraElement = useRef<HTMLParagraphElement | null>(null);
  const buttonElement = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      [headingElement.current, paraElement.current, buttonElement.current],
      {
        autoAlpha: 0,
        y: "-20",
        stagger: 0.5,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          scroller: ".my-container",
          trigger: [
            headingElement.current,
            paraElement.current,
            buttonElement.current,
          ],
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
  }, []);

  // useLayoutEffect(() => {
  //   // let current = comp.current;
  //   let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline({
  //       scrollTrigger: {
  //         scroller: ".my-container",
  //         trigger: ["#title-1", "#title-2", "#title-3"],
  //         start: "top 60%",
  //         end: "bottom 0%",
  //         toggleActions: "play none restart reverse",
  //       },
  //     });
  //     t1.from(["#title-1", "#title-2", "#title-3"], {
  //       opacity: 0,
  //       y: "-=30",
  //       stagger: 0.5,
  //     });
  //   });
  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="relative flex h-screen w-full items-center snap-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div id="main" className="w-2/4 flex flex-col">
        <h3
          id="title-1"
          key="title-1"
          ref={headingElement}
          className="font-bold text-[46px] tracking-[1px] leading-tight text-white"
        >
          Al Mashriq Group Of Companies
          {/* THE <br /> REAL ESTATE <br /> ECO-SYSTEM */}
        </h3>
        <p
          id="title-2"
          key="title-2"
          ref={paraElement}
          className="w-4/5 text-left pt-7 pb-12 leading-6 tracking-wide font-light text-lg text-white"
        >
          {/* We provide end to end industry centric solutions <br />
          for governments and real estate developers <br />
          across the globe. */}
          Al Mashriq Group of Companies is a Dubai based Group owned by Mr.
          Muhammad Kamran who is also the Chairman of the Group. We are counted
          among top builders and developers in Pakistan, irrespective of whether
          it is retail, commercial, or residential space. With infrastructure
          development being our main forte, we primarily focus on maintaining
          the highest level of quality in our work. Our aim is to develop
          customized homes and communities that easily conquer hearts of home
          buyers through their luxurious design and unique aesthetic appeal. By
          providing world-class features and facilities in properties we
          develop, we have been successful in attaining leadership position in
          real estate industry and overtime we have become the preferred brand
          when it comes to real estate development. Our diversified investment
          portfolio includes investments in real sector of Pakistan, Dubai,
          Turkey and Indonesia.
          <br />
          <br />
          Apart from real estate sector we are also one of the Pioneers of
          Mobile Phone Whole Seller and Exporters of Dubai covering a large
          Market of Middle East, Singapore and USA.
        </p>
        <button
          id="title-3"
          key="title-3"
          ref={buttonElement}
          className="h-11 w-36 flex justify-center items-center tracking-[1px] leading-normal font-normal rounded-[0.25rem] py-3 px-[30px] text-white text-xs border-[1px] border-solid border-[rgba(255,255,255, 0.3)] bg-[rgba(0,0,0,0.5)] hover:text-black hover:bg-white"
        >
          EXPLORE
        </button>
      </div>
      <video
        src={require("../../public/homeHero.mp4")}
        autoPlay
        muted
        loop
        className="absolute top-0 -z-[1] w-full h-full object-cover"
      />
    </div>
  );
};

export default ViewportSection;
