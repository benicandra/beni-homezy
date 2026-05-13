export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-lavender-20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-lavender animate-spin"></div>
        </div>
        <p className="text-sm text-[#868893] font-light">Loading...</p>
      </div>
    </div>
  );
}
