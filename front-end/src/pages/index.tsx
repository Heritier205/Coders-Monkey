import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />
      <div className="space-y-4">
        <Typography variant="h1" component="h1">
          Coders Monkeys web app
        </Typography>
      </div>
    </>
  );
}
