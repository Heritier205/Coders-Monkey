# 🐒 Coders Monkeys

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=nextdotjs" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=for-the-badge&logo=firebase" alt="Firebase" />
</p>

> **Coders Monkeys** est une application web complète développée avec **Next.js**, **TypeScript** et **Tailwind CSS v4**. Ce projet met en valeur la conception d'un **UI Design System réutilisable**, l'implémentation d'un routage dynamique et la mise en place d'une architecture frontend propre et maintenable.

🌐 **Démo en ligne** : [https://coders-monkeys-ff567.firebaseapp.com/](https://coders-monkeys-ff567.firebaseapp.com/)

---

## 🎯 Objectifs du Projet

- **Architecture & Clean Code** : Structurer une application Next.js avec une séparation claire des responsabilités (Atomes, Composants, Layouts, Types).
- **Design System sur-mesure** : Implémenter la méthodologie Atomic Design (Typographies, Boutons multi-variants, Avatars, Spinners).
- **Typage Strict (TypeScript)** : Éliminer les types `any` et sécuriser les contrats d'interfaces et d'événements.
- **Tailwind CSS v4 & Atomic Utility Styling** : Exploiter la directive `@theme` et les surcharges CSS avancées.
- **Intégration CI/CD & Déploiement** : Générer un export statique `output: export` et déployer automatiquement sur **Firebase Hosting**.

---

## 🏗️ Architecture du Projet

```text
codersMonkeys/
├── public/                 # Assets statiques (images, logos, SVG)
├── src/
│   ├── config/             # Configurations externes (Firebase)
│   ├── lib/                # Fonctions utilitaires, helpers & enums de types
│   ├── pages/              # Routes Next.js (index, design-system, _app, _document)
│   ├── styles/             # Styles globaux & tokens Tailwind CSS v4 (@theme)
│   ├── types/              # Interfaces et types TypeScript réutilisables
│   └── ui/
│       ├── components/     # Composants d'interface (Container, Navigation, Footer, SEO)
│       └── design-system/  # Atomes UI (Button, Typography, Spinner, Avatar, Logo)
├── firebase.json           # Configuration d'hébergement Firebase
├── next.config.ts          # Configuration Next.js (Static Export, React Compiler)
├── tsconfig.json           # Alias de chemins (@/*) & configuration TypeScript
└── README.md               # Documentation du projet
```

---

## 🚀 Démarrage Rapide

### Prérequis
- **Node.js** v18+ 
- **npm** ou **yarn** / **pnpm**

### Installation

```bash
# 1. Cloner le projet
git clone https://github.com/Heritier205/Coders-Monkey.git
cd Coders-Monkey

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour visualiser le site.

### Build & Déploiement

```bash
# Générer l'export statique (dossier out/)
npm run build

# Déployer sur Firebase Hosting (nécessite Firebase CLI)
npx firebase deploy
```

---

## 🐒 Journal de Bord & Apprentissages Techniques

### 1. Initialisation & Structure Next.js
- Création avec `create-next-app` sans le répertoire `app/` pour maîtriser le routing par pages (`pages/`).
- Configuration de l'export statique dans `next.config.ts` via `output: "export"`.

### 2. Intégration de Firebase & CI/CD
- Association du projet à Firebase Hosting et automatisation du build avec la commande : `"build": "next build && firebase deploy"`.

### 3. Conception du Design System & TypeScript
- Implémentation de composants atoms sous `src/ui/design-system/`.
- Gestion des classes CSS conditionnelles et dynamiques avec la librairie `clsx`.
- Typage strict des props avec interfaces TypeScript (`IconProps`, `AppLinks`, `LinkType`).

### 4. Maîtrise de Tailwind CSS v4
- Prise en main des nouveautés de Tailwind v4 (`@import "tailwindcss";` et bloc `@theme`).
- Apprentissage des surcharges CSS et de l'intégration directe des classes dans `globals.css` avec `@apply`.

### 5. Navigation Dynamique & Active Links
- Utilisation du hook `useRouter` de Next.js (`router.pathname`) pour détecter la route active et surligner dynamiquement l'élément de menu correspondant via un composant wrapper `<ActiveLink />`.

### 6. Rendu Réactif & Bonnes Pratiques React
- Remplacement des identifiants générés dynamiquement par des clés stables pour le rendu des tableaux (`.map(...)`), améliorant ainsi les performances de réconciliation du DOM de React.

---

## 👤 Auteur & Crédits

- **Développeur** : [Héritier](https://github.com/Heritier205)
- **Tutoriel & Inspiration** : Arnaud Desportes - *Remote Monkey SASU*