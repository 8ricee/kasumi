"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/data/root";
import type { SocialLink } from "@/types/root";

function IconSocial() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
      <div className="flex flex-row gap-6 pb-5 items-center justify-center">
        {SocialLinks.map(({ href, icon: Icon, variant, title }: SocialLink, idx) => (
          <Button key={idx} size="icon" variant={variant} className="rounded-full">
            <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
              <Icon className="w-4 h-4" />
            </a>
          </Button>
        ))}
      </div>
    </motion.div>
  );
}

export { IconSocial };
