import { MapPin } from "lucide-react";
import { UserLocation } from "@/types";
import React, {useState} from "react";


// Location Picker
export const LocationPicker = ({ 
    onLocationSelect 
  }: { 
    onLocationSelect: (location: UserLocation) => void 
  }) => {
    const [isLocating, setIsLocating] = useState(false);
  
    const getCurrentLocation = () => {
      setIsLocating(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onLocationSelect({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            address: 'Current Location'
          });
          setIsLocating(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLocating(false);
        }
      );
    };
  
    return (
      <div className="flex items-center gap-2 rounded-lg border p-3">
        <MapPin className="text-gray-400" />
        <input
          type="text"
          placeholder="Enter your location"
          className="flex-1 border-none outline-none"
        />
        <button
          onClick={getCurrentLocation}
          disabled={isLocating}
          className="rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200"
        >
          {isLocating ? 'Locating...' : 'Use Current Location'}
        </button>
      </div>
    );
  };