import BedIcon from "@/assets/icons/bed.svg";
import LocationIcon from "@/assets/icons/location.svg";
import BathIcon from "@/assets/icons/bath.svg";

export default function ImportIcon() {
  return (
    <div className="flex items-center justify-center gap-5 p-10">
      {/* Dynamic Import */}
      <div className="flex flex-col items-center gap-2">
        <p>Dynamic Import</p>
        <div className="flex items-end gap-4">
          <BedIcon className="size-12 text-blue-600" />
          <BedIcon className="size-10 text-red-400" />
          <BedIcon className="size-8 text-green-400" />
          <BedIcon className="size-6 text-yellow-400" />
          <BedIcon className="size-4 text-purple-400" />
          <LocationIcon className="size-12 text-blue-600" />
          <LocationIcon className="size-10 text-red-400" />
          <LocationIcon className="size-8 text-green-400" />
          <LocationIcon className="size-6 text-yellow-400" />
          <LocationIcon className="size-4 text-purple-400" />
          <BathIcon className="size-12 text-blue-600" />
          <BathIcon className="size-10 text-red-400" />
          <BathIcon className="size-8 text-green-400" />
          <BathIcon className="size-6 text-yellow-400" />
          <BathIcon className="size-4 text-purple-400" />
        </div>
      </div>
    </div>
  );
}
