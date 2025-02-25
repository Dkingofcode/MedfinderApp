import Image from "next/image"
import { MapPin, Navigation, Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const pharmacies = [
  {
    id: "1",
    name: "HealthPlus Pharmacy",
    address: "123 Marina Street, Lagos Island",
    phone: "+234 801 234 5678",
    rating: 4.8,
    distance: "0.5km",
    image: "/markusunsplash.jpg",
    openNow: true,
  },
  {
    id: "2",
    name: "MedPlus Pharmacy",
    address: "456 Victoria Island Road",
    phone: "+234 802 345 6789",
    rating: 4.5,
    distance: "1.2km",
    image: "/tbelunsplash.jpg",
    openNow: true,
  },
  {
    id: "3",
    name: "Crown Pharmacy",
    address: "789 Lekki Phase 1",
    phone: "+234 803 456 7890",
    rating: 4.6,
    distance: "2.0km",
    image: "/tbelunsplash.jpg",
    openNow: false,
  },
]

export function NearbyPharmacies() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Nearby Pharmacies</h2>
          <p className="text-muted-foreground">Find medications at local stores</p>
        </div>
        <Button variant="link" className="text-primary">
          View All Pharmacies
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pharmacies.map((pharmacy) => (
          <Card key={pharmacy.id}>
            <CardHeader className="p-0">
              <div className="relative aspect-video">
                <Image
                  src={pharmacy.image || "/placeholder.svg"}
                  alt={pharmacy.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant={pharmacy.openNow ? "default" : "secondary"}>
                  {pharmacy.openNow ? "Open Now" : "Closed"}
                </Badge>
                <div className="flex items-center gap-1 text-primary">
                  <Star className="h-4 w-4 fill-primary" />
                  <span className="text-sm font-medium">{pharmacy.rating}</span>
                </div>
              </div>
              <CardTitle className="mb-2">{pharmacy.name}</CardTitle>
              <CardDescription className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {pharmacy.address}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {pharmacy.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="h-4 w-4" />
                  {pharmacy.distance} away
                </div>
              </CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">View Store</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

