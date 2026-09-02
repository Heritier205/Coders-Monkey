// COMPONENTS
import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/navigation/footer";
import { Seo } from "@/ui/components/seo/seo";

// DESIGN SYSTEM 
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

// ICO
import { RiShieldUserLine } from "react-icons/ri";

export default function DesignSystem() {
    return (
        <>
            <Seo 
                title="Design System - Coders Monkeys" 
                description="Documentation des composants UI et jetons de design du système Coders Monkeys." 
            />
            <Navigation />

            <div className="bg-gray-400/20 py-10 border-b border-gray-400">
                <Container className="space-y-4">
                    <div className="inline-block px-3 py-1 bg-primary-200 text-primary text-xs font-semibold rounded-full">
                        Atomic Design Library
                    </div>
                    <Typography variant="h1" component="h1">
                        UI Design System
                    </Typography>
                    <Typography variant="body-base" theme="gray" className="max-w-2xl">
                        Ensemble de composants réutilisables, jetons typographiques et boutons construits pour harmoniser l'expérience utilisateur.
                    </Typography>
                </Container>
            </div>

            <Container className="space-y-16 py-12">

                {/* Typography */}
                <section className="space-y-4">
                    <div className="border-b border-gray-400 pb-3">
                        <Typography variant="h2" weight="medium">
                            1. Typographies
                        </Typography>
                        <Typography variant="caption3" theme="gray">
                            Variantes d'affichage textuel configurées dans global.css & Typography.tsx
                        </Typography>
                    </div>

                    <div className="flex flex-col gap-4 p-6 bg-white border border-gray-400 divide-y divide-gray-400 rounded-xl shadow-sm">
                        <div className="pb-4 space-y-1">
                            <Typography variant="caption4" theme="gray" weight="medium">Display</Typography>
                            <Typography variant="display">Nothing is impossible</Typography>
                        </div>
                        <div className="pt-4 space-y-1">
                            <Typography variant="caption4" theme="gray" weight="medium">H1</Typography>
                            <Typography variant="h1">Nothing is impossible, the word itself says "I'm possible"!</Typography>
                        </div>
                        <div className="pt-4 space-y-1">
                            <Typography variant="caption4" theme="gray" weight="medium">H2</Typography>
                            <Typography variant="h2">Nothing is impossible, the word itself says "I'm possible"!</Typography>
                        </div>
                        <div className="pt-4 space-y-1">
                            <Typography variant="caption4" theme="gray" weight="medium">H3</Typography>
                            <Typography variant="h3">Nothing is impossible, the word itself says "I'm possible"!</Typography>
                        </div>
                        <div className="pt-4 space-y-1">
                            <Typography variant="caption4" theme="gray" weight="medium">H4</Typography>
                            <Typography variant="h4">Nothing is impossible, the word itself says "I'm possible"!</Typography>
                        </div>
                        <div className="pt-4 space-y-1">
                            <Typography variant="caption4" theme="gray" weight="medium">H5</Typography>
                            <Typography variant="h5">Nothing is impossible, the word itself says "I'm possible"!</Typography>
                        </div>
                        <div className="pt-4 space-y-1">
                            <Typography variant="caption4" theme="gray" weight="medium">Lead</Typography>
                            <Typography variant="lead">Nothing is impossible, the word itself says "I'm possible"!</Typography>
                        </div>
                        <div className="pt-4 space-y-1">
                            <Typography variant="caption4" theme="gray" weight="medium">Body LG</Typography>
                            <Typography variant="body-lg">Nothing is impossible, the word itself says "I'm possible"!</Typography>
                        </div>
                        <div className="pt-4 space-y-1">
                            <Typography variant="caption4" theme="gray" weight="medium">Body Base</Typography>
                            <Typography variant="body-base">Nothing is impossible, the word itself says "I'm possible"!</Typography>
                        </div>
                        <div className="pt-4 space-y-1">
                            <Typography variant="caption4" theme="gray" weight="medium">Body SM</Typography>
                            <Typography variant="body-sm">Nothing is impossible, the word itself says "I'm possible"!</Typography>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                            <div className="space-y-1">
                                <Typography variant="caption4" theme="gray" weight="medium">Caption 1</Typography>
                                <Typography variant="caption1" weight="regular">Regular</Typography>
                                <Typography variant="caption1" weight="medium">Medium</Typography>
                            </div>
                            <div className="space-y-1">
                                <Typography variant="caption4" theme="gray" weight="medium">Caption 2</Typography>
                                <Typography variant="caption2" weight="regular">Regular</Typography>
                                <Typography variant="caption2" weight="medium">Medium</Typography>
                            </div>
                            <div className="space-y-1">
                                <Typography variant="caption4" theme="gray" weight="medium">Caption 3</Typography>
                                <Typography variant="caption3" weight="regular">Regular</Typography>
                                <Typography variant="caption3" weight="medium">Medium</Typography>
                            </div>
                            <div className="space-y-1">
                                <Typography variant="caption4" theme="gray" weight="medium">Caption 4</Typography>
                                <Typography variant="caption4" weight="regular">Regular</Typography>
                                <Typography variant="caption4" weight="medium">Medium</Typography>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Buttons */}
                <section className="space-y-4">
                    <div className="border-b border-gray-400 pb-3">
                        <Typography variant="h2" weight="medium">
                            2. Boutons & Variantes
                        </Typography>
                        <Typography variant="caption3" theme="gray">
                            Tailles (Small, Medium, Large) et états (Accent, Secondary, Outline, Disabled, Icon, Loading)
                        </Typography>
                    </div>

                    <div className="flex flex-col gap-6 p-6 bg-white border border-gray-400 divide-y divide-gray-400 rounded-xl shadow-sm">
                        {/* Small */}
                        <div className="space-y-3">
                            <Typography variant="caption2" weight="medium" className="text-primary">
                                Size: Small
                            </Typography>
                            <div className="flex flex-wrap items-center gap-3">
                                <Button size="small" variant="accent">Accent</Button>
                                <Button size="small" variant="accent" icon={{ icon: RiShieldUserLine }}>With Icon</Button>
                                <Button size="small" variant="secondary">Secondary</Button>
                                <Button size="small" variant="ico" icon={{ icon: RiShieldUserLine }} />
                                <Button size="small" variant="ico" iconTheme="secondary" icon={{ icon: RiShieldUserLine }} />
                                <Button size="small" variant="ico" iconTheme="gray" icon={{ icon: RiShieldUserLine }} />
                                <Button size="small" variant="outline">Outline</Button>
                                <Button size="small" variant="disabled">Disabled</Button>
                                <Button size="small" isLoading variant="accent">Loading</Button>
                            </div>
                        </div>

                        {/* Medium */}
                        <div className="pt-4 space-y-3">
                            <Typography variant="caption2" weight="medium" className="text-primary">
                                Size: Medium
                            </Typography>
                            <div className="flex flex-wrap items-center gap-3">
                                <Button size="medium" variant="accent">Accent</Button>
                                <Button size="medium" variant="accent" icon={{ icon: RiShieldUserLine }}>With Icon</Button>
                                <Button size="medium" variant="secondary">Secondary</Button>
                                <Button size="medium" variant="ico" icon={{ icon: RiShieldUserLine }} />
                                <Button size="medium" variant="ico" iconTheme="secondary" icon={{ icon: RiShieldUserLine }} />
                                <Button size="medium" variant="ico" iconTheme="gray" icon={{ icon: RiShieldUserLine }} />
                                <Button size="medium" variant="outline">Outline</Button>
                                <Button size="medium" variant="disabled">Disabled</Button>
                                <Button size="medium" isLoading variant="accent">Loading</Button>
                            </div>
                        </div>

                        {/* Large */}
                        <div className="pt-4 space-y-3">
                            <Typography variant="caption2" weight="medium" className="text-primary">
                                Size: Large
                            </Typography>
                            <div className="flex flex-wrap items-center gap-3">
                                <Button size="large" variant="accent">Accent</Button>
                                <Button size="large" variant="accent" icon={{ icon: RiShieldUserLine }}>With Icon</Button>
                                <Button size="large" variant="secondary">Secondary</Button>
                                <Button size="large" variant="ico" icon={{ icon: RiShieldUserLine }} />
                                <Button size="large" variant="ico" iconTheme="secondary" icon={{ icon: RiShieldUserLine }} />
                                <Button size="large" variant="ico" iconTheme="gray" icon={{ icon: RiShieldUserLine }} />
                                <Button size="large" variant="outline">Outline</Button>
                                <Button size="large" variant="disabled">Disabled</Button>
                                <Button size="large" isLoading variant="accent">Loading</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Logos, Avatar and Spinner */}
                <section className="space-y-4">
                    <div className="border-b border-gray-400 pb-3">
                        <Typography variant="h2" weight="medium">
                            3. Composants Atomes (Logos, Avatars & Spinners)
                        </Typography>
                        <Typography variant="caption3" theme="gray">
                            Éléments visuels fondamentaux de l'interface
                        </Typography>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Spinner */}
                        <div className="p-6 bg-white border border-gray-400 rounded-xl space-y-3 shadow-sm">
                            <Typography variant="caption2" weight="medium">Spinners</Typography>
                            <div className="flex items-center gap-4 p-4 border border-gray-400 rounded-lg">
                                <Spinner size="small" />
                                <Spinner size="medium" />
                                <Spinner size="large" />
                            </div>
                        </div>

                        {/* Avatar */}
                        <div className="p-6 bg-white border border-gray-400 rounded-xl space-y-3 shadow-sm">
                            <Typography variant="caption2" weight="medium">Avatars</Typography>
                            <div className="flex items-center gap-4 p-4 border border-gray-400 rounded-lg">
                                <Avatar size="small" src="/assets/images/daniel-lincoln-pe-X2NUwVQo-unsplash.png" alt="Daniel profile" />
                                <Avatar size="medium" src="/assets/images/daniel-lincoln-pe-X2NUwVQo-unsplash.png" alt="Daniel profile" />
                                <Avatar size="large" src="/assets/images/austin-neill-hgO1wFPXl3I-unsplash.jpg" alt="Daniel profile" />
                            </div>
                        </div>

                        {/* Logo */}
                        <div className="p-6 bg-white border border-gray-400 rounded-xl space-y-3 shadow-sm">
                            <Typography variant="caption2" weight="medium">Logos</Typography>
                            <div className="flex items-center gap-3 p-4 border border-gray-400 rounded-lg overflow-x-auto">
                                <Logo size="very-small" />
                                <Logo size="small" />
                                <Logo size="medium" />
                                <Logo size="large" />
                            </div>
                        </div>
                    </div>
                </section>

            </Container>

            <Footer />
        </>
    );
}