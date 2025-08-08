const SearchInput = ({
  query,
  setQuery,
  selectedCategory,
  setSelectedCategory,
  selectedTone,
  setSelectedTone,
  pageNumber,
  setPageNumber,
  handleSubmit,
  loading,
}) => {
  const categories = ['All', "Children's Fiction", "Children's Nonfiction", 'Fiction', 'Nonfiction'];
  const tones = ['All', 'Happy', 'Surprising', 'Angry', 'Suspenseful', 'Sad'];

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-5xl mb-6 z-10 px-4 relative">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        {/* Description Input */}
        <div className="flex flex-col col-span-2">
          <label className="text-sm font-medium mb-1">Description of a book:</label>
          <input
            type="text"
            placeholder="e.g., A story about forgiveness"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          >
            {categories.map((category, idx) => (
              <option key={idx}>{category}</option>
            ))}
          </select>
        </div>

        {/* Emotional Tone Dropdown */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Emotional Tone:</label>
          <select
            value={selectedTone}
            onChange={(e) => setSelectedTone(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          >
            {tones.map((tone, idx) => (
              <option key={idx}>{tone}</option>
            ))}
          </select>
        </div>

        {/* Page Number Input */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Max Page Number:</label>
          <input
            type="number"
            placeholder="e.g., 300"
            value={pageNumber}
            onChange={(e) => setPageNumber(e.target.value)}
            className="border rounded px-3 py-2 w-full"
            min={1}
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-5 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-primary text-white py-2 px-8 rounded hover:bg-primary-dark"
            disabled={loading}
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
