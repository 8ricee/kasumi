'use client'

import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from '@/components/ui/tubelight-navbar'

const navItems = [
  { name: 'Home', url: '#', icon: Home },
  { name: 'About', url: '#', icon: User },
  { name: 'Projects', url: '#', icon: Briefcase },
  { name: 'Resume', url: '#', icon: FileText }
]

export function NavBarMain() {
  return <NavBar items={navItems} />
}
