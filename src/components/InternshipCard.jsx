import { Banknote, MapPin, Calendar, Clock, House } from "lucide-react";

export default function InternshipCard({ item }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-md transition flex gap-4">
      <div className="flex-1 space-y-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              {item.item.title}
              {/* {item.item.activelyHiring && (
            <span className="bg-emerald-100 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded">
              Actively hiring
            </span>
          )} */}
            </h3>

            <p className="text-[#8a8a8a] font-medium text-xs">
              {item.item.company_name}
            </p>
          </div>

          {item.item.company_logo ? (
            <img
              // src={item.item.company_logo}  // blocked due to backend CORS policy
              src="https://internshala.com/static/images/search/placeholder_logo.svg"
              alt="company logo"
              className="h-12 w-12 object-contain rounded-md hidden md:block"
            />
          ) : (
            <img
              src="https://internshala.com/static/images/search/placeholder_logo.svg"
              alt="company logo"
              className="h-12 w-12 object-contain rounded-md hidden md:block"
            />
          )}
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-gray-600 mt-2">
          <span className="flex items-center gap-1">
            {item.item.work_from_home ? (
              <span className="flex items-center gap-1">
                <House className="h-4 w-4" /> Work From Home
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {item.item.location_names?.join(", ")}
              </span>
            )}
          </span>

          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" /> {item.item.duration}
          </span>
          <span className="flex items-center gap-1">
            <Banknote className="h-4 w-4" /> {item.item.stipend.salary}
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
          <span className="bg-[#f8f8f8] rounded-xl pl-2 pr-2 flex items-center gap-1">
            <Clock className="h-3 w-3" /> {item.item.posted_by_label}
          </span>
        </div>
      </div>
    </div>
  );
}
