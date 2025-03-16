


import { useState } from "react";
import { motion } from "framer-motion";

export default function News() {
  const categories = ["World", "Tech", "Business", "Health", "Sports", "Entertainment"];
  const [activeCategory, setActiveCategory] = useState("World");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">24 TIMES</h1>
        <nav className="flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 font-medium ${activeCategory === cat ? "text-red-600 border-b-2 border-red-600" : "text-gray-600"}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center flex items-end p-6" style={{ backgroundImage: "url('/hero-news.jpg')" }}>
        <div className="bg-black bg-opacity-60 p-6 rounded-lg">
          <h2 className="text-4xl font-bold text-white">Breaking News: Major Global Event</h2>
          <p className="text-white mt-2">Stay updated with the latest news happening around the world.</p>
          <button className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg">Read More</button>
        </div>
      </section>

      {/* News Grid */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured News */}
        <motion.div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-black mb-4">Featured News</h3>
          <img src="/featured-news.jpg" alt="Featured" className="w-full h-60 object-cover rounded-lg" />
          <p className="mt-2">A deep dive into the latest developments in global politics and technology.</p>
        </motion.div>

        {/* Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Trending Now</h3>
          {["Tech Breakthrough", "Economic Crisis Update", "Sports Championship Highlights"].map((news, index) => (
            <div key={index} className="mb-3 border-b pb-2">
              <h4 className="font-semibold">{news}</h4>
              <p className="text-sm text-gray-600">Updated just now</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
