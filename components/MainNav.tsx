"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X, Search, ShoppingCart } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Logo from "@/public/Logo copy.svg"
// import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export function MainNav() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  console.log(isScrolled);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Medications", href: "/medications" },
    { name: "Pharmacies", href: "/pharmacies" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About Us", href: "/about" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo || "/placeholder.svg"} width={35} height={35} alt="logoImage" />
          <span className="text-md font-medium">MedFinder</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            {isSearchOpen ? (
              <div className="absolute right-0 top-0 flex items-center">
                <Input
                  type="search"
                  placeholder="Search medications..."
                  className="w-64 h-9"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <Button variant="ghost" size="icon" className="ml-1" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Cart - Hidden on Mobile */}
          <Button variant="ghost" size="icon" className="hidden md:flex" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                3
              </span>
            </Link>
          </Button>

          {/* Login/Signup Buttons - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-2">
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
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <div>
              <div>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
              <div className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4 border-b">
                    <Link href="/" className="flex items-center space-x-2">
                      <Image src={Logo || "/placeholder.svg"} alt="MedFinder Logo" width={32} height={32} />
                      <span className="text-xl font-bold">MedFinder</span>
                    </Link>
                    <div className="rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </div>
                  </div>

                  <div className="py-4">
                    <div className="relative mb-6">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search medications..." className="pl-8" />
                    </div>

                    <nav className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <div  key={link.name}>
                          <Link
                            href={link.href}
                            className={cn(
                              "text-base font-medium transition-colors hover:text-primary",
                              pathname === link.href ? "text-primary font-bold" : "",
                            )}
                          >
                            {link.name}
                          </Link>
                        </div>
                      ))}
                      <div>
                        <Link
                          href="/inventory"
                          className={cn(
                            "text-base font-medium transition-colors hover:text-primary",
                            pathname === "/inventory" ? "text-primary font-bold" : "",
                          )}
                        >
                          Inventory
                        </Link>
                      </div>
                    </nav>
                  </div>

                  <div className="mt-auto border-t pt-4 space-y-4">
                    <div className="flex flex-col space-y-2">
                      <Link
                        href="/cart"
                        className="flex items-center space-x-2 text-base font-medium transition-colors hover:text-primary"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        <span>Cart (3)</span>
                      </Link>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Link href="/login" className="w-full">
                        <Button variant="default" className="w-full">
                          Login
                        </Button>
                      </Link>
                      <Link href="/signup" className="w-full">
                        <Button variant="outline" className="w-full">
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </header>
  )
}
