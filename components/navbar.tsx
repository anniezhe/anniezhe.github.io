"use client";

import * as React from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import annieLogo from "../public/annieLogo.png";
import NextLink from "next/link";
import ThemeSwitch from "@/components/theme-switch";

export const Navbar = () => {
  
  return (
    <NextUINavbar maxWidth="xl" isBordered position="sticky" isBlurred className="bg-background/70 backdrop-blur-md">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <img width={70} alt="Annie He's logo" src={annieLogo.src} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="lg:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

      </NavbarContent>
    </NextUINavbar>
  );
};
