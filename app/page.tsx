"use client";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {
  Tabs, Tab, Card, CardBody, CardHeader, Image,
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Divider, Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from "@nextui-org/react";
import SubstackFeed from '@/components/SubstackFeed';
import { faGithub, faBluesky, faSquareLinkedin, faSubstack, faMedium, faMastodon } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalComEmbed from "../components/CalCom";
import { NativeShareButton, EmailShareButton } from "../components/share";
import { useState } from "react";

export default function IndexPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isStopped, setIsStopped] = useState<boolean>(false);
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <h1 className={title()}> <span>Hello there! I'm </span></h1>
          <h1 className={title({ color: "yellow" })}> <span>Annie He</span></h1>
          <h1 className={title()}>
            .
          </h1>
          &nbsp;
          <br />
          <h4 className={subtitle({ class: "mt-4" })}>
            <span>I'm an MPH student that studies how spatial (GIS), civic (jurisdictions and voting), and communication systems work together to help improve population health outcomes in the United States.</span>
          </h4>
        </div>

        <div className="mt-4">
          <Card style={{ border: '1.5px solid #F09600' }}>
            <CardBody>
              <span>
                <span style={{ fontWeight: "bold" }}>Are you working in AI or public health -- or both? If so, I'd love to connect with you!</span>
                <br />
                <br />
                I'm interested in speaking with people who are involved in health communication, law, non-medical determinants of health, civic tech, or AI for public good.
              </span>
              <div className="flex flex-col items-center justify-center p-6">
                {/* 1. Interactive Button */}
                <div className={`pulsate-wrapper after:hover:animate-none ${isStopped ? "after:animate-none" : ""}`}>
                  <Button
                    onPress={() => {
                      onOpen();
                      setIsStopped(true); // Stops the pulsation animation on click
                    }}
                    className="relative z-10 text-sm font-bold text-orange-400 bg-default-100"
                    variant="flat"
                  >
                    Let's Connect
                  </Button>
                </div>

                {/* 2. Embedded Dynamic Modal View */}
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
                            <Link isExternal href={siteConfig.links.contact}>
                              <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            </Link>
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
                              <Link isExternal href={siteConfig.links.substack}>
                                <FontAwesomeIcon icon={faSubstack} size="2x" />
                              </Link>
                              <Link isExternal href={siteConfig.links.medium}>
                                <FontAwesomeIcon icon={faMedium} size="2x" />
                              </Link>
                              <Link isExternal href={siteConfig.links.mastodon}>
                                <FontAwesomeIcon icon={faMastodon} size="2x" />
                              </Link>
                            </div>
                            <div className="mt-4">
                              <p className="font-medium mb-1">You can also share this page!</p>
                              <NativeShareButton />
                              {" "}
                              <EmailShareButton />
                            </div>

                            <div className="mt-6">
                              <CalComEmbed />
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
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="mt-8">
          <h1 className={title()}>More About Me</h1>
        </div>
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" size="lg" color="warning" variant="underlined" style={{ fontWeight: "bold" }}>
            <Tab key="background" title="Start here!" >
              <Card style={{ border: '1.5px solid #F09600' }}>
                <CardBody>
                  <span>
                    I’ve grown deeply frustrated with the public’s negative attitude toward public health and voting,
                    which led me to start a Substack newsletter in December 2024.
                    Immersing myself in these issues made me realize I wanted a career in public health policy, which prompted me to apply for an MPH program by mid-2025.
                    <br />
                    <br />
                    Beginning in 2026, I started my program in Texas, where I am studying U.S. health policy and researching how spatial, civic, and communication systems together impact community health.
                    <br />
                    <br />
                    During my free time, I build personal projects and publish all of them on my {" "}
                    <Link
                      isExternal
                      href={siteConfig.links.github}
                      size="md"
                    >
                      GitHub
                    </Link>.
                    I like to write essays about my work and personal experiences on {" "}
                    <Link
                      isExternal
                      href={siteConfig.links.medium}
                      size="md"
                    >
                      Medium
                    </Link>. I still write about why public health is important and why voting matters in public health at least 1x/month on my <Link
                      isExternal
                      href={siteConfig.links.substack}
                      size="md"
                    >Substack</Link>. Please feel free to subscribe below! I'm on <Link
                      isExternal
                      href={siteConfig.links.bluesky}
                      size="md"
                    >Bluesky</Link> connecting with folks who are interested in regulating healthcare and AI.

                    <div className="w-full mx-auto my-6">
                      <SubstackFeed />
                      <br />
                      <br />
                      <div className="block dark:hidden rounded-xl overflow-hidden bg-[#fafafa] p-4 border border-gray-200 shadow-lg">
                        <iframe
                          src="https://anniezhe.substack.com/embed"
                          width="100%"
                          height="600vh"
                          style={{ border: 0, background: '#fafafa' }}
                          title="Substack Subscription Form Light"
                        />
                      </div>

                      {/* 2. DARK MODE WIDGET */}
                      {/* Replaced shadow-sm with shadow-xl and added a darker shadow tint so it stands out on dark mode */}
                      <div className="hidden dark:block rounded-xl overflow-hidden bg-[#1a1a1a] p-4 border border-zinc-800 shadow-xl shadow-zinc-950/40">
                        <iframe
                          src="https://anniezhe.substack.com/embed"
                          width="100%"
                          height="600vh"
                          style={{ border: 0, background: '#1a1a1a' }}
                          title="Substack Subscription Form Dark"
                        />
                      </div>
                    </div>
                  </span>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="projects" title="Materials + Projects">
              <Card style={{ border: '1.5px solid #F09600' }}>
                <CardBody>
                  <h4 className="text-large font-bold">Materials</h4>
                  <br />
                  <Table isStriped aria-label="Materials Table">
                    <TableHeader>
                      <TableColumn>Name</TableColumn>
                      <TableColumn>Author/Publisher</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell><Link isExternal href="https://airtable.com/appnMzrdfiyuVpgYw/shr5KdFd7MiRkpTym">List of Important US Government Positions</Link></TableCell>
                        <TableCell>Annie He (that's me)</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <br />
                  <Divider />
                  <br />
                  <h4 className="text-large font-bold">Projects</h4>
                  <br />
                  <Table isStriped aria-label="Projects Table">
                    <TableHeader>
                      <TableColumn>Name</TableColumn>
                      <TableColumn>Completed Month and Year</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell><Link isExternal href="https://inflation-health-dash-df2d2ac77f50.herokuapp.com/">Inflation and Healthcare Costs</Link></TableCell>
                        <TableCell>December 2024</TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell><Link isExternal href="https://medium.com/@anniezhe0/healthcare-is-my-problem-and-your-problem-86dbca22e565">Healthcare is My Problem and Your Problem</Link></TableCell>
                        <TableCell>November 2024</TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell><Link isExternal href="https://medium.com/@anniezhe0/general-overview-of-the-us-healthcare-system-12628979bdf9">General Overview of the US Healthcare System</Link></TableCell>
                        <TableCell>October 2024</TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell><Link isExternal href="https://github.com/anniezhe/cdc_botulism">Centers for Disease Control and Prevention (CDC)'s Botulism Report from 1899 to 2017</Link></TableCell>
                        <TableCell>September 2024</TableCell>
                      </TableRow>
                      <TableRow key="5">
                        <TableCell><Link isExternal href="https://github.com/anniezhe/cfpb_complaint_dataset">2022-2023 Consumer Financial Protection Bureau (CFPB) Complaint Report</Link></TableCell>
                        <TableCell>December 2023</TableCell>
                      </TableRow>
                      <TableRow key="6">
                        <TableCell><Link isExternal href="https://medium.com/@anniezhe0/using-random-forest-regression-model-on-the-mastercards-stock-data-itself-1a069ad9934a">Using Random Forest Regression Model on the Mastercard’s Stock Data Itself</Link></TableCell>
                        <TableCell>April 2023</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="skills" title="Skills + Certificates">
              <Card style={{ border: '1.5px solid #F09600' }}>
                <CardBody>
                  <h4 className="text-large font-bold">Skills</h4>
                  <br />
                  <Table aria-label="Skills Table">
                    <TableHeader>
                      <TableColumn>Programming Skills</TableColumn>
                      <TableColumn>Software Application/Skills</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell>Microsoft Transact SQL (T-SQL)</TableCell>
                        <TableCell>Microsoft SQL Server Management Studio</TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell>GoogleSQL</TableCell>
                        <TableCell>Google BigQuery</TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell>PowerBI Data Analysis Expression (DAX)</TableCell>
                        <TableCell>Microsoft PowerBI</TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell>Python</TableCell>
                        <TableCell>Jupyter Notebook</TableCell>
                      </TableRow>
                      <TableRow key="5">
                        <TableCell>{" "}</TableCell>
                        <TableCell>Tableau</TableCell>
                      </TableRow>
                      <TableRow key="6">
                        <TableCell>{" "}</TableCell>
                        <TableCell>Microsoft Excel</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <br />
                  <Divider />
                  <br />
                  <h4 className="text-large font-bold">Professional Certificates</h4>
                  <p>Click on any one of them below to see more information.</p>
                  <br />
                  <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                    <Link isExternal href="https://www.credly.com/badges/36373614-98a6-41e3-afe9-97cc427d2027/public_url">
                      <Card className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                          <p className="text-tiny uppercase font-bold">December 2023</p>
                          <h4 className="font-bold text-medium">Google Data Analytics Professional Certificate</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                          <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src="/google-data-analytics-certificate.png"
                            width={270}
                          />
                        </CardBody>
                      </Card>
                    </Link>
                    <Link isExternal href="https://www.credly.com/badges/de0badae-7f24-4ca0-8e22-4f51271250c0/public_url">
                      <Card className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                          <p className="text-tiny uppercase font-bold">February 2024</p>
                          <h4 className="font-bold text-medium">IBM Machine Learning Specialist - Associate</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                          <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src="/ibm-machine-learning-specialist-associate.png"
                            width={270}
                          />
                        </CardBody>
                      </Card>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </section>
    </DefaultLayout>
  );
}
