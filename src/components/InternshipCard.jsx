
import { Briefcase, MapPin, Calendar, Clock } from "lucide-react";

export default function InternshipCard({ item }) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition flex gap-4">
      

      <div className="flex-1 space-y-1 text-sm">
        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
          {item.item.title}

          {/* {item.activelyHiring && (
            <span className="bg-emerald-100 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded">
              Actively hiring
            </span>
          )} */}
        </h3>

        <p className="text-gray-600 font-medium text-xs">{item.item.company_name}</p>

        <div className="flex flex-wrap gap-4 text-xs text-gray-600 mt-2">
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" /> {item.item.work_from_home ? "Work From Home" : item.item.location_names}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" /> {item.item.duration}
          </span>
          <span className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" /> {item.item.stipend.salary}
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
          <Clock className="h-3 w-3" /> {item.item.posted_by_label}
        </div>
      </div>
    </div>
  );
}