/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { chatSession } from "@/config/GeminiAi";
import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import uuid4 from "uuid4";
import { IFieldData, IFormDataType } from "../interfaces/app.interface";
import { getRandomImage } from "../utils/common";
import AgeGroup from "./_components/AgeGroup";
import CustomLoader from "./_components/CustomLoader";
import ImageStyle from "./_components/ImageStyle";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";

const createStoryPrompt = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

const CreateStory = () => {
  const [formData, setFormData] = useState<IFormDataType>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { user } = useUser();

  const notify = (msg: string) => toast(msg);
  const notifyError = (msg: string) => toast.error(msg);

  const onHandleUserSelection = (data: IFieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
  };

  const generateStory = async () => {
    setLoading(true);
    const finalPrompt = createStoryPrompt
      ?.replace("{ageGroup}", formData?.ageGroup ?? "")
      .replace("{storyType}", formData?.storyType ?? "")
      .replace("{imageStyle}", formData?.imageStyle ?? "")
      .replace("{storySubject}", formData?.storySubject ?? "");
    // Generate AI
    try {
      const result = await chatSession.sendMessage(finalPrompt);
      const story = JSON.parse(result.response.text());
      const resp = await saveInDB(story);
      if (resp && resp.length > 0) {
        notify("Story generated !!!");
        router.replace("/view-story/" + resp[0].storyId);
      } else {
        notifyError("No story generated, please try again.");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      notifyError("Server error, try again !!!");
      setLoading(false);
    }

    // Save DB

    // Generate Image
  };

  const saveInDB = async (output: any) => {
    setLoading(true);
    const recordId = uuid4();
    try {
      const result = await db
        .insert(StoryData)
        .values({
          storyId: recordId,
          ageGroup: formData?.ageGroup,
          imageStyle: formData?.imageStyle,
          storySubject: formData?.storySubject,
          storyType: formData?.storyType,
          output: output,
          coverImage: getRandomImage(),
          userEmail: user?.primaryEmailAddress?.emailAddress,
          userImage: user?.imageUrl,
          userName: user?.fullName,
        })
        .returning({ storyId: StoryData.storyId });
      setLoading(false);

      return result;
    } catch (error) {
      console.log(error);
      notifyError("Server error, try again !!!");
      setLoading(false);
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-40 ">
      <h2 className="font-extrabold text-[36px] md:text-[40px] lg:text-[70px] text-primary text-center ">
        CREATE YOUR STORY
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl text-primary text-center ">
        Unlock your creativity with AI: Craft stories like never before! Let our
        AI bring your imagination to life, one story at a time.
      </p>
      <div className="grid grid-cols-1 gap-10 mt-14 ">
        <StorySubjectInput userSelection={onHandleUserSelection} />

        <StoryType userSelection={onHandleUserSelection} />

        <AgeGroup userSelection={onHandleUserSelection} />

        <ImageStyle userSelection={onHandleUserSelection} />
      </div>

      <div className="flex justify-center md:justify-end my-10">
        <Button
          color="primary"
          className="p-10 text-2xl"
          disabled={loading}
          onClick={() => generateStory()}
        >
          Generate Story
        </Button>
      </div>
      <CustomLoader isLoading={loading} />
    </div>
  );
};

export default CreateStory;
