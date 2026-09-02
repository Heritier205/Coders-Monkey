import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { ActiveLink } from "./active-links";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className="border-b border-gray-400 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <Container className="flex justify-between items-center py-3 gap-7">
        <ActiveLink href="/">
          <div className="flex gap-3 items-center">
            <Logo size="small" />
            <div className="flex flex-col">
              <div className="text-gray font-extrabold text-[22px] leading-tight">
                Coders Monkeys
              </div>
              <Typography
                variant="caption4"
                theme="gray"
                component="span"
              >
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
            <ActiveLink href="/">Accueil</ActiveLink>
            <ActiveLink href="/design-system">Design system</ActiveLink>
            <ActiveLink href="/#apprentissages">Apprentissages</ActiveLink>
            <a href="https://youtube.com/@remotemonkey" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              Tutoriel YouTube
            </a>
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
  );
};