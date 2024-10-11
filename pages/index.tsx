import { Link } from "@nextui-org/link";
// import { Code } from "@nextui-org/code";
// import { button as buttonStyles } from "@nextui-org/theme";
import { Divider } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Tabs, Tab, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import GoogleAnalyticsCert from "../public/google-data-analytics-certificate.png";
import IBMDataAICert from "../public/ibm-machine-learning-specialist-associate.png";
import { useRouter } from 'next/router';
import CalendlyEmbed from "./../components/Calendly";

export default function IndexPage() {
  const router = useRouter()
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <h1 className={title()}>Hello there! I'm </h1>
          <h1 className={title({ color: "yellow" })}>Annie He</h1>
          <h1 className={title()}>
            .
          </h1>
          &nbsp;
          <br />
          <h4 className={subtitle({ class: "mt-4" })}>
            I collect, extract, and analyze information to learn and to present optimized and important documents.
          </h4>
        </div>

        <div className="mt-4">
          <Card>
            <CardBody>
              <span>
                I like to write essays about my work and personal experiences on {" "}
                <Link
                  isExternal
                  href={siteConfig.links.medium}
                  size="md"
                >
                  Medium
                </Link>. I also like to write shorter pieces on <Link
                  isExternal
                  href={siteConfig.links.linkedin}
                  size="md"
                >
                  LinkedIn
                </Link>.
              </span>
            </CardBody>
          </Card>
        </div>

        <div className="mt-8">
          <h1 className={title()}>More About Me</h1>
        </div>
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" size="lg" color="warning" variant="underlined" style={{fontWeight: "bold"}}>
            <Tab key="mission" title="Goal">
              <Card style={{border: '1.5px solid #F09600'}}>
                <CardBody>
                  <span>
                    I want to see a future where everyone in the United States has access to essential healthcare treatments in a timely manner.
                    <br />
                    <br />
                    It is critical for the United States to have access life-saving healthcare treatments within the next decade. To name a few, there's an increasing amount of the following in recent years:
                    <br />
                    - cancer diagnosis with younger generations
                    <br />
                    - older generations retiring from the workforce with health problems
                    <br />
                    - rejected medical treatments due to health insurance limits
                    <br />
                    <br />
                    In my personal experience, I had to wait 3 weeks to get permission for a simple, life-saving medical treatment, which was not acceptable. 
                    <br />
                    <br />
                    My goal is to be a part of the solution by doing three things:
                    <br />
                    - performing data analysis
                    <br />
                    - identifying and getting rid of what is not working
                    <br />
                    - identifying and keeping what is working and continue to build on it
                  </span>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="background" title="Background" >
              <Card style={{border: '1.5px solid #F09600'}}>
                <CardBody>
                  <span>
                    I have a year of work experience doing data analysis for New York City government, which churned out critical information for senior leadership across the division.

                    I deploy a context-based approach to effectively analyze and extract information from the data.
                    <br />
                    <br />
                    I graduated from CUNY John Jay on May 2023 with a bachelor's degree in Applied Mathematics with a concentration in Data Science and a minor in Computer Science. During my time as an undergrad, I participated 6 internships and 3 programs at various organizations from startups to corporations.
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
                  </span>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="projects" title="Projects">
              <Card style={{border: '1.5px solid #F09600'}}>
                <CardBody>
                  <Table isStriped aria-label="Projects Table">
                    <TableHeader>
                      <TableColumn>NAME</TableColumn>

                      <TableColumn>Completed Month and Year</TableColumn>
                    </TableHeader>
                    <TableBody>
                    <TableRow key="1">
                        <TableCell><Link href="https://github.com/anniezhe/cdc_botulism">Centers for Disease Control and Prevention (CDC)'s Botulism Report from 1899 to 2017</Link></TableCell>
                        <TableCell>September 2024</TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell><Link href="https://github.com/anniezhe/cfpb_complaint_dataset">2022-2023 Consumer Financial Protection Bureau (CFPB) Complaint Report</Link></TableCell>
                        <TableCell>December 2023</TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell><Link href="https://medium.com/@anniezhe0/using-random-forest-regression-model-on-the-mastercards-stock-data-itself-1a069ad9934a">Using Random Forest Regression Model on the Mastercard’s Stock Data Itself</Link></TableCell>
                        <TableCell>April 2023</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="skills" title="Skills + Certificates">
              <Card style={{border: '1.5px solid #F09600'}}>
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
                        <TableCell>{ }</TableCell>
                        <TableCell>Tableau</TableCell>
                      </TableRow>
                      <TableRow key="6">
                        <TableCell>{ }</TableCell>
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
                    <Link href="https://www.credly.com/badges/36373614-98a6-41e3-afe9-97cc427d2027/public_url">
                      <Card className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                          <p className="text-tiny uppercase font-bold">December 2023</p>
                          <h4 className="font-bold text-medium">Google Data Analytics Professional Certificate</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                          <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={GoogleAnalyticsCert.src}
                            width={270}
                          />
                        </CardBody>
                      </Card>
                    </Link>
                    <Link href="https://www.credly.com/badges/de0badae-7f24-4ca0-8e22-4f51271250c0/public_url">
                      <Card className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                          <p className="text-tiny uppercase font-bold">February 2024</p>
                          <h4 className="font-bold text-medium">IBM Machine Learning Specialist - Associate</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                          <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={IBMDataAICert.src}
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
        <div className="mt-8 ">
          <h1 className={title()}>Interested in connecting with me?</h1>
          <br />
          <br />
          <Card>
          <CardBody>
            <CalendlyEmbed url="https://calendly.com/anniezhe0/30min" />
          </CardBody>
        </Card>
        </div>
        
      </section>
    </DefaultLayout>
  );
}
