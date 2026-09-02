import { IconType } from "react-icons";
import {
  RiCodeSSlashLine,
  RiCompass3Line,
  RiDownloadCloud2Line,
  RiLightbulbLine,
  RiPaletteLine,
  RiRocketLine,
  RiTerminalBoxLine,
} from "react-icons/ri";

export interface LearningStep {
  id: string;
  stepNumber: string;
  title: string;
  category: "Architecture" | "CI/CD" | "Design System" | "CSS & Tailwind" | "React & Logic";
  icon: IconType;
  description: string;
  details: string[];
  keyTakeaway?: string;
  codeSnippet?: string;
  tags: string[];
}

export const learningSteps: LearningStep[] = [
  {
    id: "initialisation",
    stepNumber: "01",
    title: "Initialisation & Pages Router",
    category: "Architecture",
    icon: RiRocketLine,
    description: "Prise en main de Next.js et compréhension de l'arborescence du Pages Router.",
    details: [
      "Initialisation avec `npx create-next-app@latest --no-app` pour utiliser le dossier `pages/` au lieu de `app/`.",
      "Nettoyage de la structure de base (global.css et index.tsx).",
      "Configuration de l'exportation statique `output: 'export'` dans `next.config.ts` pour générer le dossier `out/`."
    ],
    tags: ["Next.js 16", "TypeScript", "Pages Router"],
  },
  {
    id: "firebase",
    stepNumber: "02",
    title: "Intégration Firebase & CI/CD",
    category: "CI/CD",
    icon: RiDownloadCloud2Line,
    description: "Configuration de Firebase Hosting pour le déploiement continu.",
    details: [
      "Création du projet Web sur Firebase Console et association au répertoire.",
      "Mise en place du script d'automatisation build + déploiement en une seule commande.",
      "Pratique des flux Git, GitHub et découverte de l'écosystème GitLab."
    ],
    tags: ["Firebase", "CI/CD", "Git & GitHub"],
  },
  {
    id: "design-system",
    stepNumber: "03",
    title: "Conception du Design System",
    category: "Design System",
    icon: RiPaletteLine,
    description: "Création des atomes fondateurs du projet (Typographies, Boutons, Avatars, Spinners).",
    details: [
      "Apprentissage des interfaces et types stricts en TypeScript.",
      "Exploration et utilisation de la librairie `clsx` pour combiner les classes CSS dynamiquement.",
      "Déclinaison des variantes de boutons (Accent, Secondary, Outline, Disabled, Icon, Loading)."
    ],
    tags: ["Atomic Design", "clsx", "TypeScript"],
  },
  {
    id: "tailwind-surcharge",
    stepNumber: "04",
    title: "Surcharge Tailwind CSS v4 & Utilitaires",
    category: "CSS & Tailwind",
    icon: RiCodeSSlashLine,
    description: "Compréhension profonde des surcharges Tailwind et des évolutions de la version v4.",
    details: [
      "Adaptation aux nouveautés de Tailwind v4 (`@import 'tailwindcss';` et la directive `@theme`).",
      "Surcharge propre des styles globaux et réutilisation des jetons de couleurs.",
      "Intégration de la librairie d'icônes `react-icons`."
    ],
    keyTakeaway: "💡 Mon retour d'expérience : C'est pratique de poser des questions aux IA, mais rien ne remplace la lecture de la documentation officielle, en particulier lors des transitions de version majeure comme Tailwind v3 -> v4 !",
    tags: ["Tailwind CSS v4", "@theme", "React Icons"],
  },
  {
    id: "navigation-dynamique",
    stepNumber: "05",
    title: "Navigation Dynamique & useRouter",
    category: "React & Logic",
    icon: RiCompass3Line,
    description: "Création d'une barre de navigation réactive qui met en valeur la page active.",
    details: [
      "Utilisation du hook `useRouter` pour comparer `router.pathname` avec les liens.",
      "Création du composant `<ActiveLink />` pour appliquer un style visuel distinctif sur la route courante.",
      "Ajout de transitions fluides et réutilisables dans les classes CSS globales (`transition: all 0.3s ease-in-out`)."
    ],
    codeSnippet: `const isActive = router.pathname === href;
<Link href={href} className={clsx(isActive && "text-primary font-medium")}>
  {children}
</Link>`,
    tags: ["useRouter", "ActiveLink", "CSS Transitions"],
  },
  {
    id: "footer-typage",
    stepNumber: "06",
    title: "Footer & Typage des Données",
    category: "React & Logic",
    icon: RiTerminalBoxLine,
    description: "Structuration et typage strict des listes de liens et données de navigation.",
    details: [
      "Typage fort des objets de liens (`LinkType`, `AppLinks`, `FooterLinks`) pour éviter les chaînes arbitraires.",
      "Rendu de listes dynamiques par mapping (`.map()`).",
      "Remplacement des clés volatiles par des clés uniques stables pour préserver les performances de réconciliation du DOM React."
    ],
    tags: ["TypeScript Interfaces", "React Keys", "Clean Code"],
  },
];
