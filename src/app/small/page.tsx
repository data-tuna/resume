import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - Compact Version`,
  description: RESUME_DATA.summary,
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-icon.png",
    shortcut: "./favicon-16x16.png",
  },
};

export default function CompactPage() {
  return (
    <main className="container relative mx-auto overflow-auto p-2 md:p-6 print:p-4 small-font">
      <section className="mx-auto w-full max-w-2xl space-y-3 bg-white print:space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1">
            <h1 className="text-xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-xs text-foreground/80">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-foreground/80">
              <a
                className="inline-flex gap-x-1 align-baseline leading-none hover:underline"
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-0.5 font-mono text-sm text-foreground/80 print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-6"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-3" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-6"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-3" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-6"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-3" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-xs text-foreground/80 print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <Section className="py-0">
          <h2 className="text-lg font-bold">About</h2>
          <p className="text-pretty font-mono text-xs text-foreground/80">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section className="py-0">
          <h2 className="text-lg font-bold">Thesis</h2>
          <Card key="pubs" className="p-0">
            <CardContent className="p-2 text-xs text-foreground/80">
              <ul className="m-0 pl-4">
                {RESUME_DATA.publications.map((pub, index) => (
                  <li key={index} className="mt-0.5">
                    {pub}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Section>

        <Section className="py-0">
          <h2 className="text-lg font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school} className="mb-1">
                <CardHeader className="p-2 pb-0">
                  <div className="flex items-center justify-between gap-x-2 text-xs">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-xs tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-2 pt-1 text-xs text-foreground/80">{education.degree}</CardContent>
                <CardContent className="p-2 pt-0 text-xs">
                  {education.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section className="py-0">
          <h2 className="text-lg font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company} className="mb-1">
                <CardHeader className="p-2 pb-0">
                  <div className="flex items-center justify-between gap-x-2 text-xs">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link} target="_blank" rel="noopener noreferrer">
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1 text-foreground/80">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs py-0 px-1 h-4"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-xs tabular-nums text-gray-500">
                      {work.start} - {work?.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-xs font-semibold leading-none mt-1">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="p-2 pt-1 text-xs text-foreground/80">
                  <ul className="m-0 pl-4">
                    {work.descriptions.map((description) => (
                      <li key={description} className="mt-0.5">
                        {description}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section className="py-0">
          <h2 className="text-lg font-bold">Skills</h2>
          <div className="flex flex-wrap gap-0.5">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill} className="text-xs py-0 px-1 h-4">{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section className="py-0">
          <h2 className="text-lg font-bold">Projects & Awards</h2>
          <div className="-mx-1 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  className="p-2"
                />
              );
            })}
          </div>
        </Section>

        <Section className="py-0">
          <h2 className="text-lg font-bold">Leadership</h2>
          {RESUME_DATA.volunteering.map((volunteer) => {
            return (
              <Card key={volunteer.organization} className="mb-1">
                <CardHeader className="p-2 pb-0">
                  <div className="flex items-center justify-between gap-x-2 text-xs">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      {volunteer.organization}
                    </h3>
                    <div className="text-xs tabular-nums text-gray-500">
                      {volunteer.start} - {volunteer?.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-xs font-semibold leading-none mt-1">
                    {volunteer.title}
                  </h4>
                </CardHeader>
                <CardContent className="p-2 pt-1 text-xs text-foreground/80">
                  <ul className="m-0 pl-4">
                    {volunteer.descriptions.map((description) => (
                      <li key={description} className="mt-0.5">
                        {description}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </Section>
      </section>

      <CommandMenu
        links={[
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
      
    </main>
  );
}