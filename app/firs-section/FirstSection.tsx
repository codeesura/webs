import React from "react";
import { TextTypingEffectWithTextsFadeOut } from "./TextEffect";
import Networks from "./Networks";
import { ButtonOutline } from "./LaunchApp";
import { ButtonWithIcon } from "./Doc";

const TextAnimatedGradient = () => {
  return (
    <span
      className="
    inline-flex
    whitespace-nowrap
    animate-text-gradient
    bg-gradient-to-r
    from-[#3bc17a]
    via-[#43d389]
    to-[#47dca1]
    bg-[200%_auto]
    bg-clip-text
    text-transparent 
    justify-center 
    font-ubuntu 
    2xl:text-9xl
    xl:text-8xl
    lg:text-7xl
    md:text-6xl
    sm:text-5xl
    text-3xl
    md:px-20 
    pb-8
    md:pb-9
    xl:pb-12
    2xl:pb-12
    font-extralight 
    md:font-light
    "
    >
      Felina Privacy-Centric <br /> Multichain Bridge.
    </span>
  );
};

const FirstSection = () => {
  return (
    <section className="h-[92vh] bg-gradient-to-r from gray-00 to-gray-200 spacey-10 flex flex-col justify-center gap-3">
      <div className="container mx-auto text-center ">
        <div>
          <TextAnimatedGradient />
        </div>

        <div>
          <TextTypingEffectWithTextsFadeOut />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center pt-5 sm:pt-10 w-full">
          <ButtonOutline />
          <ButtonWithIcon />
        </div>

        <div className="flex flex-col gap-4 justify-center mt-16 md:mt-20 lg:mt-24 xl:mt-32 2xl:mt-40 md:gap-8">
          <div className="text-[#444545] font-ubuntu text-sm">
            Supporting a multitude of networks for your{" "}
            <span className="text-[#43d389] font-bold">Privacy</span>
          </div>
          <Networks />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
