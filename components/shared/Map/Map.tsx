"use client";

import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";
import type { Property } from "@/lib/types";
import { renderToStaticMarkup } from "react-dom/server";
import HouseIcon from "@/assets/icons/house-linear.svg";

const markerPositions: [number, number][] = [
  [40.7128, -74.006],
  [40.72, -74.01],
  [40.705, -74.015],
];

const createCustomIcon = (price: string, isActive: boolean) => {
  const bgColor = isActive
    ? "bg-[#1E1E24] text-white"
    : "bg-white text-foreground";
  const iconColor = isActive ? "text-white" : "text-lavender";
  const pointerColor = isActive ? "text-[#1E1E24]" : "text-white";
  const shadow = isActive
    ? "shadow-md"
    : "shadow-[0px_4px_12px_rgba(0,0,0,0.15)]";

  const iconHtml = renderToStaticMarkup(<HouseIcon />);

  const htmlString = `
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 mb-1 flex flex-col items-center">
      <div class="flex items-center gap-1.5 px-3 py-2 rounded-[10px] ${bgColor} ${shadow} transition-all duration-200 cursor-pointer">
        <div class="w-[18px] h-[18px] shrink-0 ${iconColor}">
          ${iconHtml}
        </div>
        <span class="font-bold text-[15px] whitespace-nowrap leading-none pt-0.5">${price}</span>
      </div>
      <svg class="-mt-px ${pointerColor} transition-colors duration-200" width="12" height="6" viewBox="0 0 12 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6L0 0H12L6 6Z" />
      </svg>
    </div>
  `;

  return L.divIcon({
    className: "custom-div-icon",
    html: htmlString,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0],
  });
};

interface MapProps {
  properties: Property[];
}

export default function Map({ properties }: MapProps) {
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);

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
          .custom-popup {
            margin-bottom: 0 !important;
            bottom: auto !important;
            top: 10px !important;
          }
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
          <Marker
            key={property.id}
            position={markerPositions[index % markerPositions.length]}
            icon={createCustomIcon(
              property.price,
              activeMarkerId === property.id,
            )}
            eventHandlers={{
              click: () => setActiveMarkerId(property.id),
              popupclose: () => setActiveMarkerId(null),
            }}
          >
            <Popup
              minWidth={280}
              maxWidth={304}
              closeButton={false}
              className="custom-popup"
            >
              <PropertyCard
                key={property.id}
                layout="compact"
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
