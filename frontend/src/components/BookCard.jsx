function BookCard({ book, onSelect }) {
  return (
    <button
      type="button"
      onClick={(event) => onSelect(book, event.currentTarget)}
      aria-label={`Select ${book.title}`}
      className="flex h-full w-full flex-col rounded-xl bg-white p-4 text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:ring-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <img
        src={book.image}
        alt={book.title}
        className="mb-3 h-40 w-full rounded-lg object-cover"
        loading="lazy"
      />
      <h3 className="line-clamp-2 text-base font-bold text-slate-900">{book.title}</h3>
      <p className="mb-2 text-sm text-slate-600">{book.author}</p>
      <p className="mt-auto text-lg font-semibold text-blue-700">${Number(book.price).toFixed(2)}</p>
    </button>
  );
}

export default BookCard;
