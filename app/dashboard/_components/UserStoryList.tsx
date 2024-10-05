"use client";
import { StoryItemType } from "@/app/interfaces/app.interface";
import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import StoryItemCart from "./StoryItemCart";
import CustomLoader from "@/app/create-story/_components/CustomLoader";

const UserStoryList = () => {
  const { user } = useUser();
  const [storyList, setStoryList] = useState<Partial<StoryItemType>[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    user && getUserStory();
  }, [user]);

  const getUserStory = async () => {
    setIsLoading(true);
    const result = await db
      .select()
      .from(StoryData)
      .where(
        eq(StoryData.userEmail, user?.primaryEmailAddress?.emailAddress ?? "")
      )
      .orderBy(desc(StoryData.id));

    setStoryList(result);
    setIsLoading(false);
  };

  return (
    <div>
      {!isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
          {storyList &&
            storyList.map((item: Partial<StoryItemType>, index: number) => (
              <StoryItemCart story={item} key={index} />
            ))}
        </div>
      )}

      <CustomLoader isLoading={isLoading} />
    </div>
  );
};

export default UserStoryList;
