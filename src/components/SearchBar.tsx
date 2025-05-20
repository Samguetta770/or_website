import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center border border-gray-300 rounded-md p-2">
      <input
        type="text"
        placeholder="Search activities..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow p-2 outline-none"
      />
      <button onClick={() => onSearch(query)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        <Search size={18} />
      </button>
    </div>
  );
}
