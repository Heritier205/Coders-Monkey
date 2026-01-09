import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spiner } from "@/ui/design-system/spiner/spiner";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiShieldUserLine, RiUser6Fill } from "react-icons/ri";



export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />
      <Navigation />
    </>)
}
