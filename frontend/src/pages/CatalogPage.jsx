import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import CategoryTabs from '../components/CategoryTabs';
import BookCard from '../components/BookCard';
import Cart from '../components/Cart';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';
const PAGE_SIZE = 12;

function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('top');
  const [books, setBooks] = useState([]);
  const [bookQtyInput, setBookQtyInput] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [cart, setCart] = useState([]);
  const [placingOrder, setPlacingOrder] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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

  function handleBookQtyChange(bookId, value) {
    const parsed = Number.parseInt(value, 10);
    setBookQtyInput((prev) => ({
      ...prev,
      [bookId]: Number.isInteger(parsed) && parsed > 0 ? parsed : 1
    }));
  }

  function addToCart(bookId) {
    const book = books.find((b) => b.id === bookId);
    if (!book) return;

    const qty = bookQtyInput[bookId] || 1;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === book.id);
      if (existing) {
        return prev.map((i) =>
          i.id === book.id ? { ...i, qty: i.qty + qty } : i
        );
      }

      return [...prev, { ...book, qty }];
    });
  }

  function updateCartQty(bookId, value) {
    const parsed = Number.parseInt(value, 10);
    const safeQty = Number.isInteger(parsed) && parsed > 0 ? parsed : 1;
    setCart((prev) => prev.map((item) => (item.id === bookId ? { ...item, qty: safeQty } : item)));
  }

  async function placeOrder() {
    if (cart.length === 0) return;

    setPlacingOrder(true);
    setError('');
    setSuccessMessage('');

    try {
      await axios.post(`${API_BASE_URL}/api/orders`, {
        items: cart.map((item) => ({
          bookId: item.id,
          qty: item.qty
        }))
      });

      setCart([]);
      setSuccessMessage('Order placed successfully!');
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
        <p className="mt-1 text-sm text-slate-600">Browse books by category, add to cart, and place an order.</p>
      </header>

      <CategoryTabs activeCategory={activeCategory} onChange={setActiveCategory} />

      {successMessage && (
        <p className="mb-4 rounded-lg bg-emerald-100 px-4 py-3 text-sm font-medium text-emerald-800">{successMessage}</p>
      )}

      {error && (
        <p className="mb-4 rounded-lg bg-rose-100 px-4 py-3 text-sm font-medium text-rose-800">{error}</p>
      )}

      <section className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div>
          {loading ? (
            <div className="rounded-xl bg-white p-6 text-sm text-slate-500 shadow-sm ring-1 ring-slate-200">Loading books...</div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {visibleBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    quantity={bookQtyInput[book.id] || 1}
                    onQuantityChange={handleBookQtyChange}
                    onAddToCart={addToCart}
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

        <Cart
          cartItems={cart}
          onUpdateQty={updateCartQty}
          onPlaceOrder={placeOrder}
          placingOrder={placingOrder}
        />
      </section>
    </main>
  );
}

export default CatalogPage;
