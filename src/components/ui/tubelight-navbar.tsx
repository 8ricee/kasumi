"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ThemeToggle } from "@/components/ui/theme-toggle"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed w-full bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 ",
        className,
      )}
    >
      <div className="flex p-4 md:px-10 xl:px-44 justify-between items-center lg:bg-background/5 lg:backdrop-blur-lg backdrop-blur-none bg-none">
        <div className="flex items-center gap-2 ">
          <Image
            src={"/favicon/dark.svg"}
            alt="Logo"
            width={isMobile ? 25 : 50}
            height={isMobile ? 25 : 50}
            className="hidden sm:inline"
          />
          <Image
            className="hidden xl:inline"
            src={"/favicon/logo.svg"}
            alt="Logo"
            width={isMobile ? 25 : 200}
            height={isMobile ? 25 : 50}
          />
        </div>

        <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 flex justify-center items-center gap-5 bg-background/5 border border-border backdrop-blur-lg p-1 rounded-full shadow-lg">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all",
                  "text-foreground/80",
                  isActive && "bg-red-50 dark:bg-red-50/[0.15] text-red-400 font-bold transition-all",
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
              </Link>
            )
          })}
        </div>
        <div className="space-y-2 text-center">
          <div className="flex justify-center items-center">
            <ThemeToggle className="bg-background/5 backdrop-blur-lg hidden sm:inline-flex" />
          </div>
        </div>
      </div>
    </div>
  )
}
