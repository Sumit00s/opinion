"use client";

import { useState } from "react";
import { searchOpinions } from "../_lib/actions";
import OpinionsList from "../_components/OpinionsList";
import { Search } from "lucide-react";

export default function SearchPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
        setLoading(true);

        const data = await searchOpinions(searchQuery);
        setResults(data);

        setLoading(false);
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-4 text-white">
            <h1 className="text-2xl font-bold text-center">Search Opinions</h1>

            {/* Input and Button Wrapper */}
            <div className="flex gap-2 mt-4 items-center">
                <input
                    type="text"
                    placeholder="Enter name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-4 rounded-full text-white bg-black border border-gray-300"
                />
                <button 
                    onClick={handleSearch} 
                    className="bg-blue-600 rounded-full px-6 py-4 text-white cursor-pointer h-full  bg-gradient-to-r from-purple-700 via-pink-700 to-blue-800 
                        animate-random-gradient shadow-lg shadow-black"
                >
                    <Search/>
                </button>
            </div>

            {loading && <p className="text-center mt-4">Loading...</p>}

            <div className="mt-6">
                {results.length > 0 ? (
                    <OpinionsList opinions={results} />
                ) : (
                    <p className="text-center mt-4">No results found.</p>
                )}
            </div>
        </div>
    );
}
