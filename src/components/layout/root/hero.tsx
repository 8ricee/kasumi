"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { HeroContents } from "@/data/root";

function Hero({
  title = HeroContents.title,
  description = HeroContents.description,
  dynamicTitles = HeroContents.dynamicTitles,
}: {
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
    <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
      <div className="flex gap-4 py-5 lg:py-10 items-center justify-center flex-col">
        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center">
          <span className="px-1 bg-clip-text cursor-pointer text-transparent bg-gradient-to-r from-indigo-500 via-slate-200 to-rose-500 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300">
            {title}
          </span>
          <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
            &nbsp;
            {titles.map((title, index) => (
              <motion.span
                key={index}
                className="absolute cursor-pointer font-semibold bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-400 dark:from-white dark:to-white/80"
                initial={{ opacity: 0, y: "-100" }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  titleNumber === index
                    ? { y: 0, opacity: 1 }
                    : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                }
              >
                {title}
              </motion.span>
            ))}
          </span>
        </h1>

        <p className="text-lg cursor-pointer md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export { Hero };
