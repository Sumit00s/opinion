import { getOpinions } from "../_lib/data_service";
import AdminOpinionsList from "../_components/AdminOpinionsList";
import CreatePost from "../_components/CreatePost";
import { FilterDropdown } from "../_components/FilterDropdown";
import AdminAuthWrapper from "../_components/AdminAuthWrapper"; // Import the wrapper

export default async function Admin() {
  // Fetch all opinions
  let opinions = await getOpinions();

  return (
    <AdminAuthWrapper> {/* Protect the entire admin page */}
      <div>
        {/* Use Client Component for the Dropdown */}
        <FilterDropdown />
        <div className="mt-10 w-full mx-auto">
          {opinions.length === 0 ? (
            <h1 className="text-center font-bold text-white text-2xl">
              No Opinions Yet...
            </h1>
          ) : (
            <AdminOpinionsList opinions={opinions} />
          )}
        </div>
      </div>
    </AdminAuthWrapper>
  );
}
