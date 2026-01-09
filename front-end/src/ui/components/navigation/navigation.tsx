import { Logo } from "@/ui/design-system/logo/logo"
import { Container } from "../container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import { Button } from "@/ui/design-system/button/button"
import { ActiveLink } from "./active-links"

interface Props { }

export const Navigation = ({ }: Props) => {
    return (
        <>
            <div className="py-1.5namename border-b-2 border-gray-400">
                <Container className="flex justify-between items-center py-2 gap-7">
                    <ActiveLink href="/">

                        <div className="flex gap-2.5 items-center">
                            <Logo size="small" />
                            <div className="flex flex-col ">
                                <div className="text-gray font-extrabold text-[24px]">
                                    Coders Monkeys
                                </div>
                                <Typography
                                    variant="caption4"
                                    theme="gray"
                                    component="span">
                                    Trouve de l'inspiration & reçois des feedbacks !
                                </Typography>
                            </div>
                        </div>
                    </ActiveLink>
                    <div className="flex gap-7 items-center">
                        <Typography
                            variant="caption3"
                            component="div"
                            className="flex items-center gap-7"
                        >
                            <ActiveLink href="/design-system">Design system</ActiveLink>
                            <ActiveLink href="/projets">Projets</ActiveLink>
                            <ActiveLink href="/formation">Formation</ActiveLink>
                            <ActiveLink href="/contact">Contact</ActiveLink>
                        </Typography>

                        <div className="flex items-center gap-2">
                            <Button size="small">Connexion</Button>
                            <Button size="small" variant="secondary">
                                Rejoindre
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}