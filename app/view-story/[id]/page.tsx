/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import BookCoverPage from "../_components/BookCoverPage";
import StoryPage from "../_components/StoryPage";
import LastPage from "../_components/LastPage";
import CustomLoader from "@/app/create-story/_components/CustomLoader";

const ViewStory = ({ params }: any) => {
  const [story, setStory] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getStory = async () => {
      setIsLoading(true);
      const result = await db
        .select()
        .from(StoryData)
        .where(eq(StoryData.storyId, params.id));
      if (result.length > 0) {
        setStory(result[0]);
      } else {
        setStory(undefined);
      }
      setIsLoading(false);
    };

    getStory();
  }, [params.id]);

  return (
    <div className="p-10 md:px-20 lg:px-40 h-[calc(100vh-64px)]">
      {story && (
        <>
          <h2 className="font-bold text-2xl md:text-4xl text-center p-4 md:p-5 bg-primary text-white rounded-[20px]">
            {story?.output?.story_name ? (
              <span className="">{story.output.story_name}</span>
            ) : (
              <span>No story name available</span>
            )}
          </h2>
          <div className="mt-[-40px] lg:mt-10 hidden md:flex justify-center w-full">
            {/* @ts-ignore */}
            <HTMLFlipBook width={500} height={600} showCover>
              <div>
                <BookCoverPage coverImage={story.coverImage} />
              </div>
              {[...Array(story?.output?.chapters?.length)].map(
                (_item, index) => (
                  <div key={index} className="bg-white p-10 border">
                    <StoryPage storyChapter={story?.output?.chapters[index]} />
                  </div>
                )
              )}
              <div>
                <LastPage />
              </div>
            </HTMLFlipBook>
          </div>
          <div className="mt-10 flex md:hidden justify-center w-full">
            {/* @ts-ignore */}
            <HTMLFlipBook width={300} height={500} showCover>
              <div>
                <BookCoverPage coverImage={story.coverImage} />
              </div>
              {[...Array(story?.output?.chapters?.length)].map(
                (_item, index) => (
                  <div key={index} className="bg-white p-5 md:p-10 border">
                    <StoryPage storyChapter={story?.output?.chapters[index]} />
                  </div>
                )
              )}
              <div>
                <LastPage />
              </div>
            </HTMLFlipBook>
          </div>
        </>
      )}
      <CustomLoader isLoading={isLoading} />
    </div>
  );
};

export default ViewStory;
