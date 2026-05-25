"use client";

import { useMemo, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";
import type { Property } from "@/lib/types";
import { renderToStaticMarkup } from "react-dom/server";
import HouseIcon from "@/assets/icons/house-linear.svg";

const DEFAULT_CENTER: [number, number] = [51.5074, -0.1278];
const DEFAULT_ZOOM = 5;
const FLY_ZOOM = 15;
const POPUP_OFFSET = 0.008;

const iconCache = new globalThis.Map<string, ReturnType<typeof L.divIcon>>();

const createCustomIcon = (price: string, isActive: boolean) => {
  const cacheKey = `${price}-${isActive}`;
  const cached = iconCache.get(cacheKey);
  if (cached) return cached;

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
        <div class="w-4.5 h-4.5 shrink-0 ${iconColor}">
          ${iconHtml}
        </div>
        <span class="font-bold text-[15px] whitespace-nowrap leading-none pt-0.5">${price}</span>
      </div>
      <svg class="-mt-px ${pointerColor} transition-colors duration-200" width="12" height="6" viewBox="0 0 12 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6L0 0H12L6 6Z" />
      </svg>
    </div>
  `;

  const icon = L.divIcon({
    className: "custom-div-icon",
    html: htmlString,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0],
  });

  iconCache.set(cacheKey, icon);
  return icon;
};

function calculateCenter(properties: Property[]): [number, number] {
  if (properties.length === 0) {
    return DEFAULT_CENTER;
  }

  const sumLat = properties.reduce((acc, prop) => acc + prop.lat, 0);
  const sumLng = properties.reduce((acc, prop) => acc + prop.lng, 0);

  return [sumLat / properties.length, sumLng / properties.length];
}

interface MarkerControllerProps {
  property: Property;
  isSelected: boolean;
  onSelect: (id: string | null) => void;
}

function MarkerController({
  property,
  isSelected,
  onSelect,
}: MarkerControllerProps) {
  const map = useMap();
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    if (isSelected && markerRef.current) {
      map.flyTo([property.lat - POPUP_OFFSET, property.lng], FLY_ZOOM, {
        duration: 1,
      });
      markerRef.current.openPopup();
    }
  }, [isSelected, map, property.lat, property.lng]);

  return (
    <Marker
      ref={markerRef}
      position={[property.lat, property.lng]}
      icon={createCustomIcon(property.price, isSelected)}
      eventHandlers={{
        click: () => onSelect(property.id),
      }}
    >
      <Popup
        minWidth={280}
        maxWidth={304}
        closeButton={false}
        className="custom-popup"
        eventHandlers={{
          remove: () => onSelect(null),
        }}
      >
        <PropertyCard
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
  );
}

interface MapProps {
  properties: Property[];
  selectedPropertyId: string | null;
  onPropertySelect: (id: string | null) => void;
}

export default function Map({
  properties,
  selectedPropertyId,
  onPropertySelect,
}: MapProps) {
  const center = useMemo(() => calculateCenter(properties), [properties]);

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={center}
        zoom={DEFAULT_ZOOM}
        scrollWheelZoom={true}
        touchZoom={true}
        zoomControl={false}
        className="w-full h-full min-h-125"
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <style>{`
          .leaflet-container {
            touch-action: manipulation;
          }
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
        {properties.map((property) => (
          <MarkerController
            key={property.id}
            property={property}
            isSelected={selectedPropertyId === property.id}
            onSelect={onPropertySelect}
          />
        ))}
      </MapContainer>
    </div>
  );
}
