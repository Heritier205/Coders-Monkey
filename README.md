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

## 📚 Surcharge des classes Tailwind

J'étais étonné quand j'ai découvert que les classes Tailwind pouvaient être surchargées par l'utilisateur. 
C'était en fait mon gros souci avec Tailwind car je ne savais pas qu'un tel truc était possible. 
Du coup j'ai découvert comment lire la doc de Tailwind pour faire les autres surcharges dans le futur.

- **Si j'ai un conseil à donner** : C'est bien et plus rapide de demander certaines choses à l'IA mais parfois il est préférable de lire la documentation de l'outil, surtout quand c'est un outil qui évolue.

    > Dans mon cas, le tutoriel utilise la `V3` de `Tailwind` alors que actuellement on est sur la `V4` et carrément beaucoup de choses ont changé ce qui m'a fait perdre un peu de temps avec Copilot jusqu'à ce que je ne décide d'aller plutôt lire la docs de Tailwind `4.x.x` (en tout cas je m'en suis sorti) 

- On a continué après les Typography par les types de boutons du système à savoir les boutons avec du `texte simple`, `icon` puis `texte et icon` avec chacun ses variants propres.
    
    > Cette partie nous a fait découvrir la librairie `react-icons` installée avec la commande :
    ```bash 
    npm i react-icons
    ```
    Bien sûr il faut visiter le site pour voir le nom des divers icons.

## 🧭 Création de la barre de navigation

Une fois tout cela fait, on est passé à la création de notre barre de navigation qui permettra à l'utilisateur de naviguer sur les différentes pages du site facilement.

- Dans cette partie, j'ai découvert comment passer par un moyen plus facile grâce à React pour créer les liens qui restent dans la barre de navigation. Car il ne suffit pas juste d'avoir des liens mais faut aussi qu'ils soient dynamiques pour indiquer à l'utilisateur sur quelle page il se trouve en donnant un petit style au lien correspondant à la page actuelle. Cela nous a poussé à créer un nouvel objet de lien avec de la logique.

    > Nous avions donc découvert cet objet de React qui s'appelle `useRouter` qui permet de trouver des informations concernant la page active comme par exemple le chemin à travers `router.pathname`. Du coup on fait la comparaison entre l'objet link de navbar pour voir si les deux URL sont la même afin d'appliquer le style.
    
    > Nous avons dû ajouter encore une modification à notre `global.css` de telle sorte que tous les liens ou objets qui seront classés `animate` aient un temps de transition définis :
    ```css
    .animate, a, a:hover, Button {
        transition: all 0.3s ease-in-out;
    }
    ``` 
    
    > Là on a appris aussi que c'était bien de passer nos classes directement au niveau de la propriété CSS car au moment de définir que tous les liens du système changent de couleur au hover, on avait besoin de reprendre le code couleur primary de tout notre système mais on a vu que non ! On peut juste mettre dans le CSS comme cela :
    ```css
    a:hover {
        @apply text-primary; /* pour appliquer directement une classe */
    }
    ``` 

## 🦶 Implémentation du footer

Ici on n'a pas fait grand chose que d'utiliser les objets préconçus comme liens et Typo pour le footer. Mais Attention !! C'est ici que nous avons fait plus de logique jusqu'à là :

- Nous avons découvert comment on peut typer les éléments afin d'éviter les valeurs arbitraires dans le système et le fait de se répéter, et du coup faciliter la maintenabilité de notre code.

- Nous avons découvert comment boucler (`mapping`) sur les listes de données pour éviter évidemment de se répéter.

    > Avec cette histoire de mapping on a découvert la bibliothèque `uuidv4` qui permet de donner une `key` unique auto-générée à nos objets créés par les mappings car sans les keys React nous engueule.
    
    > Ici on a vu comment la comparaison de string arbitraire nous causerait des erreurs et comment les éviter en typant bien sur nos expressions ou valeurs ayant trait à des mots dans le dossier `lib` comme pour les types de `liens`.

---

> On continue l'aventure ...