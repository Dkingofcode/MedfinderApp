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
    name: "Emzor Paracetamol 500mg",
    description: "Fast-acting pain relief and fever reducer",
    price: 500,
    rating: 4.5,
    image: "/james-yarema-kdgiNc0sDeI-unsplash.jpg",
    category: "Pain Relief",
    inStock: true,
  },
  {
    id: "2",
    name: "Immunboost Vitamin C 1000mg by 100",
    description: "Immune system support with added zinc",
    price: 1200,
    rating: 4.8,
    image: "/supliful-supplements-on-demand-Yb94j6zB14I-unsplash.jpg",
    category: "Vitamins",
    inStock: true,
  },
  {
    id: "3",
    name: "Seven seas Omega-3 Fish Oil",
    description: "Heart and brain health supplement",
    price: 2500,
    rating: 4.6,
    image: "/robertounsplash.jpg",
    category: "Supplements",
    inStock: true,
  },
  {
    id: "4",
    name: "Piriton Allergy tablets",
    description: "24-hour non-drowsy allergy relief",
    price: 1800,
    rating: 4.3,
    image: "/aleksander-saks-hxvrkYmsDV0-unsplash.jpg",         
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
    <section className="space-y-8 bg-orange-50 py-5 px-5 rounded-md">
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
              <Button color="bg-orange-400" size="sm" className="gap-2 bg-orange-400" disabled={!product.inStock}>
                  <ShoppingCart className="h-4 w-4" />
                  {"Search nearby"}
                </Button>
                <Button color="bg-orange-400" size="sm" className="gap-2 bg-orange-400" disabled={!product.inStock}>
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

