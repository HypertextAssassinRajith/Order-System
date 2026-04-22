const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const categories = [
  { id: 'top', name: 'Top Selling' },
  { id: 'new', name: 'New Releases' },
  { id: 'lastMonth', name: 'Last Month Purchases' }
];

const books = [
  { title: 'Atomic Habits', author: 'James Clear', price: 18.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80', categoryId: 'top' },
  { title: 'Deep Work', author: 'Cal Newport', price: 16.49, image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80', categoryId: 'top' },
  { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', price: 29.99, image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=400&q=80', categoryId: 'top' },
  { title: 'Clean Code', author: 'Robert C. Martin', price: 27.5, image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80', categoryId: 'top' },
  { title: 'Sapiens', author: 'Yuval Noah Harari', price: 20.0, image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80', categoryId: 'top' },
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', price: 19.25, image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&q=80', categoryId: 'top' },
  { title: 'Tomorrow, and Tomorrow, and Tomorrow', author: 'Gabrielle Zevin', price: 14.75, image: 'https://images.unsplash.com/photo-1455885666463-9c2b88b4f46a?w=400&q=80', categoryId: 'new' },
  { title: 'The Heaven & Earth Grocery Store', author: 'James McBride', price: 17.6, image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80', categoryId: 'new' },
  { title: 'Yellowface', author: 'R. F. Kuang', price: 15.8, image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&q=80', categoryId: 'new' },
  { title: 'Fourth Wing', author: 'Rebecca Yarros', price: 22.4, image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80', categoryId: 'new' },
  { title: 'The Wager', author: 'David Grann', price: 21.1, image: 'https://images.unsplash.com/photo-1521056787327-7e0d143db9aa?w=400&q=80', categoryId: 'new' },
  { title: 'The Fraud', author: 'Zadie Smith', price: 18.1, image: 'https://images.unsplash.com/photo-1526285759904-71d1170ed2ac?w=400&q=80', categoryId: 'new' },
  { title: 'Educated', author: 'Tara Westover', price: 13.4, image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80', categoryId: 'lastMonth' },
  { title: 'Dune', author: 'Frank Herbert', price: 16.95, image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&q=80', categoryId: 'lastMonth' },
  { title: 'The Alchemist', author: 'Paulo Coelho', price: 12.6, image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80', categoryId: 'lastMonth' },
  { title: '1984', author: 'George Orwell', price: 11.99, image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&q=80', categoryId: 'lastMonth' },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 13.89, image: 'https://images.unsplash.com/photo-1496104679561-38b31df75fe0?w=400&q=80', categoryId: 'lastMonth' },
  { title: 'The Psychology of Money', author: 'Morgan Housel', price: 15.3, image: 'https://images.unsplash.com/photo-1509266272358-7701da638078?w=400&q=80', categoryId: 'lastMonth' },
  { title: 'Zero to One', author: 'Peter Thiel', price: 14.2, image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80', categoryId: 'top' },
  { title: 'Hooked', author: 'Nir Eyal', price: 16.2, image: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&q=80', categoryId: 'new' }
];

async function main() {
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.book.deleteMany();
  await prisma.category.deleteMany();

  await prisma.category.createMany({ data: categories });
  await prisma.book.createMany({ data: books });

  console.log('Seed completed with categories and books.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
