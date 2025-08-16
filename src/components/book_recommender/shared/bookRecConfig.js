// Configuration for different versions of Book Recommender

export const bookRecConfig = {
  v1: {
    version: "1.0.0",
    title: "Book Recommender",
    description: "This AI-powered book recommendation system uses basic filtering and search to find books based on your preferences. Choose from predefined categories and options to get personalized recommendations.",
    githubUrl: "https://github.com/tuanqpham0921/Semantic-Book-Recommender",
    mediumUrl: "https://medium.com/@tuanqpham0921/book-recommender-project-347a85a9d4ea",
    versionInfo: [
      "Simple filtering system with dropdown selections",
      "Choose from predefined <em>Categories</em>, <em>Tones</em>, and <em>Page Limits</em>",
      "Direct keyword matching for book descriptions",
      "Basic recommendation algorithm"
    ],
    attentionPoints: [
      "How different category filters affect the results",
      "The impact of tone selection on book recommendations",
      "Key words like Italy does not appear in all descriptions"
    ],
    sampleInputs: [
      "A book about space exploration",
      "A book about the history of Italy",
      "Find me a book about World War II",
    ]
  },
  v2: {
    version: "2.0.0", 
    title: "Book Recommender",
    description: "This AI-powered book recommendation system uses semantic search and natural language processing to understand your preferences and suggest books you'll love.",
    githubUrl: "https://github.com/tuanqpham0921/Semantic-Book-Recommender",
    mediumUrl: "https://medium.com/@tuanqpham0921/book-recommender-project-347a85a9d4ea",
    versionInfo: [
      "Input your book preferences with <em>Author, Genre, Key Words, Pages, Children</em> and <em>Tone</em> etc.",
      "Limited to <em>Fiction</em> and <em>Non-Fiction</em> genres in this version",
      "Please ensure correct spelling of author/keywords names for best results (no spell check YET)"
    ],
    attentionPoints: [
      "How the smart filters influence the results",
      "For example: Key Words - World War II - will have World War II in the description",
      "The smart filters limitations, what it's missing or got wrong"
    ],
    sampleInputs: [
      "Books written by Stephen King",
      "300 page or more books by Stephen King with a sad tone and take place in Maine",
      "Science nonfiction book with at least 500 pages about climate change",
      "A non fiction book on World War II with a somber voice",
      "A short story collection with dark humor for kids, under 180 pages"
    ]
  }
};

export const getBookRecConfig = (version) => {
  return bookRecConfig[version] || bookRecConfig.v2;
};
