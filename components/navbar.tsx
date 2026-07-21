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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from "@nextui-org/react";
import { faGithub, faBluesky, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalendlyEmbed from "./../components/Calendly";
import { useState } from "react";
import { NativeShareButton, EmailShareButton } from "./share";

export const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isStopped, setIsStopped] = useState<boolean>(false);
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

        <NavbarItem className="lg:flex">
          <div className={`pulsate-wrapper after:hover:animate-none ${isStopped ? "after:animate-none" : ""}`}>
            <Button
              onPress={() => {
                onOpen();
                setIsStopped(true); // Stops the animation on click
              }}
              className="relative z-10 text-sm font-bold text-orange-400 bg-default-100"
              variant="flat"

            >
              Let's Connect
            </Button>
          </div>


          <Modal isOpen={isOpen} scrollBehavior="inside" onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex">Here's my contact info</ModalHeader>
                  <ModalBody>
                    <div className="text-sm leading-6">
                      <p>
                        If you have any questions or concerns, my email address is anniezhe0@gmail.com.
                        I am based in New York City, so my timezone, Eastern Time, may be different from yours and that's okay!
                        Please send me an email at a time that works for you. I will do my best to get back to you within 24 to 48 hours.
                      </p>

                      <div className="mt-4">
                        <p className="font-medium mb-1">Follow me on social media!</p>
                        <Link isExternal href={siteConfig.links.linkedin}>
                          <FontAwesomeIcon icon={faSquareLinkedin} size="2x" />
                        </Link>
                        <Link isExternal href={siteConfig.links.github}>
                          <FontAwesomeIcon icon={faGithub} size="2x" />
                        </Link>
                        <Link isExternal href={siteConfig.links.bluesky}>
                          <FontAwesomeIcon icon={faBluesky} size="2x" />
                        </Link>
                      </div>
                      <div className="mt-4">
                        <p className="font-medium mb-1">You can also share this page!</p>
                        <NativeShareButton />
                        {" "}
                        <EmailShareButton />
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
