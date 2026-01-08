import { Seo } from "@/ui/components/seo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spiner } from "@/ui/design-system/spiner/spiner";
import { Typography } from "@/ui/design-system/typography/typography";
import { Geist, Geist_Mono } from "next/font/google";
import { RiShieldUserLine, RiUser6Fill } from "react-icons/ri";

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
      <div className="max-w-6xl py-10 mx-auto space-y-5">

        {/* Typography */}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Typography
          </Typography>
          <div className="flex flex-col gap-2 p-5 border border-gray-400 divide-y-2 divide-gray-400 rounded">
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Display
              </Typography>
              <Typography variant="display">
                Nothing is impossible
              </Typography>
            </div>
            <div className="pt-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H1
              </Typography>
              <Typography variant="h1">
                Nothing is impossible, the word itself says "I'm possible"!
              </Typography>
            </div>
            <div className="pt-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H2
              </Typography>
              <Typography variant="h2">
                Nothing is impossible, the word itself says "I'm possible"!
              </Typography>
            </div>
            <div className="pt-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H3
              </Typography>
              <Typography variant="h3">
                Nothing is impossible, the word itself says "I'm possible"!
              </Typography>
            </div>
            <div className="pt-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H4
              </Typography>
              <Typography variant="h4">
                Nothing is impossible, the word itself says "I'm possible"!
              </Typography>
            </div>
            <div className="pt-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H5
              </Typography>
              <Typography variant="h5">
                Nothing is impossible, the word itself says "I'm possible"!
              </Typography>
            </div>
            <div className="pt-5 space-y-2">
              <Typography variant="lead" weight="medium">
                Lead
              </Typography>
              <Typography variant="lead">
                Nothing is impossible, the word itself says "I'm possible"!
              </Typography>
            </div>
            <div className="pt-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Subheading
              </Typography>
              <Typography variant="body-lg">
                Nothing is impossible, the word itself says "I'm possible"!
              </Typography>
            </div>
            <div className="pt-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Subheading
              </Typography>
              <Typography variant="body-base">
                Nothing is impossible, the word itself says "I'm possible"!
              </Typography>
            </div>
            <div className="pt-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Subheading
              </Typography>
              <Typography variant="body-sm">
                Nothing is impossible, the word itself says "I'm possible"!
              </Typography>
            </div>

            <div className="flex gap-8 p-5 border border-gray-400 divide-x-2 divide-gray-400 rounded">
              <div className="pr-5">
                <Typography variant="caption3" weight="medium">
                  caption1
                </Typography>
                <Typography variant="caption1" weight="regular">
                  Regular
                </Typography>
                <Typography variant="caption1" weight="medium">
                  Medium
                </Typography>
              </div>
              <div className="pr-5">
                <Typography variant="caption3" weight="medium">
                  caption2
                </Typography>
                <Typography variant="caption2" weight="regular">
                  Regular
                </Typography>
                <Typography variant="caption2" weight="medium">
                  Medium
                </Typography>
              </div>
              <div className="pr-5">
                <Typography variant="caption3" weight="medium">
                  caption3
                </Typography>
                <Typography variant="caption3" weight="regular">
                  Regular
                </Typography>
                <Typography variant="caption3" weight="medium">
                  Medium
                </Typography>
              </div>
              <div className="pl-5">
                <Typography variant="caption3" weight="medium">
                  caption4
                </Typography>
                <Typography variant="caption4" weight="regular">
                  Regular
                </Typography>
                <Typography variant="caption4" weight="medium">
                  Medium
                </Typography>
              </div>


            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Buttons
          </Typography>

          <div className="flex flex-col gap-2 p-5 border border-gray-400 divide-y-2 divide-gray-400 rounded">
            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Small
              </Typography>
              <div className="flex items-center gap-2 p-2">
                <Button size="small" isLoading variant="accent">
                  Accent
                </Button>
                <Button size="small" isLoading variant="accent" icon={{ icon: RiShieldUserLine }}>
                  Accent
                </Button>
                <Button size="small" variant="secondary" isLoading>
                  Secondary
                </Button>
                <Button size="small" isLoading variant="ico" icon={{ icon: RiShieldUserLine }} />
                <Button size="small" isLoading variant="ico" iconTheme="secondary" icon={{ icon: RiShieldUserLine }} />
                <Button size="small" isLoading variant="ico" iconTheme="gray" icon={{ icon: RiShieldUserLine }} />
                <Button size="small" variant="outline" isLoading>
                  Outline
                </Button>
                <Button size="small" variant="disabled" isLoading>
                  Disabled
                </Button>
              </div>
              <div className="flex items-center gap-2 p-2 border-gray-400">
                <Button size="small" variant="accent">
                  Accent
                </Button>
                <Button size="small" variant="accent" icon={{ icon: RiShieldUserLine }}>
                  Accent
                </Button>
                <Button size="small" variant="secondary">
                  Secondary
                </Button>
                <Button size="small" variant="ico" icon={{ icon: RiShieldUserLine }} />
                <Button size="small" variant="ico" iconTheme="secondary" icon={{ icon: RiShieldUserLine }} />
                <Button size="small" variant="ico" iconTheme="gray" icon={{ icon: RiShieldUserLine }} />
                <Button size="small" variant="outline">
                  Outline
                </Button>
                <Button size="small" variant="disabled">
                  Disabled
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                medium
              </Typography>
              <div className="flex items-center gap-2 p-2">
                <Button size="medium" isLoading variant="accent">
                  Accent
                </Button>
                <Button size="medium" isLoading variant="accent" icon={{ icon: RiShieldUserLine }}>
                  Accent
                </Button>
                <Button size="medium" variant="secondary" isLoading>
                  Secondary
                </Button>
                <Button size="medium" isLoading variant="ico" icon={{ icon: RiShieldUserLine }} />
                <Button size="medium" isLoading variant="ico" iconTheme="secondary" icon={{ icon: RiShieldUserLine }} />
                <Button size="medium" isLoading variant="ico" iconTheme="gray" icon={{ icon: RiShieldUserLine }} />
                <Button size="medium" variant="outline" isLoading>
                  Outline
                </Button>
                <Button size="medium" variant="disabled" isLoading>
                  Disabled
                </Button>
              </div>
              <div className="flex items-center gap-2 p-2 border-gray-400">
                <Button size="medium" variant="accent">
                  Accent
                </Button>
                <Button size="medium" variant="accent" icon={{ icon: RiShieldUserLine }}>
                  Accent
                </Button>
                <Button size="medium" variant="secondary">
                  Secondary
                </Button>
                <Button size="medium" variant="ico" icon={{ icon: RiShieldUserLine }} />
                <Button size="medium" variant="ico" iconTheme="secondary" icon={{ icon: RiShieldUserLine }} />
                <Button size="medium" variant="ico" iconTheme="gray" icon={{ icon: RiShieldUserLine }} />
                <Button size="medium" variant="outline">
                  Outline
                </Button>
                <Button size="medium" variant="disabled">
                  Disabled
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                large
              </Typography>
              <div className="flex items-center gap-2 p-2">
                <Button size="large" isLoading variant="accent">
                  Accent
                </Button>
                <Button size="large" isLoading variant="accent" icon={{ icon: RiShieldUserLine }}>
                  Accent
                </Button>
                <Button size="large" variant="secondary" isLoading>
                  Secondary
                </Button>
                <Button size="large" isLoading variant="ico" icon={{ icon: RiShieldUserLine }} />
                <Button size="large" isLoading variant="ico" iconTheme="secondary" icon={{ icon: RiShieldUserLine }} />
                <Button size="large" isLoading variant="ico" iconTheme="gray" icon={{ icon: RiShieldUserLine }} />
                <Button size="large" variant="outline" isLoading>
                  Outline
                </Button>
                <Button size="large" variant="disabled" isLoading>
                  Disabled
                </Button>
              </div>
              <div className="flex items-center gap-2 p-2 border-gray-400">
                <Button size="large" variant="accent">
                  Accent
                </Button>
                <Button size="large" variant="accent" icon={{ icon: RiShieldUserLine }}>
                  Accent
                </Button>
                <Button size="large" variant="secondary">
                  Secondary
                </Button>
                <Button size="large" variant="ico" icon={{ icon: RiShieldUserLine }} />
                <Button size="large" variant="ico" iconTheme="secondary" icon={{ icon: RiShieldUserLine }} />
                <Button size="large" variant="ico" iconTheme="gray" icon={{ icon: RiShieldUserLine }} />
                <Button size="large" variant="outline">
                  Outline
                </Button>
                <Button size="large" variant="disabled">
                  Disabled
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Logos, Avatar and Spinner */}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Logos, Avatar and Spinner
          </Typography>
          <div className="flex flex-col gap-5 p-5 border border-gray-400 rounded">
            <div className="flex items-start gap-7">
              {/* Spinner */}
              <div className="space-y-2">
                <Typography variant="caption2" weight="medium">
                  Spinner
                </Typography>
                <div className="flex items-center gap-2 p-5 border border-gray-400">
                  <Spiner size="small" />
                  <Spiner />
                  <Spiner size="large" />
                </div>
              </div>
              {/* Avatar */}
              <div className="space-y-2">
                <Typography variant="caption2" weight="medium">
                  Avatar
                </Typography>
                <div className="flex items-center gap-2 p-5 border border-gray-400">
                  <Avatar size="small" src="/assets/images/daniel-lincoln-pe-X2NUwVQo-unsplash.png" alt="Daniel profile phot"/>
                  <Avatar src="/assets/images/daniel-lincoln-pe-X2NUwVQo-unsplash.png" alt="Daniel profile phot"/>
                  <Avatar size="large" src="/assets/images/austin-neill-hgO1wFPXl3I-unsplash.jpg" alt="Daniel profile phot"/>
                </div>
              </div>
              {/* Logo */}
              <div className="space-y-2">
                <Typography variant="caption2" weight="medium">
                  Logo
                </Typography>
                <div className="flex items-center gap-2 p-5 border border-gray-400">
                  <Logo size="very-small" />
                  <Logo size="small" />
                  <Logo size="medium" />
                  <Logo size="large" />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

    </>)
}
