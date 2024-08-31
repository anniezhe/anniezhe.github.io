import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
// import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import annieLogo from "../public/annieLogo.png";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
} from "@/components/icons";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

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
        {/* <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div> */}
      </NavbarContent>

      <NavbarContent
        className="lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="lg:flex gap-2">
          <Link isExternal href={siteConfig.links.linkedin}>
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="lg:flex">
          <Button onPress={onOpen}
            className="text-sm font-normal text-default-600 bg-default-100"
            startContent={<MailIcon className="text-danger" />}
            variant="flat">Contact Me</Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">I'm excited about the opportunity for us to connect! But first...</ModalHeader>
                  <ModalBody>
                    <p>
                      I am based in New York City, so my timezone, Eastern Time, may be different from yours and that's okay!
                      Please send me an email at a time that works for you.
                      I will do my best to get back to you within 24 to 48 hours. 
                    </p>
                    <p>
                      If you would like to send me an email using your preferred email address or software application, then my email address is anniezhe0@gmail.com
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onPress={onClose} isExternal
                      as={Link}
                      href={siteConfig.links.contact}>
                      Email Me Using Your Default Application
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent> */}

      {/* <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu> */}
    </NextUINavbar>
  );
};
