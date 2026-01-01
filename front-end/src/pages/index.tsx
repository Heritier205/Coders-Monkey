import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { Geist, Geist_Mono } from "next/font/google";
import { RiUser6Fill } from "react-icons/ri";


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
        <Button icon={{icon: RiUser6Fill}} size="small">Accent</Button>
        <Button icon={{icon: RiUser6Fill}} iconPosition="left" size="small" variant="secondary">Secondary</Button>
        <Button size="small" variant="outline">Accent</Button>
        <Button size="small" variant="disabled" disabled>
          Accent
        </Button>
        <Button  size="small" variant="ico" icon={{icon : RiUser6Fill}}>Icon</Button>
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button  >Accent</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Accent</Button>
        <Button variant="disabled" disabled>
          Accent
        </Button>
        <Button iconTheme="gray" variant="ico" icon={{icon : RiUser6Fill}}>Icon</Button>
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button size="large">Accent</Button>
        <Button size="large" variant="secondary">Secondary</Button>
        <Button size="large" variant="outline">Accent</Button>
        <Button size="large" variant="disabled" disabled>
          Accent
        </Button> 
        <Button iconTheme="secondary" size="large" variant="ico" icon={{icon : RiUser6Fill}}>Icon</Button>
      </div> 
    </>
  );
}
