import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
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
      <div className="flex items-center gap-4 p-10">
        <Button size="small">Accent</Button>
        <Button size="small" variant="secondary">Secondary</Button>
        <Button size="small" variant="outline">Accent</Button>
        <Button size="small" variant="disabled" disabled>
          Accent
        </Button>
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button>Accent</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Accent</Button>
        <Button variant="disabled" disabled>
          Accent
        </Button>
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button size="large">Accent</Button>
        <Button size="large" variant="secondary">Secondary</Button>
        <Button size="large" variant="outline">Accent</Button>
        <Button size="large" variant="disabled" disabled>
          Accent
        </Button> 
      </div>
    </>
  );
}
