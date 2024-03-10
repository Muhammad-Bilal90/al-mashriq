"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SmallScreenNavbar = () => {
  const [isOpen, setIsOpend] = useState<boolean>(false);
  const [menuTl] = useState(gsap.timeline({ paused: true }));

  const tl = useRef<any>(null);

  function handleMenuClicked() {
    setIsOpend(!isOpen);
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        paused: true,
      });

      tl.current.from(
        [
          "#title1-1",
          "#title1-2",
          "#title1-3",
          "#title1-4",
          "#title1-5",
          "#title1-6",
        ],
        {
          opacity: 0,
          x: "-=30",
          delay: 0.6,
          stagger: 0.1,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    isOpen ? tl.current.play() : tl.current.reverse();
  }, [isOpen]);
  // useLayoutEffect(() => {
  //   // let current = comp.current;
  //   let toggleBtn = document.getElementById("#main");
  //   const tl = gsap.timeline({
  //     paused: true,
  //   });

  //   tl.reverse();
  //   tl.from(
  //     [
  //       "#title1-1",
  //       "#title1-2",
  //       "#title1-3",
  //       "#title1-4",
  //       "#title1-5",
  //       "#title1-6",
  //     ],
  //     {
  //       y: "-=40",
  //       opacity: 0,
  //       ease: "expo.easeOut",
  //       duration: 0.8,
  //       stagger: 0.1,
  //     }
  //   );
  //   toggleBtn?.addEventListener("click", function () {
  //     tl.reversed(!tl.reversed());
  //   });

  //   // return () => {
  //   //    return toggleBtn?.removeEventListener("click", function () {
  //   //     tl.reversed(!tl.reversed());
  //   // }
  // }, [isOpen]);

  console.log("OPEN", isOpen);
  return (
    <div className="md:hidden">
      <button
        ref={tl}
        id="main"
        className="text-white fixed h-16 z-50"
        onClick={handleMenuClicked}
      >
        | | |
      </button>
      <div
        className={`${
          isOpen ? "" : "opacity-0 pointer-events-none"
        } h-screen bg-[#161718] fixed z-40 top-0 bottom-0 left-0 right-0 w-full transition-all duration-500 ease-in-out delay-500 pt-10`}
      >
        <ul className="flex flex-col gap-4 mt-[60px]">
          <li
            id="title1-1"
            className="text-white text-[32px] px-5 text-2xl mb-5"
          >
            About Us
          </li>
          <li
            id="title1-2"
            className="text-white text-[32px] px-5 text-2xl mb-5"
          >
            Our Companies
          </li>
          <li
            id="title1-3"
            className="text-white text-[32px] px-5 text-2xl mb-5"
          >
            Our Ethos
          </li>
          <li
            id="title1-4"
            className="text-white text-[32px] px-5 text-2xl mb-5"
          >
            Golden Circle
          </li>
          <li
            id="title1-5"
            className="text-white text-[32px] px-5 text-2xl mb-5"
          >
            Contant Us
          </li>
          <li
            id="title1-6"
            className="text-white text-[32px] px-5 text-2xl mb-5"
          >
            We Are Hiring
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SmallScreenNavbar;
