import { ArrowRight } from "lucide-react";

const SearchInput = ({
  query,
  setQuery,
  handleSubmit,
  loading,
}) => {
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-6 z-10 relative">
      <div className="flex flex-col gap-4">
        {/* Description Input with Arrow */}
        <div className="flex flex-col">
          <div className="relative">
            <input
              type="text"
              placeholder="e.g., A story about forgiveness"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border rounded px-3 py-2 w-full pr-12"
              disabled={loading}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-primary hover:text-primary-dark disabled:text-gray-400"
              disabled={loading || !query.trim()}
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
              ) : (
                <ArrowRight size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
