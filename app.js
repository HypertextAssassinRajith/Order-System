// ===== PRODUCT DATA =====
// Each product has: id, name, image, weight, grades (array), basePrice, badge, sections[]
const PRODUCTS = [
  // ── Latest Releases ──
  {
    id: 1,
    name: "Basmati Rice",
    img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
    weight: "1 kg / 5 kg / 25 kg",
    grades: ["Premium Grade A", "Grade B", "Grade C"],
    basePrice: 4.50,
    badge: "new",
    badgeText: "New",
    sections: ["latest"]
  },
  {
    id: 2,
    name: "Extra Virgin Olive Oil",
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80",
    weight: "500 ml / 1 L / 5 L",
    grades: ["Cold Pressed Extra Virgin", "Virgin", "Pure"],
    basePrice: 8.99,
    badge: "new",
    badgeText: "New",
    sections: ["latest"]
  },
  {
    id: 3,
    name: "Whole Wheat Flour",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80",
    weight: "1 kg / 2 kg / 10 kg",
    grades: ["Stone Ground Grade A", "Grade B", "Standard"],
    basePrice: 2.80,
    badge: "new",
    badgeText: "New",
    sections: ["latest"]
  },
  {
    id: 4,
    name: "Coconut Milk",
    img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=400&q=80",
    weight: "400 ml / 1 L",
    grades: ["Full Fat Premium", "Lite", "Organic"],
    basePrice: 3.20,
    badge: "new",
    badgeText: "New",
    sections: ["latest"]
  },
  {
    id: 5,
    name: "Honey",
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80",
    weight: "250 g / 500 g / 1 kg",
    grades: ["Raw Wild Honey", "Organic Pure", "Standard"],
    basePrice: 7.50,
    badge: "new",
    badgeText: "New",
    sections: ["latest"]
  },
  {
    id: 6,
    name: "Green Tea",
    img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&q=80",
    weight: "100 g / 250 g / 500 g",
    grades: ["Premium Leaf", "First Flush", "Standard Bags"],
    basePrice: 5.20,
    badge: "new",
    badgeText: "New",
    sections: ["latest"]
  },
  {
    id: 7,
    name: "Organic Oats",
    img: "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?w=400&q=80",
    weight: "500 g / 1 kg",
    grades: ["Organic Rolled", "Quick Cook", "Steel Cut"],
    basePrice: 3.90,
    badge: "new",
    badgeText: "New",
    sections: ["latest"]
  },
  {
    id: 8,
    name: "Dark Chocolate",
    img: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=400&q=80",
    weight: "100 g / 200 g",
    grades: ["72% Cocoa Premium", "85% Cocoa", "55% Semi-sweet"],
    basePrice: 4.10,
    badge: "new",
    badgeText: "New",
    sections: ["latest"]
  },
  {
    id: 9,
    name: "Almonds",
    img: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&q=80",
    weight: "250 g / 500 g / 1 kg",
    grades: ["Premium Californian", "Grade A Whole", "Blanched"],
    basePrice: 9.99,
    badge: "new",
    badgeText: "New",
    sections: ["latest"]
  },
  {
    id: 10,
    name: "Dried Mango",
    img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80",
    weight: "200 g / 500 g",
    grades: ["Organic Unsweetened", "Lightly Sweetened", "Standard"],
    basePrice: 5.50,
    badge: "new",
    badgeText: "New",
    sections: ["latest"]
  },
  {
    id: 11,
    name: "Chia Seeds",
    img: "https://images.unsplash.com/photo-1548935580-dc81e0d59455?w=400&q=80",
    weight: "250 g / 500 g",
    grades: ["Organic Black", "Organic White", "Standard"],
    basePrice: 4.80,
    badge: "new",
    badgeText: "New",
    sections: ["latest"]
  },
  {
    id: 12,
    name: "Turmeric Powder",
    img: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80",
    weight: "100 g / 250 g / 500 g",
    grades: ["High Curcumin 5%", "Pure Organic", "Standard"],
    basePrice: 3.30,
    badge: "new",
    badgeText: "New",
    sections: ["latest"]
  },

  // ── Last Month ──
  {
    id: 13,
    name: "White Sugar",
    img: "https://images.unsplash.com/photo-1581447109200-bf2769116351?w=400&q=80",
    weight: "1 kg / 2 kg / 5 kg",
    grades: ["Refined Grade S1", "Caster Sugar", "Raw Brown"],
    basePrice: 1.80,
    badge: "month",
    badgeText: "Last Month",
    sections: ["lastmonth"]
  },
  {
    id: 14,
    name: "Full Cream Milk",
    img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80",
    weight: "1 L / 2 L",
    grades: ["Full Cream 3.5%", "Semi-Skimmed 1.5%", "Skimmed 0.1%"],
    basePrice: 2.10,
    badge: "month",
    badgeText: "Last Month",
    sections: ["lastmonth"]
  },
  {
    id: 15,
    name: "Cheddar Cheese",
    img: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=400&q=80",
    weight: "250 g / 500 g",
    grades: ["Aged 12 Months", "Mild 3 Months", "Extra Mature"],
    basePrice: 5.60,
    badge: "month",
    badgeText: "Last Month",
    sections: ["lastmonth"]
  },
  {
    id: 16,
    name: "Pasta",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
    weight: "500 g / 1 kg",
    grades: ["Bronze Die Semolina", "Whole Wheat", "Standard"],
    basePrice: 2.40,
    badge: "month",
    badgeText: "Last Month",
    sections: ["lastmonth"]
  },
  {
    id: 17,
    name: "Canned Tomatoes",
    img: "https://images.unsplash.com/photo-1566842600175-97dca3c5ad8e?w=400&q=80",
    weight: "400 g / 800 g",
    grades: ["San Marzano DOP", "Organic Whole", "Chopped Standard"],
    basePrice: 1.90,
    badge: "month",
    badgeText: "Last Month",
    sections: ["lastmonth"]
  },
  {
    id: 18,
    name: "Orange Juice",
    img: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=400&q=80",
    weight: "1 L / 2 L",
    grades: ["Freshly Squeezed", "100% Pure NFC", "From Concentrate"],
    basePrice: 3.50,
    badge: "month",
    badgeText: "Last Month",
    sections: ["lastmonth"]
  },
  {
    id: 19,
    name: "Brown Rice",
    img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&q=80",
    weight: "1 kg / 5 kg",
    grades: ["Long Grain Premium", "Short Grain", "Parboiled"],
    basePrice: 3.70,
    badge: "month",
    badgeText: "Last Month",
    sections: ["lastmonth"]
  },
  {
    id: 20,
    name: "Ground Coffee",
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80",
    weight: "250 g / 500 g",
    grades: ["Single Origin Arabica", "Espresso Blend", "Decaf"],
    basePrice: 7.80,
    badge: "month",
    badgeText: "Last Month",
    sections: ["lastmonth"]
  },
  {
    id: 21,
    name: "Lentils",
    img: "https://images.unsplash.com/photo-1615485291234-9d694218aeb3?w=400&q=80",
    weight: "500 g / 1 kg",
    grades: ["Red Split Premium", "Green Whole", "Beluga Black"],
    basePrice: 2.30,
    badge: "month",
    badgeText: "Last Month",
    sections: ["lastmonth"]
  },
  {
    id: 22,
    name: "Apple Vinegar",
    img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&q=80",
    weight: "500 ml / 1 L",
    grades: ["Raw Unfiltered with Mother", "Filtered Organic", "Standard"],
    basePrice: 4.20,
    badge: "month",
    badgeText: "Last Month",
    sections: ["lastmonth"]
  },
  {
    id: 23,
    name: "Sunflower Seeds",
    img: "https://images.unsplash.com/photo-1551269901-5c5e68ef6de4?w=400&q=80",
    weight: "250 g / 500 g",
    grades: ["Roasted Salted", "Raw Organic", "Hulled"],
    basePrice: 2.90,
    badge: "month",
    badgeText: "Last Month",
    sections: ["lastmonth"]
  },
  {
    id: 24,
    name: "Peanut Butter",
    img: "https://images.unsplash.com/photo-1558818498-28c1e002b655?w=400&q=80",
    weight: "340 g / 500 g",
    grades: ["Natural Crunchy", "Natural Smooth", "Classic Smooth"],
    basePrice: 5.10,
    badge: "month",
    badgeText: "Last Month",
    sections: ["lastmonth"]
  },

  // ── Top Selling ──
  {
    id: 25,
    name: "Eggs",
    img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80",
    weight: "6 pcs / 12 pcs / 30 pcs",
    grades: ["Free Range Large", "Organic Extra Large", "Standard Medium"],
    basePrice: 3.60,
    badge: "hot",
    badgeText: "Top Seller",
    sections: ["topselling"]
  },
  {
    id: 26,
    name: "Butter",
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80",
    weight: "250 g / 500 g",
    grades: ["Grass Fed Premium", "Unsalted Pure", "Salted Standard"],
    basePrice: 4.40,
    badge: "hot",
    badgeText: "Top Seller",
    sections: ["topselling"]
  },
  {
    id: 27,
    name: "Black Pepper",
    img: "https://images.unsplash.com/photo-1588618293066-0de5b76ef39f?w=400&q=80",
    weight: "50 g / 100 g / 250 g",
    grades: ["Whole Tellicherry", "Ground Fine", "Mixed Peppercorns"],
    basePrice: 3.00,
    badge: "hot",
    badgeText: "Top Seller",
    sections: ["topselling"]
  },
  {
    id: 28,
    name: "Tomato Sauce",
    img: "https://images.unsplash.com/photo-1559181567-c3190ca9be48?w=400&q=80",
    weight: "500 ml / 1 L",
    grades: ["Authentic Italian", "Organic Homemade Style", "Classic"],
    basePrice: 2.70,
    badge: "hot",
    badgeText: "Top Seller",
    sections: ["topselling"]
  },
  {
    id: 29,
    name: "Chickpeas",
    img: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&q=80",
    weight: "400 g / 800 g",
    grades: ["Premium Desi", "Kabuli Large", "Canned Ready"],
    basePrice: 1.70,
    badge: "hot",
    badgeText: "Top Seller",
    sections: ["topselling"]
  },
  {
    id: 30,
    name: "Sardines",
    img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80",
    weight: "125 g / 250 g",
    grades: ["In Olive Oil Premium", "In Tomato Sauce", "In Brine"],
    basePrice: 2.50,
    badge: "hot",
    badgeText: "Top Seller",
    sections: ["topselling"]
  },
  {
    id: 31,
    name: "Yoghurt",
    img: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=400&q=80",
    weight: "500 g / 1 kg",
    grades: ["Greek Full Fat 10%", "Low Fat 0%", "Natural Plain"],
    basePrice: 2.80,
    badge: "hot",
    badgeText: "Top Seller",
    sections: ["topselling"]
  },
  {
    id: 32,
    name: "Mixed Nuts",
    img: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=400&q=80",
    weight: "200 g / 500 g",
    grades: ["Premium Deluxe Blend", "Roasted Salted", "Raw Organic"],
    basePrice: 8.50,
    badge: "hot",
    badgeText: "Top Seller",
    sections: ["topselling"]
  },
  {
    id: 33,
    name: "Sea Salt",
    img: "https://images.unsplash.com/photo-1584255014406-2a68ea38e48c?w=400&q=80",
    weight: "250 g / 500 g / 1 kg",
    grades: ["Himalayan Pink Fine", "Fleur de Sel", "Coarse Sea Salt"],
    basePrice: 2.20,
    badge: "hot",
    badgeText: "Top Seller",
    sections: ["topselling"]
  },
  {
    id: 34,
    name: "Apple",
    img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80",
    weight: "1 kg / 2 kg / 5 kg",
    grades: ["Organic Gala", "Fuji Premium", "Granny Smith"],
    basePrice: 3.20,
    badge: "hot",
    badgeText: "Top Seller",
    sections: ["topselling"]
  },
  {
    id: 35,
    name: "Banana",
    img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80",
    weight: "1 kg / 1.5 kg",
    grades: ["Organic Cavendish", "Fair Trade", "Standard"],
    basePrice: 1.60,
    badge: "hot",
    badgeText: "Top Seller",
    sections: ["topselling"]
  },
  {
    id: 36,
    name: "Garlic",
    img: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=400&q=80",
    weight: "250 g / 500 g",
    grades: ["Organic Whole Bulbs", "Smoked", "Black Fermented"],
    basePrice: 2.10,
    badge: "hot",
    badgeText: "Top Seller",
    sections: ["topselling"]
  },

  // ── Offer Items ──
  {
    id: 37,
    name: "Spaghetti",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
    weight: "500 g / 1 kg",
    grades: ["Semolina Bronze Cut", "Whole Grain", "Standard"],
    basePrice: 1.50,
    originalPrice: 2.20,
    discount: "32% OFF",
    badge: "offer",
    badgeText: "32% OFF",
    sections: ["offers"]
  },
  {
    id: 38,
    name: "Strawberry Jam",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
    weight: "340 g / 680 g",
    grades: ["Extra Fruit No Sugar", "Classic Home Recipe", "Low Sugar"],
    basePrice: 2.50,
    originalPrice: 3.80,
    discount: "34% OFF",
    badge: "offer",
    badgeText: "34% OFF",
    sections: ["offers"]
  },
  {
    id: 39,
    name: "Corn Flakes",
    img: "https://images.unsplash.com/photo-1521483451569-e33803c0330c?w=400&q=80",
    weight: "375 g / 750 g",
    grades: ["High Fibre Wholegrain", "Original Classic", "Honey Glazed"],
    basePrice: 2.80,
    originalPrice: 4.20,
    discount: "33% OFF",
    badge: "offer",
    badgeText: "33% OFF",
    sections: ["offers"]
  },
  {
    id: 40,
    name: "Tomato Ketchup",
    img: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80",
    weight: "500 ml / 1 L",
    grades: ["Organic No Preservatives", "Classic Rich", "Low Sugar"],
    basePrice: 1.90,
    originalPrice: 2.90,
    discount: "34% OFF",
    badge: "offer",
    badgeText: "34% OFF",
    sections: ["offers"]
  },
  {
    id: 41,
    name: "Washing Powder",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80",
    weight: "1 kg / 3 kg",
    grades: ["Bio Concentrated", "Non-Bio Sensitive", "Colour Protect"],
    basePrice: 4.50,
    originalPrice: 7.00,
    discount: "36% OFF",
    badge: "offer",
    badgeText: "36% OFF",
    sections: ["offers"]
  },
  {
    id: 42,
    name: "Dish Soap",
    img: "https://images.unsplash.com/photo-1585565804112-f201f68c48b4?w=400&q=80",
    weight: "500 ml / 1 L",
    grades: ["Antibacterial Lemon", "Natural Eco", "Standard"],
    basePrice: 1.80,
    originalPrice: 2.60,
    discount: "31% OFF",
    badge: "offer",
    badgeText: "31% OFF",
    sections: ["offers"]
  },
  {
    id: 43,
    name: "Sparkling Water",
    img: "https://images.unsplash.com/photo-1606168094336-48f205f36278?w=400&q=80",
    weight: "500 ml / 1.5 L",
    grades: ["Natural Mineral", "Flavoured Lemon", "Standard"],
    basePrice: 0.90,
    originalPrice: 1.40,
    discount: "36% OFF",
    badge: "offer",
    badgeText: "36% OFF",
    sections: ["offers"]
  },
  {
    id: 44,
    name: "Crackers",
    img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80",
    weight: "200 g / 400 g",
    grades: ["Whole Grain Organic", "Classic Salted", "Herb & Olive Oil"],
    basePrice: 2.10,
    originalPrice: 3.00,
    discount: "30% OFF",
    badge: "offer",
    badgeText: "30% OFF",
    sections: ["offers"]
  },
  {
    id: 45,
    name: "Frozen Peas",
    img: "https://images.unsplash.com/photo-1587735243475-37196dcc0b5b?w=400&q=80",
    weight: "500 g / 1 kg",
    grades: ["Garden Petit Pois", "Sweet Marrowfat", "Standard"],
    basePrice: 1.60,
    originalPrice: 2.40,
    discount: "33% OFF",
    badge: "offer",
    badgeText: "33% OFF",
    sections: ["offers"]
  },
  {
    id: 46,
    name: "Canola Oil",
    img: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=400&q=80",
    weight: "1 L / 2 L / 5 L",
    grades: ["Cold Pressed Organic", "Refined Premium", "Standard"],
    basePrice: 3.20,
    originalPrice: 4.80,
    discount: "33% OFF",
    badge: "offer",
    badgeText: "33% OFF",
    sections: ["offers"]
  },
  {
    id: 47,
    name: "Black Tea",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
    weight: "100 g / 200 g",
    grades: ["Darjeeling First Flush", "English Breakfast", "Earl Grey"],
    basePrice: 4.00,
    originalPrice: 6.00,
    discount: "33% OFF",
    badge: "offer",
    badgeText: "33% OFF",
    sections: ["offers"]
  },
  {
    id: 48,
    name: "Shampoo",
    img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=80",
    weight: "250 ml / 500 ml",
    grades: ["Argan Oil Premium", "Daily Gentle", "Anti-Dandruff"],
    basePrice: 3.80,
    originalPrice: 5.50,
    discount: "31% OFF",
    badge: "offer",
    badgeText: "31% OFF",
    sections: ["offers"]
  }
];

