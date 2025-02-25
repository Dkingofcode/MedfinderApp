"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: "1",
    name: "Paracetamol Extra",
    description: "Fast-acting pain relief and fever reducer",
    price: 500,
    rating: 4.5,
    image: "/madisonagardiunsplash.jpg",
    category: "Pain Relief",
    inStock: true,
  },
  {
    id: "2",
    name: "Vitamin C Complex",
    description: "Immune system support with added zinc",
    price: 1200,
    rating: 4.8,
    image: "/robertounsplash.jpg",
    category: "Vitamins",
    inStock: true,
  },
  {
    id: "3",
    name: "Omega-3 Fish Oil",
    description: "Heart and brain health supplement",
    price: 2500,
    rating: 4.6,
    image: "/robertounsplash.jpg",
    category: "Supplements",
    inStock: true,
  },
  {
    id: "4",
    name: "Allergy Relief",
    description: "24-hour non-drowsy allergy relief",
    price: 1800,
    rating: 4.3,
    image: "/christinaunsplash.jpg",
    category: "Allergy",
    inStock: false,
  },
]

export function FeaturedProducts() {
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <p className="text-muted-foreground">Popular medications and health products</p>
        </div>
        <Button variant="link" className="text-primary">
          View All Products
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group">
            <CardHeader className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart className={favorites.includes(product.id) ? "fill-primary text-primary" : ""} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                <div className="flex items-center gap-1 text-primary">
                  <Star className="h-4 w-4 fill-primary" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>
              <CardTitle className="mb-2">{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-bold">₦{product.price.toLocaleString()}</span>
                <Button size="sm" className="gap-2" disabled={!product.inStock}>
                  <ShoppingCart className="h-4 w-4" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

