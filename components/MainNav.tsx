"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"

export function MainNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          MedFinder App
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/inventory"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/inventory" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Inventory
          </Link>
          <ThemeToggle />
          <Link href="/login">
            <Button variant="default" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="outline" size="sm">
              Sign Up
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

