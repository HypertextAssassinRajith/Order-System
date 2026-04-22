function BookCard({ book, quantity, onQuantityChange, onAddToCart }) {
  return (
    <article className="flex h-full flex-col rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <img
        src={book.image}
        alt={book.title}
        className="mb-3 h-40 w-full rounded-lg object-cover"
        loading="lazy"
      />
      <h3 className="line-clamp-2 text-base font-bold text-slate-900">{book.title}</h3>
      <p className="mb-2 text-sm text-slate-600">{book.author}</p>
      <p className="mb-3 text-lg font-semibold text-blue-700">${Number(book.price).toFixed(2)}</p>

      <div className="mt-auto flex items-center gap-2">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => onQuantityChange(book.id, e.target.value)}
          className="w-20 rounded-md border border-slate-300 px-2 py-2 text-sm"
        />
        <button
          type="button"
          onClick={() => onAddToCart(book.id)}
          className="flex-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default BookCard;
