// 'use client';

// import React, { useState, useEffect } from 'react';
// import { SearchBar } from '@/components/SearchBar';
// import { LocationPicker } from '@/components/LocationPicker';
// import MedicationCard from '@/components/MedicationCard';
// import { PharmacyCard } from '@/components/PharmacyCard';
// import { FilterSidebar } from '@/components/FilterSidebar';
// import { useTheme } from '@/context/ThemeContext';
// import { Medication, Pharmacy, SearchFilters, UserLocation } from '@/types';
// import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for sidebar toggle
// import { useRouter } from 'next/navigation';
// import { FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
// import { GiNextButton } from 'react-icons/gi';
// //import { useRouter } from 'next/router';


// const defaultFilters: SearchFilters = {
//   radius: 10,
//   sortBy: 'price',
//   categories: [],
//   priceRange: {
//     min: 0,
//     max: 100000,
//   },
//   inStockOnly: false,
// };


// // Dummy Data
// const dummyMedications: Medication[] = [
//   {
//     id: '1',
//     name: 'Paracetamol',
//     price: 500,
//     inStock: true,
//     description: 'Pain reliever and fever reducer.',
//     imageUrl: './Paracetamol.jpg'
//   },
//   {
//     id: '2',
//     name: 'Ibuprofen',
//     price: 800,
//     inStock: true,
//     description: 'Anti-inflammatory drug for pain and fever relief.',
//     imageUrl: './ibuprofen.jpg'
//   },
//   {
//     id: '3',
//     name: 'Amoxicillin',
//     price: 1500,
//     inStock: false,
//     description: 'Antibiotic used to treat bacterial infections.',
//     imageUrl: './amoxicillin.jpg'
//   }
// ];

// const dummyPharmacies: Pharmacy[] = [
//   {
//     id: '1',
//     name: 'Alpha Pharmacy',
//     location: 'Lagos, Nigeria',
//     rating: 4.5,
//     imageUrl: './AlphaPharm.jpg'
//   },
//   {
//     id: '2',
//     name: 'Mophet Pharmacy',
//     location: 'Lagos, Nigeria',
//     rating: 4.2,
//     imageUrl: './mophetPahrm.jpg'
//   },
//   {
//     id: '3',
//     name: 'Net Pharmacy',
//     location: 'Lagos, Nigeria',
//     rating: 4.8,
//     imageUrl: './NetPharm.jpg'
//   }
// ];


// export default function Home() {
//   const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
//   const router = useRouter();
//   const [filters, setFilters] = useState<SearchFilters>(defaultFilters);
//   const [medications, setMedications] = useState<Medication[]>([]);
//   const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
//   const [loading, setLoading] = useState(false);
//   const { darkMode, toggleDarkMode } = useTheme();
//   const [sidebarOpen, setSidebarOpen] = useState(false); // Track sidebar state



//   useEffect(() => {
//     // Simulating an API call with dummy data
//     setMedications(dummyMedications);
//     setPharmacies(dummyPharmacies);
//   }, []);


//   const handleSearch = async (query: string) => {
//     setLoading(true);
//     try {
//       const response = await fetch('/api/search', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           query,
//           location: userLocation,
//           filters,
//         }),
//       });
//       const data = await response.json();
//       setMedications(data.medications);
//       setPharmacies(data.pharmacies);
//     } catch (error) {
//       console.error('Search error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

 



//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow">
//         <div className="container mx-auto px-4 py-6 flex items-center justify-between">
//           <h1 className="text-2xl font-bold text-orange-500">MedFinder App</h1>
//           <div className="flex items-center gap-4">
//             <button className="rounded-full bg-orange-500 px-6 py-2 text-white"  onClick={() => router.push("/login")}>
//               Login
//             </button>
//             <button className="rounded-full border border-orange-500 px-6 py-2 text-orange-500" onClick={() => router.push("/signup")}>
//               Sign Up
//             </button>
//             {/* <button
//               className="rounded-full border border-orange-500 px-6 py-2 text-orange-500"
//               onClick={toggleDarkMode}
//             >
//               {darkMode ? 'Light Mode' : 'Dark Mode'}
//             </button> */}
//           </div>
//         </div>
//       </header>

