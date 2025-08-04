import { useState } from "react";

const BookCard = ({ book }) => {
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
        <span className="font-semibold">{book.authors}</span>
      </p>
      <p className="text-xs text-foreground bg-secondary/40 rounded p-2 w-full transition text-left">
        {book.description}
      </p>
    </div>
  );
};

export default BookCard;
