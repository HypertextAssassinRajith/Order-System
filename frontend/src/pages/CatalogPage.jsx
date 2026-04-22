import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import CategoryTabs from '../components/CategoryTabs';
import BookCard from '../components/BookCard';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';
const PAGE_SIZE = 12;
const GRADES = ['A', 'B', 'C'];

function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('top');
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [placingOrder, setPlacingOrder] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState('A');
  const [orderQtyInput, setOrderQtyInput] = useState(1);

  useEffect(() => {
    async function fetchBooks() {
      setLoading(true);
      setError('');
      setSuccessMessage('');
      setPage(1);
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/books`, {
          params: { category: activeCategory }
        });
        setBooks(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load books.');
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(books.length / PAGE_SIZE));

  const visibleBooks = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return books.slice(start, start + PAGE_SIZE);
  }, [books, page]);

  function openOrderPopup(book) {
    setSelectedBook(book);
    setSelectedGrade('A');
    setOrderQtyInput(1);
  }

  function closeOrderPopup() {
    setSelectedBook(null);
  }

  async function placeOrder() {
    if (!selectedBook) return;
    const parsedQty = Number.parseInt(orderQtyInput, 10);
    const safeQty = Number.isInteger(parsedQty) && parsedQty > 0 ? parsedQty : 1;

    setPlacingOrder(true);
    setError('');
    setSuccessMessage('');

    try {
      await axios.post(`${API_BASE_URL}/api/orders`, {
        items: [
          {
            bookId: selectedBook.id,
            qty: safeQty
          }
        ]
      });

      setSuccessMessage(`Order placed successfully for grade ${selectedGrade}.`);
      closeOrderPopup();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to place order.');
    } finally {
      setPlacingOrder(false);
    }
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-6">
      <header className="mb-6 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-2xl font-bold text-slate-900">Book Catalog & Simple Ordering</h1>
        <p className="mt-1 text-sm text-slate-600">Browse books by category, select grade and quantity, and place an order.</p>
      </header>

      <CategoryTabs activeCategory={activeCategory} onChange={setActiveCategory} />

      {successMessage && (
        <p className="mb-4 rounded-lg bg-emerald-100 px-4 py-3 text-sm font-medium text-emerald-800">{successMessage}</p>
      )}

      {error && (
        <p className="mb-4 rounded-lg bg-rose-100 px-4 py-3 text-sm font-medium text-rose-800">{error}</p>
      )}

      <section>
        <div>
          {loading ? (
            <div className="rounded-xl bg-white p-6 text-sm text-slate-500 shadow-sm ring-1 ring-slate-200">Loading books...</div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                {visibleBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onSelect={openOrderPopup}
                  />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-lg bg-white p-3 shadow-sm ring-1 ring-slate-200">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="rounded-md border border-slate-300 px-3 py-1.5 text-sm disabled:opacity-40"
                >
                  Previous
                </button>
                <span className="text-sm font-medium text-slate-700">Page {page} of {totalPages}</span>
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="rounded-md border border-slate-300 px-3 py-1.5 text-sm disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl">
            <h2 className="text-lg font-bold text-slate-900">{selectedBook.title}</h2>
            <p className="mt-1 text-sm text-slate-600">Select grade, enter quantity, and place your order.</p>

            <fieldset className="mt-4">
              <legend className="text-sm font-semibold text-slate-800">Grade</legend>
              <div className="mt-2 flex gap-4">
                {GRADES.map((grade) => (
                  <label key={grade} className="flex items-center gap-2 text-sm text-slate-700">
                    <input
                      type="radio"
                      name="grade"
                      value={grade}
                      checked={selectedGrade === grade}
                      onChange={(e) => setSelectedGrade(e.target.value)}
                    />
                    {grade}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="mt-4 block text-sm font-semibold text-slate-800" htmlFor="order-qty-input">
              Quantity
            </label>
            <input
              id="order-qty-input"
              type="number"
              min="1"
              value={orderQtyInput}
              onChange={(e) => setOrderQtyInput(e.target.value)}
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={closeOrderPopup}
                className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={placeOrder}
                disabled={placingOrder}
                className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-emerald-300 hover:bg-emerald-700"
              >
                {placingOrder ? 'Placing Order...' : 'Place Order'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default CatalogPage;
