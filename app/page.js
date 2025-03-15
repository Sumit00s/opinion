import { getOpinions } from "./_lib/data_service";
import OpinionsList from "./_components/OpinionsList";
import CreatePost from "./_components/CreatePost";
import { FilterDropdown } from "./_components/FilterDropdown";

export default async function Home({ searchParams }) {
  // Fetch all opinions
  let opinions = await getOpinions();

  if(opinions.length == 0) {
    return <h1>No Opinions Yet...</h1>
  }

  // Extract filter from URL
  const filter = searchParams.filter || "all";

  // Apply sorting based on filter
  if (filter === "most-liked") {
    opinions = opinions.sort((a, b) => b.upvote - a.upvote);
  } else if (filter === "most-disliked") {
    opinions = opinions.sort((a, b) => b.downvote - a.downvote);
  }

  return (
    <div>
      {/* Use Client Component for the Dropdown */}
      <FilterDropdown />

      <div className="mt-10 w-full mx-auto">
        <OpinionsList opinions={opinions} />
        <CreatePost />
      </div>
    </div>
  );
}
