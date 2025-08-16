import { useState } from "react";
import SearchInput from "./SearchInput";
import RecommendationList from "../shared/RecommendationList";
import Reasoning from "./Reasoning";
import BookRecHeader from "../shared/BookRecHeader";
import { getBookRecConfig } from "../shared/bookRecConfig";
import { ArrowDown } from "lucide-react";

const BookRecSection = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [reason, setReason] = useState({});

  // Get configuration for V2
  const config = getBookRecConfig('v2');

  // const URL = "http://127.0.0.1:8000";
  const URL = "https://semantic-book-recommender-978889476909.europe-west1.run.app";

  const reasonQuery = async (payload) => {
    try {
      const response = await fetch(`${URL}/reason_query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const reason = await response.json();
      setReason(reason);
      console.log("Received filters:", reason.filters);
      return reason;
    } catch (err) {
      console.error(err);
      setError("Failed to Reason the query.");
      throw err;
    }
  };

  const recommendBooks = async (payload, reason) => {
    console.log("Recommending Books");
    try {
      const response = await fetch(`${URL}/recommend_books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...payload, ...reason}),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      setBooks(data.recommendations);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch recommendations.");
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const payload = { description: query };
    console.log("Sending payload:", payload);

    setLoading(true);
    setError("");
    setReason({}); // Clear previous results
    setBooks([]); // Clear previous book results

    try {
      const reasonResult = await reasonQuery(payload);
      await recommendBooks(payload, reasonResult);
    } catch (err) {
      // Error handling is done in individual functions
    }

    setLoading(false);
    console.log("Done with one Query");
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
        handleSubmit={handleSubmit}
        loading={loading}
      />

      {error && <div className="text-red-500 mb-4 z-10">{error}</div>}
      
      <Reasoning reason={reason} loading={loading} />
      <RecommendationList books={books} />

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </div>
  );
};

export default BookRecSection;
