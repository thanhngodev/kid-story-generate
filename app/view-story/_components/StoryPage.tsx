import React from "react";
import { MdPlayCircleFilled } from "react-icons/md";

const StoryPage = ({ storyChapter }: any) => {
  return (
    <div className="h-full">
      <h2 className="text-xl md:text-2xl font-bold text-primary flex justify-between">
        {storyChapter?.chapter_title || ""}
      </h2>
      <p className="text-lg md:text-xl p-5 md:p-10 mt-3 rounded-lg bg-slate-100">
        {storyChapter?.text || ""}
      </p>
    </div>
  );
};

export default StoryPage;
