import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="px-10 md:px-28 lg:px-44 mt-10 min-h-[calc(100vh-64px)]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-[36px] md:text-[40px] lg:text-[50px] xl:text-[70px] text-primary font-extrabold py-10 text-center md:text-left ">
            Craft Magical Stories for kids in Minutes
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl text-primary font-light text-center md:text-left">
            Create fun and personalized stories that bring your child&apos;s
            adventures to life and spark their passion for reading. It only
            takes few seconds!
          </p>
          <div className="md:hidden flex">
            <Image src={"/hero.png"} alt="hero" width={700} height={700} />
          </div>
          <Link
            href={"/create-story"}
            className="w-full flex justify-center md:justify-start items-center "
          >
            <Button
              size="lg"
              color="primary"
              className="mt-5 font-bold text-2xl p-8"
            >
              Create Story
            </Button>
          </Link>
        </div>
        <div className="md:flex hidden">
          <Image src={"/hero.png"} alt="hero" width={700} height={700} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
