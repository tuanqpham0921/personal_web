const SearchInput = ({
  query,
  setQuery,
  handleSubmit,
  loading,
}) => {
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-6 z-10 px-4 relative">
      <div className="flex flex-col gap-4">
        {/* Description Input */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="e.g., A story about forgiveness"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-primary text-white py-2 px-8 rounded hover:bg-primary-dark"
            disabled={loading || !query.trim()}
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
