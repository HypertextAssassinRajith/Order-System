const tabs = [
  { key: 'top', label: 'Top Selling' },
  { key: 'new', label: 'New Releases' },
  { key: 'lastMonth', label: 'Last Month Purchases' }
];

function CategoryTabs({ activeCategory, onChange }) {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => onChange(tab.key)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeCategory === tab.key
              ? 'bg-blue-600 text-white shadow'
              : 'bg-white text-slate-700 hover:bg-blue-50'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
