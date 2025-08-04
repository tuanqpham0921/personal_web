import React, { useState } from "react";
import BookCard from "./BookCard";

export const BookRecSection = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load mock data from public/result_mock.json
  const fetchMockData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch('/result_mock.json');
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load mock data.");
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMockData();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24 relative">
      {/* Background theme */}
      <div className="absolute inset-0 bg-secondary/30 -z-10" />
      <h1 className="text-2xl font-bold mb-4 text-center z-10">
        Book Recommender
      </h1>
      <form onSubmit={handleSubmit} className="mb-6 w-full max-w-xl z-10">
        <input
          type="text"
          placeholder="Describe a book you like..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring"
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark"
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Recommendations"}
        </button>
      </form>

      {error && <div className="text-red-500 mb-4 z-10">{error}</div>}

      {books.length > 0 && (
        <div className="w-full flex flex-wrap justify-center gap-6 my-8 z-10">
          {books.map((book, idx) => (
            <BookCard key={idx} book={book} />
          ))}
        </div>
      )}

      {books.length === 0 && !loading && (
        <div className="text-muted-foreground text-center z-10">
          No recommendations yet.
        </div>
      )}
    </div>
  );
};

export default BookRecSection;
