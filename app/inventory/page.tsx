"use client"

import { useState } from "react"
import { MainNav } from "@/components/MainNav"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus, Search } from "lucide-react"

interface Medication {
  id: string
  name: string
  price: number
  quantity: number
  category: string
  expiryDate: string
}

const dummyInventory: Medication[] = [
  {
    id: "1",
    name: "Paracetamol",
    price: 500,
    quantity: 100,
    category: "Pain Relief",
    expiryDate: "2024-12-31",
  },
  {
    id: "2",
    name: "Ibuprofen",
    price: 800,
    quantity: 75,
    category: "Pain Relief",
    expiryDate: "2024-10-15",
  },
  {
    id: "3",
    name: "Amoxicillin",
    price: 1500,
    quantity: 50,
    category: "Antibiotics",
    expiryDate: "2024-08-20",
  },
]

export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [inventory] = useState<Medication[]>(dummyInventory)

  const filteredInventory = inventory.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Inventory Management</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Medication
          </Button>
        </div>
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search medications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>₦{item.price.toLocaleString()}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.expiryDate}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}

