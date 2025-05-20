
import { useState } from "react";
import { Slider } from "@/components/ui/slider"; // shadcn slider

export default function FiltersSidebar({ minStipend, setMinStipend }) {
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [workFromHome, setWorkFromHome] = useState(false);
  const [partTime, setPartTime] = useState(false);

  return (
    <aside className="w-[1000px] md:w-64 p-4 space-y-6 bg-white border rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-center gap-2">
        <span className="i-lucide-filter" /> Filters
      </h2>

      <div className="space-y-4 text-sm">
        <div className="space-y-2">
          <label className="block font-medium">Profile</label>
          <input
            type="text"
            placeholder="e.g. Marketing"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Location</label>
          <input
            type="text"
            placeholder="e.g. Delhi"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="wfh"
            checked={workFromHome}
            onChange={(e) => setWorkFromHome(e.target.checked)}
          />
          <label htmlFor="wfh">Work from home</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="pt"
            checked={partTime}
            onChange={(e) => setPartTime(e.target.checked)}
          />
          <label htmlFor="pt">Part‑time</label>
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Desired minimum monthly stipend (₹)</label>
          {/* Slider from shadcn/ui */}
          <Slider
            defaultValue={[minStipend]}
            max={10000}
            step={500}
            onValueChange={([value]) => setMinStipend(value)}
          />
          <div className="text-xs text-gray-500">₹ {minStipend}</div>
        </div>
      </div>
    </aside>
  );
}