import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Truck } from "lucide-react";

export function PromoSection() {
  return (
    <div className="container py-12 bg-orange-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-orange-400 border-0">
          <CardContent className="p-6 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-orange-200 text-primary">
              <Truck className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">Free Delivery</h3>
              <p className="text-sm text-muted-foreground">Free delivery for orders above ₦5,000</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-orange-400 border-0">
          <CardContent className="p-6 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-orange-200 text-primary">
              <Clock className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Round the clock customer support</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-orange-400 border-0">
          <CardContent className="p-6 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-orange-200 text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">Nearby Pharmacies</h3>
              <p className="text-sm text-muted-foreground">Find medications at local pharmacies</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

