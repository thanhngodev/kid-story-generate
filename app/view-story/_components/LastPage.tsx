import { Button } from "@nextui-org/react";
import React from "react";

const LastPage = () => {
  return (
    <div className="bg-primary p-10 h-full">
      <h2 className="text-center text-2xl text-white">The End</h2>
      <div className="flex items-center justify-center">
        <Button>Share</Button>
      </div>
    </div>
  );
};

export default LastPage;
