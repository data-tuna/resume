import { CompactResume } from "@/components/compact-resume";
import { RESUME_DATA } from "@/data/resume-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Ata_Tuna_Resume`,
  description: RESUME_DATA.summaryPlainText,
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-icon.png",
    shortcut: "./favicon-16x16.png",
  },
};

export default function CompactPage() {
  return <CompactResume data={RESUME_DATA} />;
}
