import { Funnel } from "lucide-react";

export default function FiltersSidebar({
  profiles,
  locations,
  profile,
  setProfile,
  location,
  setLocation,
  duration,
  setDuration,
}) {
  return (
    <aside className="w-[1000px] md:w-64 p-4 space-y-6 bg-white border rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-center flex items-center justify-center gap-2">
        <Funnel className="w-4 h-4 text-[#006bc2]" />
        Filters
      </h2>

      <div className="space-y-4 text-sm">
        <div className="space-y-2">
          <label className="block font-medium">Profile</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
          >
            {profiles.map((profile, index) => (
              <option key={index} value={profile}>
                {profile}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Location</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Max. duration (months)</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="0">All</option>
            <option value="1">1 month</option>
            <option value="2">2 months</option>
            <option value="3">3 months</option>
            <option value="4">4 months</option>
            <option value="6">6 months</option>
            <option value="12">12 months</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
