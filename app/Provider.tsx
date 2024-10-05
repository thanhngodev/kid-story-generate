"use client";
import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./_components/Header";
import { UserDetailContext } from "./_context/UserDetailContext";
import { IUserInfo } from "./interfaces/app.interface";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [userDetail, setUserDetail] = useState<IUserInfo>();
  const { user } = useUser();

  useEffect(() => {
    user && saveNewUser();
  }, [user]);

  const saveNewUser = async () => {
    const userResp = await db
      .select()
      .from(Users)
      .where(
        eq(Users.userEmail, user?.primaryEmailAddress?.emailAddress ?? "")
      );

    if (!userResp[0]) {
      const result = await db
        .insert(Users)
        .values({
          userEmail: user?.primaryEmailAddress?.emailAddress,
          userImage: user?.imageUrl,
          userName: user?.fullName,
        })
        .returning({
          userEmail: Users.userEmail,
          userName: Users.userName,
          userImage: Users.userImage,
          credit: Users.credit,
        });

      setUserDetail(result[0]);
    } else {
      setUserDetail(userResp[0]);
    }
  };
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <NextUIProvider>
        <Header />
        {children}
        <ToastContainer />
      </NextUIProvider>
    </UserDetailContext.Provider>
  );
};

export default Provider;