// ===== STATE =====
let cart = [];
let currentProduct = null;

// ===== DOM HELPERS =====
const $ = id => document.getElementById(id);

// ===== RENDER PRODUCTS =====
function renderSection(sectionKey, containerId) {
  const container = $(containerId);
  if (!container) return;

  const products = PRODUCTS.filter(p => p.sections.includes(sectionKey));
  container.innerHTML = products.map(p => productCardHTML(p)).join('');

  // Attach click events
  container.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => openOrderModal(Number(card.dataset.id)));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openOrderModal(Number(card.dataset.id));
      }
    });
  });

  container.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openOrderModal(Number(btn.dataset.id));
    });
  });
}

function productCardHTML(p) {
  const hasDiscount = p.originalPrice != null;
  return `
    <article class="product-card" data-id="${p.id}" tabindex="0" role="button"
             aria-label="Order ${p.name}">
      ${p.badge ? `<span class="product-badge ${p.badge}">${p.badgeText}</span>` : ''}
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/400x400/e8f0fb/1a4f8a?text=${encodeURIComponent(p.name)}'">
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-weight">${p.weight}</div>
        <div class="product-price">
          <span class="price-current">$${p.basePrice.toFixed(2)}</span>
          ${hasDiscount ? `<span class="price-original">$${p.originalPrice.toFixed(2)}</span>` : ''}
          ${hasDiscount ? `<span class="price-discount">${p.discount}</span>` : ''}
        </div>
      </div>
      <button class="order-btn" data-id="${p.id}" aria-label="Order ${p.name}">
        🛒 Order Now
      </button>
    </article>
  `;
}

