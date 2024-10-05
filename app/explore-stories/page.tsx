"use client";
import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
import { desc } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { StoryItemType } from "../interfaces/app.interface";
import StoryItemCart from "../dashboard/_components/StoryItemCart";
import { Button } from "@nextui-org/react";

const ExploreStories = () => {
  const [offset, setOffset] = useState<number>(0);
  const [stories, setStories] = useState<StoryItemType[]>([]);

  useEffect(() => {
    getAllStories(offset);
  }, []);

  const getAllStories = async (offset: number) => {
    setOffset(offset);
    const result = await db
      .select()
      .from(StoryData)
      .orderBy(desc(StoryData.id))
      .limit(8)
      .offset(offset);

    setStories([...stories, ...result]);
  };
  return (
    <div className="min-h-screen p-10 md:px-20 lg:px-40">
      <h2 className="font-bold text-4xl text-primary text-center">
        Explore More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
        {stories &&
          stories.map((item: Partial<StoryItemType>, index: number) => (
            <StoryItemCart story={item} key={index} />
          ))}
      </div>
      {stories.length > 8 && (
        <div className="text-center mt-10">
          <Button color="primary" onClick={() => getAllStories(offset + 8)}>
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};

export default ExploreStories;
