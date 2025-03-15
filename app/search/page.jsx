"use client";

import { useState } from "react";
import { searchOpinions } from "../_lib/actions";
import OpinionsList from "../_components/OpinionsList";

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

            <div className="flex gap-2 mt-4">
                <input
                    type="text"
                    placeholder="Enter name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 text-white bg-black rounded border border-gray-300"
                />
                <button 
                    onClick={handleSearch} 
                    className="bg-blue-600 px-4 py-2 rounded text-white cursor-pointer"
                >
                    Search
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
