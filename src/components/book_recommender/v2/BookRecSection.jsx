import { useState } from "react";
import SearchInput from "./SearchInput";
import RecommendationList from "./RecommendationList";
import Reasoning from "./Reasoning";
import { ArrowDown, GithubIcon, BookText, ChevronDown, ChevronUp } from "lucide-react";

const BookRecSection = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [reason, setReason] = useState({});
  const [showDescription, setShowDescription] = useState(false);
  const [showSamples, setShowSamples] = useState(false);

  // let URL = "http://127.0.0.1:8000";
  // let URL = "https://book-recommender-demo.tuanqpham0921.com/recommend_books";

  let URL_v1 = "https://bookrec-v1-978889476909.us-central1.run.app";
  let URL_v2 = "https://semantic-book-recommender-978889476909.europe-west1.run.app";

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
      <div className="flex items-center justify-start gap-3 mb-2 z-10 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-left">
          Book Recommender
        </h1>
        <a href="https://github.com/tuanqpham0921/Semantic-Book-Recommender" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
        <a href="https://medium.com/@tuanqpham0921/book-recommender-project-347a85a9d4ea" target="_blank" rel="noopener noreferrer">
          <BookText />
        </a>
      </div>

      <div className="w-full max-w-2xl mb-6 z-10">
        <div className="flex items-center gap-4 mb-2">
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Learn more</span>
            {showDescription ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          
          <button
            onClick={() => setShowSamples(!showSamples)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Sample Inputs</span>
            {showSamples ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
        
        {showDescription && (
          <div className="text-left mt-3 p-4 bg-card rounded-lg border animate-in slide-in-from-top-2 duration-200">
            <p className="text-sm text-foreground mb-3">
              This AI-powered book recommendation system uses semantic search and natural language 
              processing to understand your preferences and suggest books you'll love.
            </p>

            <div className="space-y-2 text-xs text-muted-foreground mb-3">
              <p><strong>Current Version (2.0.0):</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Input your book preferences with <em>Author, Genre, Key Words, Pages, Children</em> and <em>Tone</em> etc.</li>
                <li>Limited to <em>Fiction</em> and <em>Non-Fiction</em> genres in this version</li>
                <li>Please ensure correct spelling of author/keywords names for best results (no spell check YET)</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs text-muted-foreground mb-3">
              <p><strong>Try to Pay Attention:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>How the smart filters influence the results</li>
                <li>For example: Key Words - World War II - will have World War II in the description</li>
                <li>The smart filters limitations, what it's missing or got wrong</li>
              </ul>
            </div>
          </div>
        )}

        {showSamples && (
          <div className="text-left mt-3 p-4 bg-card rounded-lg border animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-2 text-xs text-muted-foreground mb-3">
              <p><strong>Sample Inputs:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Books written by Stephen King</li>
                <li>300 page or more books by Stephen King with a sad tone and take place in Maine</li>
                <li>Science nonfiction book with at least 500 pages about climate change</li>
                <li>A non fiction book on World War II with a somber voice</li>
                <li>A short story collection with dark humor for kids, under 180 pages</li>
              </ul>

              <p className="text-sm text-foreground mb-3">
                (Experiment with different wording to see how the results change)
              </p>
            </div>
          </div>
        )}
      </div>

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
