"use client"

import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ComboboxDemo } from "./location-combobox"

export function HeroSection() {
  const [query, setQuery] = useState("")

  return (
    <div className="relative bg-orange-50  h-[1200px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r  flex items-center justify-center">
  <Image
    src="/20250506_1204_Friendly Pharmacist Interaction_simple_compose_01jtkfn3jzf6vvz6gjztspc6t5.png"
    alt="Hero background"
    width={1200}
    height={100}
    className="object-cover max-h-500 max-w-full "
    priority
  />
</div>

      <div className="relative container py-24 md:py-32">
        <div className="max-w-2xl space-y-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Find and Order Your Medications with Ease</h1>
          <p className="text-lg md:text-xl opacity-90">
            Compare prices across pharmacies, check availability, and get your medications delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search medications..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9 bg-white/90 border-0 text-foreground"
              />
            </div>
            <ComboboxDemo />
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

