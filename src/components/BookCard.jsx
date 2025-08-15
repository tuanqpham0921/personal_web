import { useState } from "react";

const MAX_DESC_LENGTH = 120;

const BookCard = ({ book }) => {
  const [showMore, setShowMore] = useState(false);

  const shouldTrim = book.description && book.description.length > MAX_DESC_LENGTH;
  const displayDesc = showMore || !shouldTrim
    ? book.description
    : book.description.slice(0, MAX_DESC_LENGTH) + "…";

  return (
    <div className="bg-card rounded-lg shadow-md w-60 flex-shrink-0 p-4 flex flex-col items-start transition-transform duration-200 hover:shadow-lg hover:-translate-y-2">
      <img
        src={book.thumbnail}
        alt={book.title}
        className="w-full h-40 object-cover rounded mb-3 border"
      />
      <h3 className="text-lg font-bold text-primary mb-1 text-left w-full">
        {book.title}
      </h3>
      <p className="text-xs text-muted-foreground mb-1 text-left w-full">
        <span className="font-semibold">{book.authors ? book.authors.split(';').join(', ') : ''}</span>
      </p>
      <p className="text-xs text-muted-foreground mb-2 text-left w-full">
        {book.simple_categories && <span>{book.simple_categories}</span>}
        {book.simple_categories && book.num_pages && <span> • </span>}
        {book.num_pages && <span>{book.num_pages} pages</span>}
      </p>
      <p className="text-xs text-foreground bg-secondary/40 rounded p-2 w-full transition text-left">
        {displayDesc}
        {shouldTrim && (
          <button
            className="ml-1 text-primary underline text-xs"
            onClick={() => setShowMore((v) => !v)}
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        )}
      </p>
    </div>
  );
};

export default BookCard;
