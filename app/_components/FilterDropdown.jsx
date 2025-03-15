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
import { Menu } from "lucide-react";

export function FilterDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get current filter from the URL
  const currentFilter = searchParams.get("filter") || "all";

  // Function to update the URL when a filter is selected
  const handleFilterChange = (filter) => {
    router.push(`/?filter=${filter}`, { scroll: false });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="fixed cursor-pointer top-20 left-10 -translate-x-1/2 p-2 bg-black border font-bold text-2xl rounded-full mt-2 z-10">
          <Menu />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-30 ml-12 mt-8 text-white bg-black border" align="end">
        <DropdownMenuLabel>Filter</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleFilterChange("all")}>
          All
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleFilterChange("most-liked")}>
          Most Like
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleFilterChange("most-disliked")}>
          Most Dislike
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
