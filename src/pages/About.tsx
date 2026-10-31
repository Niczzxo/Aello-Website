import { ArrowUpRight } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FadeIn } from '@/components/ui/TextReveal'
import { Button } from '@/components/ui/Button'

export function About() {
    return (
        <div className="relative min-h-screen bg-bg-primary text-text-primary flex flex-col">
            <Header />

            <main className="flex-1 w-full pt-32 md:pt-40 pb-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <p className="kicker mb-5">About</p>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.035em] leading-[0.98] mb-6">
                            Why Aello{' '}
                            <span className="whitespace-nowrap font-serif italic font-normal tracking-[-0.01em] text-text-muted">exists.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
                            Aello was born out of frustration. Frustration with the modern web, where algorithms are optimized for watch-time and engagement rather than your actual interests.
                            Frustration with platforms that prioritize sponsor reads, clickbait thumbnails, and doom-scrolling over genuine discovery.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-12 md:py-16 border-t border-border-subtle">
                            <div>
                                <p className="kicker mb-3">Mission</p>
                                <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] mb-4">Software that serves you</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    To build a completely private, on-device media client that puts the user back in control. We believe software should serve the person using it, not the corporation tracking them.
                                </p>
                            </div>
                            <div>
                                <p className="kicker mb-3">Open Source</p>
                                <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] mb-4">Built in the open</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    Aello is fully open-source and GPL v3.0 licensed. We believe in transparency, community contribution, and the right to inspect the code that runs on your device.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.05}>
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12 md:py-16 border-t border-border-subtle">
                            <div className="md:col-span-4">
                                <p className="kicker mb-3">Owner &amp; Maintainer</p>
                                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight">
                                    The person{' '}
                                    <span className="whitespace-nowrap font-serif italic font-normal tracking-[-0.01em] text-text-muted">behind it.</span>
                                </h2>
                            </div>

                            <div className="md:col-span-8">
                                <div className="rounded-2xl border-2 border-text-primary p-6 md:p-8 flex flex-col sm:flex-row gap-6 sm:items-center">
                                    <img
                                        src="https://avatars.githubusercontent.com/Niczzxo?v=4&s=192"
                                        alt="Md Riyazul Islam's GitHub avatar"
                                        width={96}
                                        height={96}
                                        className="w-24 h-24 rounded-full bg-bg-elevated ring-1 ring-border-subtle shrink-0"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <p className="font-display text-3xl font-semibold tracking-[-0.025em] leading-none">
                                            Md Riyazul Islam
                                        </p>
                                        <p className="kicker mt-2">@Niczzxo</p>
                                        <p className="mt-4 text-text-secondary leading-relaxed">Developer</p>
                                    </div>
                                    <Button
                                        href="https://github.com/Niczzxo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="primary"
                                        size="sm"
                                        className="self-start sm:self-center shrink-0 px-5 py-2.5"
                                        icon={<ArrowUpRight className="w-4 h-4" />}
                                    >
                                        GitHub
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="mt-4 rounded-2xl border-2 border-text-primary p-8 md:p-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                            <div>
                                <p className="kicker mb-4">Get involved</p>
                                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight mb-3">
                                    Want to help{' '}
                                    <span className="whitespace-nowrap font-serif italic font-normal tracking-[-0.01em] text-text-muted">build it?</span>
                                </h2>
                                <p className="text-text-secondary max-w-xl leading-relaxed">
                                    Pick up an issue, send a pull request, or help translate Aello into your language.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Button
                                    href="https://github.com/Niczzxo/Aello-Native/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="primary"
                                    size="md"
                                    icon={<ArrowUpRight className="w-4 h-4" />}
                                >
                                    Browse issues
                                </Button>
                                <Button
                                    href="https://hosted.weblate.org/engage/flow/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="outline"
                                    size="md"
                                    icon={<ArrowUpRight className="w-4 h-4" />}
                                >
                                    Translate on Weblate
                                </Button>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default About
