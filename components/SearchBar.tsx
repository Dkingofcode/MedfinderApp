//import React, { useState } from 'react';
import { Search} from 'lucide-react';
//import { 
 // Medication, 
 // Pharmacy, 
 /// SearchFilters, 
 // UserLocation 
//} from '@/types';

// Search Bar Component
export const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => (
  <div className="relative w-full max-w-2xl">
    <input
      type="text"
      placeholder="Search for medications..."
      className="w-full rounded-full border px-12 py-3 shadow-sm focus:border-orange-500 focus:outline-none"
      onChange={(e) => onSearch(e.target.value)}
    />
    <Search className="absolute left-4 top-3.5 text-gray-400" />
    <button  className="absolute right-4 top-2 rounded-full bg-orange-500 px-4 py-1.5 text-white">
      Search
    </button>
  </div>
);
