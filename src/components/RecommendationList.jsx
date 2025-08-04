import BookCard from './BookCard';

const RecommendationList = ({ books }) => {

  return (
    <>
      <div className="w-full flex flex-wrap justify-center gap-6 my-8 z-10">
        {books.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>

      {/* Total count displayed below the list */}
      {books.length > 1 && (
        <div className="text-center text-sm text-muted-foreground mb-8 z-10">
          Displaying {books.length} books
        </div>
      )}
    </>
  );
};

export default RecommendationList;
