/* eslint-disable @typescript-eslint/no-explicit-any */
import { Textarea } from "@nextui-org/input";
import React from "react";

const StorySubjectInput = ({ userSelection }: any) => {
  return (
    <div>
      <label className="font-bold text-primary text-2xl md:text-4xl">
        1. Subject of the story
      </label>
      <Textarea
        placeholder="Write the subject of the story which you want to generate"
        size="md"
        classNames={{
          input: "resize-y min-h-[100px] text-xl md:text-2xl p-5",
        }}
        className="mt-3 w-full "
        onChange={(e) =>
          userSelection({
            fieldValue: e.target.value,
            fieldName: "storySubject",
          })
        }
      />
    </div>
  );
};

export default StorySubjectInput;
