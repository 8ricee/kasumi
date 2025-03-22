"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  className?: string;
  variant?: "switch" | "icon";
}

export function ThemeToggle({ className, variant = "switch" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(resolvedTheme === "dark");

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const renderIconToggle = () => {
    return (
      <div className={cn("cursor-pointer", className)} onClick={toggleTheme}>
        <Button size="icon" variant="ghost" className="rounded-full">
          {isDark ? (
            <Sun
              className="w-4 h-4 hover:scale-110 transition-transform"
              strokeWidth={1.5}
            />
          ) : (
            <Moon
              className="w-4 h-4 hover:scale-110 transition-transform"
              strokeWidth={1.5}
            />
          )}
        </Button>
      </div>
    );
  };

  const renderSwitchToggle = () => {
    return (
      <div
        className={cn(
          "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
          isDark
            ? "bg-zinc-950 border border-zinc-800"
            : "border border-zinc-200",
          className
        )}
        onClick={toggleTheme}
        role="button"
        tabIndex={0}
      >
        <div className="flex justify-between items-center w-full">
          <div
            className={cn(
              "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
              isDark
                ? "transform translate-x-0 bg-zinc-800"
                : "transform translate-x-8 bg-gray-200"
            )}
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme();
            }}
          >
            {isDark ? (
              <Moon className="w-4 h-4 text-white" strokeWidth={1.5} />
            ) : (
              <Sun className="w-4 h-4 text-gray-700" strokeWidth={1.5} />
            )}
          </div>
          <div
            className={cn(
              "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
              isDark ? "bg-transparent" : "transform -translate-x-8"
            )}
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme();
            }}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
            ) : (
              <Moon className="w-4 h-4 text-black" strokeWidth={1.5} />
            )}
          </div>
        </div>
      </div>
    );
  };

  return variant === "icon" ? renderIconToggle() : renderSwitchToggle();
}
