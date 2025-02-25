import { Card, CardContent } from "@/components/ui/card"
import { PillIcon as Capsule, Stethoscope, Syringe, Tablet, Thermometer, SmileIcon as Tooth } from "lucide-react"

const categories = [
  {
    name: "Prescription Drugs",
    icon: Capsule,
    description: "Authorized medication with prescription",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    name: "Over the Counter",
    icon: Tablet,
    description: "Common medications without prescription",
    color: "bg-green-500/10 text-green-500",
  },
  {
    name: "Medical Supplies",
    icon: Syringe,
    description: "Healthcare and medical equipment",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    name: "Dental Care",
    icon: Tooth,
    description: "Oral hygiene and dental products",
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    name: "Diagnostics",
    icon: Stethoscope,
    description: "Testing and monitoring devices",
    color: "bg-red-500/10 text-red-500",
  },
  {
    name: "Health Devices",
    icon: Thermometer,
    description: "Medical and wellness devices",
    color: "bg-pink-500/10 text-pink-500",
  },
]

export function Categories() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Browse Categories</h2>
        <p className="text-muted-foreground">Find medications and health products by category</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.name} className="group cursor-pointer transition-colors hover:border-primary">
            <CardContent className="p-6 flex items-start gap-4">
              <div className={`p-3 rounded-lg ${category.color}`}>
                <category.icon className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