// ===== TABS =====
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.catalog-section').forEach(s => s.classList.remove('visible'));
      const target = tab.dataset.section;
      const section = document.querySelector(`.catalog-section[data-section="${target}"]`);
      if (section) section.classList.add('visible');
    });

    tab.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        tab.click();
      }
    });
  });
}

// ===== ORDER MODAL =====
function openOrderModal(productId) {
  currentProduct = PRODUCTS.find(p => p.id === productId);
  if (!currentProduct) return;

  const p = currentProduct;

  $('modal-product-img').src = p.img;
  $('modal-product-img').onerror = function () {
    this.src = `https://placehold.co/80x80/e8f0fb/1a4f8a?text=${encodeURIComponent(p.name)}`;
  };
  $('modal-product-name').textContent = p.name;
  $('modal-product-weight').textContent = p.weight;

  // Populate grade select
  const gradeSelect = $('grade-select');
  gradeSelect.innerHTML = p.grades.map((g, i) =>
    `<option value="${i}">${g}</option>`
  ).join('');

  // Reset qty
  $('qty-input').value = 1;

  updateModalPrice();

  const overlay = $('order-modal-overlay');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');

  // Focus the grade select for accessibility
  setTimeout(() => gradeSelect.focus(), 100);
}

function closeOrderModal() {
  const overlay = $('order-modal-overlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  currentProduct = null;
}

function updateModalPrice() {
  if (!currentProduct) return;
  const qty = Math.max(1, parseInt($('qty-input').value) || 1);
  const total = (currentProduct.basePrice * qty).toFixed(2);
  $('modal-total-price').textContent = `$${total}`;
  $('modal-unit-price').textContent = `$${currentProduct.basePrice.toFixed(2)} × ${qty}`;
}

function changeQty(delta) {
  const input = $('qty-input');
  const newVal = Math.max(1, Math.min(99, (parseInt(input.value) || 1) + delta));
  input.value = newVal;
  updateModalPrice();
}

function confirmOrder() {
  if (!currentProduct) return;

  const gradeSelect = $('grade-select');
  const grade = currentProduct.grades[gradeSelect.value];
  const qty = Math.max(1, parseInt($('qty-input').value) || 1);
  const total = currentProduct.basePrice * qty;

  const item = {
    id: Date.now(),
    productId: currentProduct.id,
    name: currentProduct.name,
    img: currentProduct.img,
    grade,
    qty,
    unitPrice: currentProduct.basePrice,
    total
  };

  cart.push(item);
  updateCartUI();
  closeOrderModal();
  showToast(`✅ ${currentProduct.name} added to your order!`);
}

// ===== CART =====
function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  $('cart-count').textContent = count;

  const cartItems = $('cart-items');
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">🛒 Your cart is empty.<br>Tap a product to start ordering!</p>';
    $('cart-total-value').textContent = '$0.00';
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item" data-cart-id="${item.id}">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}"
           onerror="this.src='https://placehold.co/60x60/e8f0fb/1a4f8a?text=Item'">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">${item.grade} · Qty: ${item.qty}</div>
      </div>
      <div class="cart-item-price">$${item.total.toFixed(2)}</div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove ${item.name}">✕</button>
    </div>
  `).join('');

  const grandTotal = cart.reduce((s, i) => s + i.total, 0);
  $('cart-total-value').textContent = `$${grandTotal.toFixed(2)}`;
}

function removeFromCart(itemId) {
  cart = cart.filter(i => i.id !== itemId);
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function openCartPanel() {
  $('cart-panel').classList.add('open');
  $('cart-panel-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartPanel() {
  $('cart-panel').classList.remove('open');
  $('cart-panel-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function checkout() {
  if (cart.length === 0) {
    showToast('⚠️ Your cart is empty. Please add items first.');
    return;
  }
  closeCartPanel();
  $('success-overlay').classList.add('open');
  cart = [];
  updateCartUI();
}

// ===== TOAST =====
let toastTimer = null;
function showToast(msg) {
  const toast = $('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Render all sections
  renderSection('latest',     'grid-latest');
  renderSection('lastmonth',  'grid-lastmonth');
  renderSection('topselling', 'grid-topselling');
  renderSection('offers',     'grid-offers');

  // Init tabs
  initTabs();

  // Cart button
  $('cart-btn').addEventListener('click', openCartPanel);
  $('cart-close-btn').addEventListener('click', closeCartPanel);
  $('cart-panel-overlay').addEventListener('click', closeCartPanel);

  // Modal close
  $('modal-close-btn').addEventListener('click', closeOrderModal);
  $('modal-cancel-btn').addEventListener('click', closeOrderModal);
  $('modal-confirm-btn').addEventListener('click', confirmOrder);
  $('order-modal-overlay').addEventListener('click', e => {
    if (e.target === $('order-modal-overlay')) closeOrderModal();
  });

  // Qty controls
  $('qty-decrease').addEventListener('click', () => changeQty(-1));
  $('qty-increase').addEventListener('click', () => changeQty(+1));
  $('qty-input').addEventListener('input', updateModalPrice);

  // Grade change → recalculate
  $('grade-select').addEventListener('change', updateModalPrice);

  // Checkout
  $('btn-checkout').addEventListener('click', checkout);
  $('btn-clear-cart').addEventListener('click', clearCart);

  // Success close
  $('btn-success-close').addEventListener('click', () => {
    $('success-overlay').classList.remove('open');
  });

  // Keyboard: Escape closes modals
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeOrderModal();
      closeCartPanel();
      $('success-overlay').classList.remove('open');
    }
  });

  // Initial cart render
  updateCartUI();
});
