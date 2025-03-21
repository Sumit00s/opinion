"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, SearchIcon, ThumbsDown, ThumbsUp, UserRound } from "lucide-react";
import Link from "next/link";

export function FilterDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentFilter = searchParams.get("filter") || "all";

  // Update URL when filter changes
  const handleFilterChange = (filter) => {
    if (filter === "all") {
      router.push("/", { scroll: false }); // Reset filter
    } else {
      router.push(`/?filter=${filter}`, { scroll: false });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="fixed top-20 left-10 -translate-x-1/2 p-3 rounded-full bg-black border border-gray-700 text-white shadow-lg transition-all duration-300 hover:shadow-neonGreen focus:ring-2 focus:ring-green-400 z-10">
          <Search className="w-6 h-6" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 ml-12 mt-2 p-2 text-white bg-black bg-opacity-70 border border-gray-700 backdrop-blur-lg rounded-lg shadow-md transition-all duration-300">
        <DropdownMenuLabel className="text-gray-300">Filter</DropdownMenuLabel>
        <DropdownMenuSeparator className="border-gray-600" />
        <DropdownMenuItem className={`menu-item`}>
          <Link href="/search" className="flex items-center justify-center gap-2"><SearchIcon/> <span>Search Name</span></Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={`menu-item ${currentFilter == 'all'? 'bg-pink-700':null}`} onClick={() => handleFilterChange("all")}>
          <UserRound/> All
        </DropdownMenuItem>
        <DropdownMenuItem className={`menu-item ${currentFilter == 'most-liked'? 'bg-pink-700':null}`} onClick={() => handleFilterChange("most-liked")}>
          <ThumbsUp/> Most Liked
        </DropdownMenuItem>
        <DropdownMenuItem className={`menu-item ${currentFilter == 'most-disliked'? 'bg-pink-700':null}`} onClick={() => handleFilterChange("most-disliked")}>
          <ThumbsDown/> Most Disliked
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
