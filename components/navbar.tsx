"use client";

import * as React from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import annieLogo from "../public/annieLogo.png";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import ThemeSwitch from "@/components/theme-switch";
import { LinkedinIcon, MailIcon } from "@/components/icons";

// FIX: Change package source from @heroui/react to @nextui-org/react
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Button, 
  useDisclosure 
} from "@nextui-org/react";

import CalendlyEmbed from "./../components/Calendly";

export const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <NextUINavbar maxWidth="xl" isBordered>
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

        <NavbarItem className="lg:flex">
          <Button 
            onPress={onOpen}
            className="text-sm font-normal text-default-600 bg-default-100"
            startContent={<MailIcon className="text-danger" />}
            variant="flat"
          >
            Contact Me
          </Button>

          <Modal isOpen={isOpen} scrollBehavior="inside" onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex">Here's my contact info</ModalHeader>
                  <ModalBody>
                    {/* FIX: Swapped wrapping <p> out for clean semantic <div> layout containers to fix hydration trees */}
                    <div className="text-sm leading-6">
                      <p>
                        If you have any questions or concerns, my email address is anniezhe0@gmail.com. 
                        I am based in New York City, so my timezone, Eastern Time, may be different from yours and that's okay!
                        Please send me an email at a time that works for you. I will do my best to get back to you within 24 to 48 hours.
                      </p>
                      
                      <div className="mt-4">
                        <p className="font-medium mb-1">Follow me on social media!</p>
                        <Link isExternal href={siteConfig.links.linkedin}>
                          <LinkedinIcon className="text-default-600" />
                        </Link>
                      </div>
                      
                      <div className="mt-6">
                        <CalendlyEmbed url="https://calendly.com/anniezhe0/15min" />
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
