"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ButtonRoots } from "@/data/root";
import type { ButtonRoot } from "@/types/root";

function ButtonRoot() {
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
      <div className="md:flex md:flex-row grid grid-cols-1 gap-4 items-center justify-center">
        {ButtonRoots.map(({ label, href, icon: Icon, variant }: ButtonRoot, idx) => (
          <Button key={idx} size="lg" variant={variant}>
            <a href={href} className="flex items-center gap-4 w-full justify-center">
              {label} <Icon className="w-4 h-4" />
            </a>
          </Button>
        ))}
      </div>
    </motion.div>
  );
}

export { ButtonRoot };
