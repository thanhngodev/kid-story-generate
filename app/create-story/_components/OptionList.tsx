"use client";
import {
  IOptionField,
  IOptionListComponent,
} from "@/app/interfaces/app.interface";
import Image from "next/image";
import React, { useState } from "react";

const OptionList = ({
  optionList,
  userSelection,
  fieldName,
  sizeImage = { w: 300, h: 300 },
  height = "200px",
}: IOptionListComponent) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const onUserSelection = (item: IOptionField) => {
    setSelectedOption(item?.label);
    userSelection({
      fieldValue: item?.label,
      fieldName: fieldName,
    });
  };
  return (
    <>
      {optionList.map((item, index) => (
        <div
          key={index}
          className={`relative grayscale hover:grayscale-0 cursor-pointer p-2 ${
            selectedOption === item.label
              ? "grayscale-0 border-2 rounded-3xl border-primary shadow-2xl"
              : "grayscale border-2 border-transparent "
          }`}
          onClick={() => onUserSelection(item)}
        >
          <h2 className="absolute bottom-5 text-white text-center w-full text-2xl ">
            {item.label}
          </h2>
          <Image
            src={item.imageUrl}
            alt={item.label}
            width={sizeImage.w}
            height={sizeImage.h}
            className={`object-cover rounded-3xl w-full h-[${height}]`}
          />
        </div>
      ))}
    </>
  );
};

export default OptionList;
