"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
import { Mail } from "lucide-react";
import { DialogSubscribes } from "@/data/root";
import type { DialogSubscribe } from "@/types/root";

function DialogSubscribe({
  icon = DialogSubscribes.icon,
  badge = DialogSubscribes.badge,
  title = DialogSubscribes.title,
  description = DialogSubscribes.description,
  emailPlaceholder = DialogSubscribes.emailPlaceholder,
}: Partial<DialogSubscribe>) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] },
    }),
  };

  return (
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
            <DialogTitle className="sm:text-center cursor-pointer">{title}</DialogTitle>
            <DialogDescription className="sm:text-center cursor-pointer">
              {description}
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-2">
            <div className="relative">
              <Input
                id="dialog-subscribe"
                className="peer ps-9"
                placeholder={emailPlaceholder}
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

        <p className="text-center text-xs text-muted-foreground cursor-pointer">
          By subscribing you agree to our{" "}
          <a className="underline hover:no-underline cursor-pointer" href="#">
            Privacy Policy
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}

export { DialogSubscribe };
