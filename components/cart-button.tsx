"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function CartButton() {
  const router = useRouter()

  return (
    <Button size="lg" className="fixed bottom-8 right-8 rounded-full shadow-lg" onClick={() => router.push("/cart")}>
      <ShoppingCart className="h-5 w-5 mr-2" />
      <span className="sr-only md:not-sr-only">View Cart</span>
      <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground w-6 h-6 rounded-full text-sm flex items-center justify-center">
        3
      </span>
    </Button>
  )
}

