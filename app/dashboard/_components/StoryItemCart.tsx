import { StoryItemCartProps } from "@/app/interfaces/app.interface";
import { getRandomImage } from "@/app/utils/common";
import { Card, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StoryItemCart: React.FC<StoryItemCartProps> = ({ story }) => {
  return (
    <Link href={"view-story/" + story.storyId}>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5 hover:scale-105 transition-all cursor-pointer"
      >
        <Image
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={story?.coverImage || getRandomImage()}
          width={500}
          height={500}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-white text-xl ">
              {story?.output?.story_name || ""}
            </p>
          </div>
          <Button className="text-white ml-1" color="primary" radius="md">
            Read now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default StoryItemCart;
