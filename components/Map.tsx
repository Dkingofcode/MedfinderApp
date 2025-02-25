import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const PharmacyMap = ({ pharmacies }) => (
  <MapContainer center={[6.5244, 3.3792]} zoom={12} style={{ height: "400px", width: "100%" }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {pharmacies.map((pharmacy) => (
      <Marker key={pharmacy.id} position={[pharmacy.lat, pharmacy.lng]}>
        <Popup>{pharmacy.name}</Popup>
      </Marker>
    ))}
  </MapContainer>
);
