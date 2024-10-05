"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MENU_LIST } from "../common/constant";

const Header = () => {
  const { isSignedIn } = useUser();
  const menuList = MENU_LIST;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
          <h2 className="hidden md:flex font-bold text-2xl text-primary ml-3">
            Kids Story
          </h2>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden md:flex">
        {menuList.map((menu, index) => (
          <NavbarItem
            key={index}
            className="text-xl text-primary font-medium hover:underline"
          >
            <Link href={menu.path}>{menu.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Link href={"/dashboard"}>
          <Button color="primary">
            {isSignedIn ? "Dashboard" : "Get Started"}
          </Button>
        </Link>
        <UserButton />
      </NavbarContent>
      <NavbarMenu>
        {menuList.map((menu, index) => (
          <NavbarMenuItem key={index}>
            <Link href={menu.path}>{menu.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
