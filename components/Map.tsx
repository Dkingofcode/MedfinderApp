import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { FC } from "react";

interface Pharmacy {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

interface PharmacyMapProps {
  pharmacies: Pharmacy[];
}

const PharmacyMap: FC<PharmacyMapProps> = ({ pharmacies }) => (
  <MapContainer style={{ height: "400px", width: "100%" }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {pharmacies.map((pharmacy) => (
      <Marker key={pharmacy.id} position={[pharmacy.lat, pharmacy.lng]}>
        <Popup>{pharmacy.name}</Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default PharmacyMap;
