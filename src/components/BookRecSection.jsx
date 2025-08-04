import React, { useState } from "react";
import SearchInput from "./SearchInput";
import RecommendationList from "./RecommendationList";

const BookRecSection = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTone, setSelectedTone] = useState("All");
  const [pageNumber, setPageNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return; // Prevent submit if description is empty

    // Build the payload for the API request
    const payload = {
      description: query,
      filters: {
        category: selectedCategory === "All" ? null : selectedCategory,
        tone: selectedTone === "All" ? null : selectedTone,
        max_pages: pageNumber ? parseInt(pageNumber) : null
      }
    };

    console.log("Sending payload:", payload);

    setLoading(true);
    setError("");

    try {
      const response = await fetch('https://book-recommender-fastapi-978889476909.europe-west1.run.app/recommend_books', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      setBooks(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch recommendations.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24 relative">
      <div className="absolute inset-0 bg-secondary/30 -z-10" />
      <h1 className="text-2xl font-bold mb-4 text-center z-10">
        Book Recommender DEMO
      </h1>

      <SearchInput
        query={query}
        setQuery={setQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedTone={selectedTone}
        setSelectedTone={setSelectedTone}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        handleSubmit={handleSubmit}
        loading={loading}
        disabled={!query.trim()} // Pass disabled prop to SearchInput
      />

      {error && <div className="text-red-500 mb-4 z-10">{error}</div>}

      <RecommendationList books={books} />
    </div>
  );
};

export default BookRecSection;
