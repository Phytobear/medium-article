import { Search, Bell, Edit } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white border-b border-gray-200 z-50">
      <div className="px-4 sm:px-6">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <h1
              className="text-xl font-black text-black"
              style={{
                fontFamily: "Toledo-Bold",
                letterSpacing: "-0.03em",
                fontWeight: 900,
              }}
            >
              Medium
            </h1>
          </div>

          <div className="flex-1 mx-4 sm:mx-6 lg:mx-8">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:border-gray-300 focus:ring-0 focus:bg-white"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-1 px-3 py-1.5 text-sm hover:text-gray-900 text-gray-600">
              <Edit className="h-4 w-4" />
              <span>Write</span>
            </button>
            <button className="p-1.5 rounded-full hover:bg-gray-100">
              <Bell className="h-4 w-4 text-gray-600" />
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-100">
              <div className="w-full h-full rounded-full bg-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
