# Coders Monkeys

> Application web complète développée avec Next.js pour pratiquer le routing, le styling et la gestion de composants.

---

## 🎯 Objectifs du projet

L’objectif principal de ce projet était de :

- comprendre le fonctionnement de Next.js  
- pratiquer TypeScript  
- structurer un projet frontend proprement  
- pratiquer Tailwind CSS  
- utiliser Git, GitHub et GitLab correctement  

---

## 🛠️ Technologies utilisées (liste évolutive)

- Next.js  
- React  
- TypeScript  
- CSS / Tailwind CSS  
- Git, GitHub & GitLab  

---

# 🐒 Mes aventures avec ce projet

## 🚀 Initialisation du projet

L'initialisation d'un projet **Next.js** se fait avec la commande :

```bash
npx create-next-app@latest front-end --no-app
```

- Le flag --no-app signifie que le projet ne contiendra pas le dossier classique app/.
À la place, Next.js  génère un dossier pages/ pour gérer les routes.

- Après l’exécution de la commande, plusieurs questions apparaissent.
On peut répondre Y ou N selon les préférences du projet.

- Une fois le projet créé, nous avons nettoyé la structure en vidant certains fichiers comme global.css et index.tsx, puis en créant les dossiers nécessaires.

## 🔥 Intégration de Firebase
- Nous avons créé un compte Firebase, puis une application web.
Firebase fournit ensuite des commandes à exécuter dans le projet pour l’initialisation.

- Avant le déploiement, nous avons configuré Next.js  pour générer un dossier out/ contenant la version statique du site (HTML, CSS, JS).

    Dans next.config.ts :
    ```ts
    output: "export" // génère automatiquement le dossier "out"
    ```

- Ensuite, nous avons modifié le script build dans package.json pour déployer automatiquement sur Firebase après le build :

    ```json
    "build": "next build && firebase deploy"
    ```
- Le projet a été poussé régulièrement sur GitHub et GitLab. Première expérience avec GitLab — très similaire à GitHub.

## 🎨 Introduction au Design System
Nous sommes ensuite passés au développement du Design System, qui consiste à créer les composants fondamentaux du projet, comme les typographies (Typography.tsx), les boutons, etc.

- C’est à ce moment que j’ai découvert les interfaces et les types en TypeScript.

- J’ai également découvert la librairie clsx, qui permet de gérer les classes CSS de manière dynamique et flexible.
Ma curiosité m’a poussé à explorer des variantes comme cn et twMerge.

    Installation :

    ```bash
    npm i clsx
    ```

## Surcharge des classes tailwind
J'etais etonné quand j'ai decouvert que les classe tailwind pouvaient etre surchargé par l'utilisateur 
c'etait en fait mon gros soucis avec tailwind car je ne savais pas qu'un tel truc etait possible 
du coup j'ai decouvert comment lire la doc de tailwind pour faire les autres surcharge dans le futur 
- SI j'ai conseil a donner `C'est bien et plus rapide de demander certaines choses a l'IA mais parfois il es preferable de lire la documentation de l'outils surtout quand c'est un outils qui evolu`

    > dans mon cas le tutoriel utilise la `V3` de `tailwind` alors que actu on est sur la `V4` et carrement beaucoup de choses on changé ce qui m'a fait perdre un peu de temps avec copilot jusqu'a ce que je ne decide d'aller plutot lire la docs de tailwind `4.x.x` (en tout cas je m'en suis sortis) 

- On a continue apres les Typography par les types de bouttons du systeme a savoir les bouttons avec du `texte simple` , `icon` puis `texte et icon` avec chacun ses variants propre 
    >cette partie nous a fait decouvrir la librairie `react-icons` installé avec la commande 
    ```bash 
        npm i react-icons
    ```
    bien sur il faut visiter le site pour voir le nom des divers icons

> On continue l'aventure ...