import { Container } from "@/ui/components/container/container";
import { Footer } from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";
import { Journal } from "@/ui/components/journal/journal";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import {
  RiCodeSSlashLine,
  RiCompass3Line,
  RiDownloadCloud2Line,
  RiFlashlightLine,
  RiGithubFill,
  RiRocketLine,
  RiShieldCheckLine,
} from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Seo
        title="Coders Monkeys - Communauté & Design System React Next.js"
        description="Plateforme web complète développée avec Next.js 16, TypeScript et Tailwind CSS v4 pour pratiquer le routing, le styling et le design system."
      />
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-white via-primary-200/20 to-white">
        {/* HERO SECTION */}
        <section className="py-20 border-b border-gray-400/50">
          <Container className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-200 text-primary border border-primary-300 text-sm font-medium animate-pulse">
              <RiRocketLine className="w-4 h-4" />
              <span>Bienvenue sur Coders Monkeys</span>
            </div>

            <div className="max-w-4xl space-y-4">
              <Typography variant="display" component="h1" className="text-gray leading-tight">
                Développe tes compétences React & Next.js avec des projets concrets
              </Typography>
              <Typography variant="lead" theme="gray" className="max-w-2xl mx-auto">
                Une application web moderne intégrant un <span className="text-primary font-semibold">Design System sur-mesure</span>, 
                du typage strict avec TypeScript et des composants réutilisables haut de gamme.
              </Typography>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button size="large" variant="accent" baseUrl="/design-system" icon={{ icon: RiFlashlightLine }} iconPosition="left">
                Explorer le Design System
              </Button>
              <Button size="large" variant="secondary" baseUrl="#apprentissages" icon={{ icon: RiCodeSSlashLine }} iconPosition="left">
                Voir mon Journal d'Apprentissages
              </Button>
            </div>

            {/* STATS BADGES */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 w-full max-w-4xl">
              <div className="p-6 bg-white rounded-xl border border-gray-400 shadow-sm flex flex-col items-center">
                <Typography variant="h2" className="text-primary font-bold">100%</Typography>
                <Typography variant="caption3" theme="gray">TypeScript strict</Typography>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-400 shadow-sm flex flex-col items-center">
                <Typography variant="h2" className="text-primary font-bold">Next 16</Typography>
                <Typography variant="caption3" theme="gray">Pages Router & Export</Typography>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-400 shadow-sm flex flex-col items-center">
                <Typography variant="h2" className="text-primary font-bold">Tailwind v4</Typography>
                <Typography variant="caption3" theme="gray">Atomic Styling System</Typography>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-400 shadow-sm flex flex-col items-center">
                <Typography variant="h2" className="text-primary font-bold">Firebase</Typography>
                <Typography variant="caption3" theme="gray">CI/CD & Hosting</Typography>
              </div>
            </div>
          </Container>
        </section>

        {/* FEATURES / HIGHLIGHTS SECTION */}
        <section className="py-20 bg-white">
          <Container className="space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <Typography variant="caption2" weight="medium" className="text-primary uppercase tracking-wider">
                Architecture du projet
              </Typography>
              <Typography variant="h1" component="h2">
                Conçu pour la qualité et la réutilisabilité
              </Typography>
              <Typography variant="body-base" theme="gray">
                Découvrez l'ensemble des modules et abstractions développés dans cette application.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-8 bg-gray-400/30 rounded-2xl border border-gray-400 space-y-4 hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                  <RiCodeSSlashLine size={24} />
                </div>
                <Typography variant="h3">Design System Moderne</Typography>
                <Typography variant="body-sm" theme="gray">
                  Création de composants typés (Typographies, Boutons, Spinners, Avatars) suivant la méthodologie Atomic Design.
                </Typography>
              </div>

              {/* Card 2 */}
              <div className="p-8 bg-gray-400/30 rounded-2xl border border-gray-400 space-y-4 hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center">
                  <RiCompass3Line size={24} />
                </div>
                <Typography variant="h3">Routing & Liens Dynamiques</Typography>
                <Typography variant="body-sm" theme="gray">
                  Gestion avancée des routes avec Next.js `useRouter`, liens actifs dynamiques et surcharges CSS adaptatives.
                </Typography>
              </div>

              {/* Card 3 */}
              <div className="p-8 bg-gray-400/30 rounded-2xl border border-gray-400 space-y-4 hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-800 text-white flex items-center justify-center">
                  <RiDownloadCloud2Line size={24} />
                </div>
                <Typography variant="h3">Déploiement Automatisé</Typography>
                <Typography variant="body-sm" theme="gray">
                  Configuration statique `output: export` combinée aux scripts Firebase Hosting pour un déploiement continu et fiable.
                </Typography>
              </div>
            </div>
          </Container>
        </section>

        {/* JOURNAL D'APPRENTISSAGE SECTION */}
        <Journal />

        {/* DESIGN SYSTEM SHOWCASE CARD */}
        <section className="py-16 bg-gray-400/20 border-t border-b border-gray-400">
          <Container className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-white rounded-3xl border border-gray-400 shadow-md">
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <RiShieldCheckLine size={20} />
                <span>Composants d'UI & Design Token</span>
              </div>
              <Typography variant="h2">Découvrez notre UI Design System</Typography>
              <Typography variant="body-base" theme="gray">
                Visualisez la documentation interactive du Design System avec toutes les déclinaisons de boutons, typographies, avatars et spinners.
              </Typography>
            </div>
            <div>
              <Button size="large" variant="accent" baseUrl="/design-system">
                Accéder au Design System
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
