import { Card, CardHeader, CardContent } from "@/components/compact_ui/card";
import { Badge_2 } from "@/components/compact_ui/badge_2";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/compact_ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/compact_ui/button";
import { ProjectCard } from "@/components/project-card";
import { ResumeData } from "@/data/resume-data";

interface CompactResumeProps {
  data: ResumeData;
}

export function CompactResume({ data }: CompactResumeProps) {
  const ThesisSection = () => (
    <Section className="py-0">
      <h2 className="text-base font-bold">Thesis</h2>
      <Card key="pubs" className="p-0">
        <CardContent className="p-1 text-xs text-foreground/80">
          <ul className="m-0 pl-0">
            {data.publications.map((pub, index) => (
              <li key={index} className="mt-0.5">
                {pub}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Section>
  );

  return (
    <main className="container relative mx-auto overflow-auto p-1 md:p-4 print:p-2 small-font">
      <section className="mx-auto w-full max-w-2xl space-y-2 bg-white print:space-y-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex-1 space-y-0.5">
            <h1 className="text-lg font-bold">{data.name}</h1>
            <p className="max-w-md text-pretty font-mono text-xs text-foreground/80">
              {data.about}
            </p>
            <div className="flex flex-wrap gap-x-3 text-xs text-foreground/80">
              <a
                className="inline-flex items-center gap-x-1 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <GlobeIcon className="size-3" />
                {data.location}
              </a>
              
              {data.contact.email && (
                <a href={`mailto:${data.contact.email}`} className="inline-flex items-center gap-x-1 hover:underline">
                  <MailIcon className="size-3" />
                  {data.contact.email}
                </a>
              )}
              
              {data.contact.tel && (
                <a href={`tel:${data.contact.tel}`} className="inline-flex items-center gap-x-1 hover:underline">
                  <PhoneIcon className="size-3" />
                  {data.contact.tel}
                </a>
              )}

              {data.contact.social.map((social) => (
                <a key={social.name} href={social.url} className="inline-flex items-center gap-x-1 hover:underline">
                  <social.icon className="size-3" />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <Section className="py-0">
          <h2 className="text-base font-bold">About</h2>
          <div className="text-pretty font-mono text-xs text-foreground/80">
            {data.summary}
          </div>
        </Section>

        <Section>
          <h2 className="text-base font-bold ">Work Experience</h2>
          {data.work.map((work) => {
            return (
              <div key={work.company}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base p-1">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <a className="hover:underline" href={work.link} target="_blank" rel="noopener noreferrer">
                          {work.company}
                        </a>

                        <span className="inline-flex gap-x-1 text-foreground/80">
                          {work.badges.map((badge_2) => (
                            <Badge_2
                              variant="secondary"
                              className="align-middle text-xs"
                              key={badge_2}
                            >
                              {badge_2}
                            </Badge_2>
                          ))}
                        </span>
                      </h3>
                      <div className="text-xs tabular-nums text-gray-500">
                        {work.start} - {work?.end ?? "Present"}
                      </div>
                    </div>

                    <h4 className="font-mono text-sm font-semibold leading-none p-1">
                      {work.title}
                    </h4>
                  </CardHeader>
                  <CardContent className="mt-2 text-xs text-foreground/80">
                    <ul>
                      {work.descriptions.map((description) => (
                        <li key={description} className="mt-1 p-1">
                          {description}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </Section>

        <ThesisSection />

        <Section className="py-0">
          <h2 className="text-base font-bold">Education</h2>
          {data.education.map((education) => {
            return (
              <Card key={education.school} className="mb-0.5">
                <CardHeader className="p-1 pb-0">
                  <div className="flex items-center justify-between gap-x-2 text-xs">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-xxs tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-1 pt-0.5 text-xs text-foreground/80">{education.degree}</CardContent>
                <CardContent className="p-1 pt-0 text-xs">
                  {education.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>


        <Section className="scroll-mb-16">
          <h2 className="text-base font-bold mb-1">Projects & Awards</h2>
          <div className="-mx-0 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
            {data.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
        
        <Section>
          <h2 className="text-base font-bold mb-1">ML Research & Modelling Skills</h2>
          <div className="flex flex-wrap gap-1">
            {data.skills.map((skill) => {
              return <Badge_2 key={skill}>{skill}</Badge_2>;
            })}
          </div>
        </Section>

        <Section className="py-0">
          <h2 className="text-base font-bold mb-1">Languages</h2>
          <div className="flex flex-wrap gap-1">
            {data.languages?.map((lang) => {
              return <Badge_2 key={lang}>{lang}</Badge_2>;
            })}
          </div>
        </Section>

        <Section className="py-0">
          <h2 className="text-base font-bold">Leadership</h2>
          {data.volunteering.map((volunteer) => {
            return (
              <Card key={volunteer.organization} className="mb-0.5">
                <CardHeader className="p-1 pb-0">
                  <div className="flex items-center justify-between gap-x-2 text-xs">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      {volunteer.organization}
                    </h3>
                    <div className="text-xxs tabular-nums text-gray-500">
                      {volunteer.start} - {volunteer?.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-xs font-semibold leading-none mt-0.5">
                    {volunteer.title}
                  </h4>
                </CardHeader>
                <CardContent className="p-1 pt-0.5 text-xs text-foreground/80">
                  <ul className="m-0 pl-0">
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
          ...data.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
      
    </main>
  );
}
