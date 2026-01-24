import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiStackFill, RiYoutubeFill } from "react-icons/ri";

const footterApplicationLinks: AppLinks[] = [
    {
        label: "Acceuil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projets",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Coders Monkeys",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Formations",
        baseUrl: "https://youtube.com/@remotemonkey",
        type: "external"
    },
]

const footerUsersLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Connexion",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Inscription",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "https://youtube.com/@remotemonkey",
        type: "internal"
    },
]

const footerInformationsLinks: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Contact",
        baseUrl: "https://youtube.com/@remotemonkey",
        type: "internal"
    },
]

export const footerSocialNetworksLinks: AppLinks[] = [
    {
        label: "Youtube",
        baseUrl: "https://youtube.com/@remotemonkey",
        type: "external",
        icon: RiYoutubeFill,
    },
    {
        label: "Linkedin",
        baseUrl: "/#",
        type: "external",
        icon: RiLinkedinFill
    },
    {
        label: "Stack",
        baseUrl: "/#",
        type: "external",
        icon: RiStackFill
    }
]


export const footerLinks = [
    {
        label: "App",
        links: footterApplicationLinks
    },
    {
        label: "Utilisateur",
        links: footerUsersLinks
    },
    {
        label: "Information",
        links: footerInformationsLinks
    },
    {
        label: "Reseaux",
        links: footerSocialNetworksLinks
    }
]