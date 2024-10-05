import Image from "next/image";
import React from "react";

const BookCoverPage = ({ coverImage }: { coverImage: string }) => {
  return (
    <div className="h-full bg-primary flex items-center ">
      <Image src={coverImage} alt="Book Cover Image" width={500} height={600} />
    </div>
  );
};

export default BookCoverPage;
