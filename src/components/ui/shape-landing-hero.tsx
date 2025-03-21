"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Facebook, Github, Inbox, Instagram, Mail, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white dark:from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-red-50 dark:border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),transparent_70%)] dark:after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    icon = "/favicon/light.svg",
    badge = "Learning Now",
    title = "Kasumi Language Center",
    description = "With modern teaching methods and a focus on practical communication skills",
    dynamicTitles = ["amazing", "new", "wonderful", "beautiful", "smart"]
}: {
    icon?: string;
    badge?: string;
    title?: string;
    description?: string;
    dynamicTitles?: string[];
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] },
        }),
    };

    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(() => dynamicTitles, [dynamicTitles]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleNumber((prev) => (prev + 1) % titles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [titles]);

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-red-50 dark:bg-[#030303] transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl dark:from-indigo-500/[0.1] dark:to-rose-500/[0.1]" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500 dark:from-indigo-400/[0.2]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />
                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500 dark:from-rose-400/[0.2]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />
                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500 dark:from-violet-400/[0.2]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />
                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500 dark:from-amber-400/[0.2]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />
                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500 dark:from-cyan-400/[0.2]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <Dialog>
                        <DialogTrigger asChild>
                            <motion.div
                                custom={0}
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] mb-8 md:mb-12"
                            >
                                <Image src={icon} alt="Kasumi Logo" width={24} height={24} className="rounded-full" />
                                <span className="text-sm text-black/60 dark:text-white/60 tracking-wide cursor-pointer">
                                    {badge}
                                </span>
                            </motion.div>
                        </DialogTrigger>
                        <DialogContent>
                            <div className="mb-2 flex flex-col items-center gap-2">
                                <div
                                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
                                    aria-hidden="true"
                                >
                                    <Image src={icon} alt="Kasumi Logo" width={24} height={24} className="rounded-full" />
                                </div>
                                <DialogHeader>
                                    <DialogTitle className="sm:text-center">Never miss an update</DialogTitle>
                                    <DialogDescription className="sm:text-center">
                                        Subscribe to receive news and special offers.
                                    </DialogDescription>
                                </DialogHeader>
                            </div>

                            <form className="space-y-5">
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Input
                                            id="dialog-subscribe"
                                            className="peer ps-9"
                                            placeholder="hi@yourcompany.com"
                                            type="email"
                                            aria-label="Email"
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                                            <Mail size={16} strokeWidth={2} aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                                <Button type="button" className="w-full">
                                    Subscribe
                                </Button>
                            </form>

                            <p className="text-center text-xs text-muted-foreground">
                                By subscribing you agree to our{" "}
                                <a className="underline hover:no-underline" href="#">
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </DialogContent>
                    </Dialog>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="flex gap-4 py-5 lg:py-10 items-center justify-center flex-col">
                            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-slate-200 to-rose-500 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300">{title}</span>
                                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                                    &nbsp;
                                    {titles.map((title, index) => (
                                        <motion.span
                                            key={index}
                                            className="absolute font-semibold bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-400 dark:from-white dark:to-white/80"
                                            initial={{ opacity: 0, y: "-100" }}
                                            transition={{ type: "spring", stiffness: 50 }}
                                            animate={
                                                titleNumber === index
                                                    ? {
                                                        y: 0,
                                                        opacity: 1,
                                                    }
                                                    : {
                                                        y: titleNumber > index ? -150 : 150,
                                                        opacity: 0,
                                                    }
                                            }
                                        >
                                            {title}
                                        </motion.span>
                                    ))}
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                                {description}
                            </p>
                        </div>
                        <div className="flex flex-row gap-6 pb-5 items-center justify-center">
                            <Button size="icon" variant="outline" className="rounded-full">
                                <Link href="https://www.facebook.com/KasumiCenter/" target="_blank" rel="noopener noreferrer" title="Facebook">
                                    <Facebook className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button size="icon" variant="outline" className="rounded-full">
                                <Link href="https://www.instagram.com/bluw913/" target="_blank" rel="noopener noreferrer" title="Instagram">
                                    <Instagram className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button size="icon" variant="outline" className="rounded-full">
                                <Link href="#" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button size="icon" variant="outline" className="rounded-full">
                                <Link href="#" target="_blank" rel="noopener noreferrer">
                                    <Inbox className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button size="icon" variant="outline" className="rounded-full">
                                <Link href="#" target="_blank" rel="noopener noreferrer">
                                    <Mail className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                        <div className="md:flex md:flex-row grid grid-cols-1 gap-4 items-center justify-center ">
                            <Button size="lg" variant="outline">
                                <a href="tel:000000" className="flex items-center justify-center gap-4 w-full">
                                    Jump on a call <PhoneCall className="w-4 h-4" />
                                </a>
                            </Button>
                            <Button size="lg">
                                <Link href="/home" className="flex items-center gap-4">
                                    About Center <MoveRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80 dark:from-[#030303] dark:to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }
