import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { ActiveLink } from "./active-links";
import { FooterLinks } from "@/types/app-links";
import { footerLinks } from "./app-links";
import { LinkTypes } from "@/lib/link-type";
import { SocialNetworkButtons } from "./social-network-buttons";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerNavigationList = footerLinks.map((coloneLinks) => (
        <FooterLink key={coloneLinks.label} data={coloneLinks}/>
    ));

    return (
        <div className="bg-gray">
            <Container className="flex justify-between pt-16">
                <div className="flex flex-col items-center gap-1">
                    <Typography
                        variant="caption1"
                        theme="white"
                        weight="medium"
                    >
                        Formations gratuites
                    </Typography>
                    <Typography
                        variant="caption3"
                        theme="gray"
                    >
                        Abonne-toi à la chaîne
                    </Typography>
                    <a href="https://youtube.com/@remotemonkey" target="_blank" rel="noreferrer">
                        <Image
                            src="/assets/svg/YTB.svg"
                            width={229}
                            height={216}
                            alt="Remote Monkeys | Youtube"
                        />
                    </a>
                </div>
                <div className="flex gap-7">
                    {footerNavigationList}
                </div>
            </Container>
            <Container className="pt-9 pb-11 space-y-11">
                <hr className="border-gray-800" />
                <div className="flex items-center justify-between">
                    <Typography
                        variant="caption4"
                        theme="gray"
                    >Copyright {currentYear} | Propulsed by
                        <a href="https://youtube.com/@remotemonkey" target="_blank" rel="noreferrer"> Arnaud Desportes </a>
                        - Remote monkey SASU
                    </Typography>
                    <div>
                        <SocialNetworkButtons theme="gray"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

interface FooterLinkProps {
    data: FooterLinks;
}

const FooterLink = ({ data }: FooterLinkProps) => {
    const linkList = data.links.map((link) => (
        <div key={link.label}>
            {link.type === LinkTypes.INTERNAL &&
                <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
            }

            {link.type === LinkTypes.EXTERNAL &&
                <a
                    href={link.baseUrl}
                    target="_blank"
                    rel="noreferrer"
                >{link.label}</a>
            }
        </div>
    ));

    return (
        <div className="min-w-47.5">
            <Typography
                theme="white"
                variant="caption2"
                weight="medium"
                className="pb-5">
                {data.label}
            </Typography>
            <Typography
                theme="gray"
                variant="caption3"
                className="space-y-4"
                component="div"
            >
                {linkList}
            </Typography>
        </div>
    );
};