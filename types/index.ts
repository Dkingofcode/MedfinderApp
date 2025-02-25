export interface Medication {
    id: string;
    name: string;
    genericName: string;
    description: string;
    category: string;
    price: number;
    inStock: boolean;
    requiresPrescription: boolean;
    imageUrl: string;
    dosageForm: string; // tablet, syrup, etc.
    strength: string;
    manufacturer: string;
  }
  
  export interface Pharmacy {
    id: string;
    name: string;
    address: string;
    location: {
      latitude: number;
      longitude: number;
    };
    rating: number;
    openingHours: string;
    phoneNumber: string;
    imageUrl: string;
    email: string;
    deliveryAvailable: boolean;
    medications: MedicationInventory[];
  }
  
  export interface MedicationInventory {
    medicationId: string;
    price: number;
    quantity: number;
    lastUpdated: string;
  }
  
  export interface UserLocation {
    latitude: number;
    longitude: number;
    address: string;
  }
  
  export interface SearchFilters {
    radius: number;
    sortBy: 'price' | 'distance' | 'rating';
    categories: string[];
    priceRange: {
      min: number;
      max: number;
    };
    inStockOnly: boolean;
  }
  
  export interface CartItem {
    medicationId: string;
    pharmacyId: string;
    quantity: number;
    price: number;
  }
  
  export interface Order {
    id: string;
    userId: string;
    pharmacyId: string;
    items: CartItem[];
    status: 'pending' | 'confirmed' | 'processing' | 'delivered';
    deliveryAddress: string;
    totalAmount: number;
    createdAt: string;
    prescriptionImage?: string;
  }