function Cart({ cartItems, onUpdateQty, onPlaceOrder, placingOrder }) {
  const total = cartItems.reduce((sum, item) => sum + Number(item.price) * item.qty, 0);

  return (
    <aside className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <h2 className="mb-3 text-lg font-bold">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-sm text-slate-500">No items in cart.</p>
      ) : (
        <div className="space-y-3">
          {cartItems.map((item) => (
            <div key={item.id} className="rounded-lg bg-slate-50 p-3">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mb-2 text-xs text-slate-500">${Number(item.price).toFixed(2)} each</p>
              <div className="flex items-center justify-between gap-2">
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) => onUpdateQty(item.id, e.target.value)}
                  className="w-20 rounded border border-slate-300 px-2 py-1 text-sm"
                />
                <p className="text-sm font-semibold">${(Number(item.price) * item.qty).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 border-t border-slate-200 pt-4">
        <p className="mb-3 flex items-center justify-between text-sm font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </p>
        <button
          type="button"
          disabled={cartItems.length === 0 || placingOrder}
          onClick={onPlaceOrder}
          className="w-full rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-emerald-300 hover:bg-emerald-700"
        >
          {placingOrder ? 'Placing Order...' : 'Place Order'}
        </button>
      </div>
    </aside>
  );
}

export default Cart;
