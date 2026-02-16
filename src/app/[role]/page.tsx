import { CompactResume } from "@/components/compact-resume";
import { RESUME_VERSIONS } from "@/data/resume-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: { role: string };
}

export async function generateStaticParams() {
  return Object.keys(RESUME_VERSIONS).map((role) => ({
    role,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const role = params.role as keyof typeof RESUME_VERSIONS;
  const data = RESUME_VERSIONS[role];

  if (!data) {
    return {};
  }

  return {
    title: `Ata_Tuna_Resume_${role.toUpperCase()}`,
    description: data.summaryPlainText,
    icons: {
      icon: "../favicon.ico",
      apple: "../apple-icon.png",
      shortcut: "../favicon-16x16.png",
    },
  };
}

export default function RolePage({ params }: Props) {
  const role = params.role as keyof typeof RESUME_VERSIONS;
  const data = RESUME_VERSIONS[role];

  if (!data) {
    notFound();
  }

  return <CompactResume data={data} />;
}