//       {/* Search Section */}
//       <section className="bg-orange-50 py-12">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="mb-6 text-3xl font-bold">
//             Best Prices for Your Medications
//           </h2>
//           <p className="mb-8 text-gray-600">
//             Come and experience the best services and products for your satisfaction.
//           </p>
//           <div className="mx-auto max-w-4xl space-y-4">
//             <SearchBar onSearch={handleSearch} />
//             <LocationPicker onLocationSelect={setUserLocation} />
//           </div>
//         </div>
//       </section>

//       {/* Results Section */}
//       <section className="py-12">
//         <div className="container mx-auto px-4 flex gap-8">
//           {/* Sidebar Toggle Button for Mobile */}
//           <button
//             className="md:hidden text-orange-500 focus:outline-none"
//             onClick={() => setSidebarOpen(true)}
//           >
//             <FiMenu size={28} />
//           </button>

//           {/* Sidebar (Filters) */}
//           <div
//             className={`fixed inset-0 z-50 bg-white shadow-lg transform transition-transform duration-300 md:relative md:flex md:w-1/4 md:translate-x-0 ${
//               sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//             }`}
//           >
//             {/* Close Button for Mobile Sidebar */}
//             <button
//               className="absolute top-4 right-4 text-gray-600 md:hidden"
//               onClick={() => setSidebarOpen(false)}
//             >
//               <FiX size={28} />
//             </button>

//             <FilterSidebar filters={filters} onFilterChange={setFilters} />
//           </div>

//           {/* Results */}
//           <div className="flex-1">
//             {loading ? (
//               <div className="text-center">Loading...</div>
//             ) : (
//               <div className="space-y-8">
//                 {/* Medications Grid */}
//                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//                   {medications.map((medication) => (
//                     <MedicationCard key={medication.id} medication={medication} />
//                   ))}
//                 </div>

//                 {/* Pharmacies List */}
//                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//                   {pharmacies.map((pharmacy) => (
//                     <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//     {/* Categories */}
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {['Vitamins', 'Oral Care', 'Prescription', 'Diagnosis'].map((category) => (
//           <div key={category} className="p-4 bg-gray-100 rounded-md text-center">
//             <p className="font-semibold">{category}</p>
//           </div>
//         ))}
//       </div>

//       {/* Nearby Pharmacies */}
//       <h2 className="mt-6 text-xl font-bold">Nearby Pharmacies</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
//         {[1, 2, 3].map((pharmacy) => (
//           <div key={pharmacy} className="p-4 border rounded-md">
//             <h3 className="font-semibold">Pharmacy {pharmacy}</h3>
//             <p>Location: City Center</p>
//             <button className="mt-2 bg-blue-500 text-white p-2 rounded-md">
//               <FaMapMarkerAlt /> View on Map
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cart & Orders */}
//       <div className="fixed bottom-4 right-4 flex gap-2">
//         <GiNextButton onClick={() => router.push("/cart")}>
//           <a className="p-3 bg-green-500 text-white rounded-full shadow-md">
//             <FaShoppingCart />
//           </a>
//         </GiNextButton>
//       </div>

//     </div>
//   );
// }




import { MainNav } from "@/components/MainNav"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { Categories } from "@/components/categories"
import { NearbyPharmacies } from "@/components/nearby-pharmacies"
import { PromoSection } from "@/components/promo-section"
import { CartButton } from "@/components/cart-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main>
        <HeroSection />
        <PromoSection />
        <div className="container py-12 space-y-20">
          <FeaturedProducts />
          <Categories />
          <NearbyPharmacies />
        </div>
      </main>
      <CartButton />
    </div>
  )
}

