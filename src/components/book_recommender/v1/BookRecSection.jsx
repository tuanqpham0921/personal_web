import { useState } from "react";
import SearchInput from "./SearchInput";
import RecommendationList from "../shared/RecommendationList";
import BookRecHeader from "../shared/BookRecHeader";
import { getBookRecConfig } from "../shared/bookRecConfig";
import { ArrowDown } from "lucide-react";

const BookRecSection = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTone, setSelectedTone] = useState("All");
  const [pageNumber, setPageNumber] = useState("");

  // Get configuration for V1
  const config = getBookRecConfig('v1');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return; // Prevent submit if description is empty

    // Build the payload for the API request
    const payload = {
      description: query,
      filters: {
        category: selectedCategory === "All" ? "All" : selectedCategory,
        tone: selectedTone === "All" ? "All" : selectedTone,
        max_pages: pageNumber ? parseInt(pageNumber) : null
      }
    };

    console.log("Sending payload:", payload);

    setLoading(true);
    setError("");

    const URL_v1 = "https://bookrec-v1-978889476909.us-central1.run.app";

    try {
      const response = await fetch(`${URL_v1}/recommend_books`, {
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
      
      <BookRecHeader 
        version={config.version}
        title={config.title}
        description={config.description}
        versionInfo={config.versionInfo}
        attentionPoints={config.attentionPoints}
        sampleInputs={config.sampleInputs}
        githubUrl={config.githubUrl}
        mediumUrl={config.mediumUrl}
      />

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

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </div>
  );
};

export default BookRecSection;