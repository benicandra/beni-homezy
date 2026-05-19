"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";
import { properties } from "@/lib/data";

const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const markerPositions: [number, number][] = [
  [40.7128, -74.006],
  [40.72, -74.01],
  [40.705, -74.015],
];

export default function Map() {
  useEffect(() => {
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={[40.7128, -74.006]}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
        className="w-full h-full min-h-[500px]"
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <style>{`
          .custom-popup .leaflet-popup-content-wrapper {
            padding: 0;
            background: transparent;
            box-shadow: none;
          }
          .custom-popup .leaflet-popup-content {
            margin: 0;
          }
          .custom-popup .leaflet-popup-tip-container {
            display: none;
          }
        `}</style>
        {properties.map((property, index) => (
          <Marker key={property.id} position={markerPositions[index]}>
            <Popup
              minWidth={280}
              maxWidth={350}
              closeButton={false}
              className="custom-popup"
            >
              <PropertyCard
                key={property.id}
                image={property.image}
                price={property.price}
                priceSuffix={property.priceSuffix}
                title={property.title}
                address={property.address}
                beds={property.beds}
                baths={property.baths}
                area={property.area}
                isFeatured={false}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
