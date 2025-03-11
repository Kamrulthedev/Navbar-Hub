import type { MetaArgs } from "react-router";
import { motion } from "framer-motion";

export function meta({}: MetaArgs) {
  return [
    { title: "Responsive Navbar Hub" },
    { name: "description", content: "Welcome to Responsive Navbar Hub!" },
  ];
}



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-fuchsia-900 text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center h-[60vh]">
        <motion.h1
          className="text-6xl font-bold font-serif"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Our Blog
        </motion.h1>
        <motion.p
          className="text-lg mt-4 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover amazing articles on various topics written by professionals.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 transition-all rounded-full text-lg font-semibold shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Blogs
        </motion.button>
      </div>

      {/* Featured Blogs Section */}
      <div className="px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Featured Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Tech", "Travel", "Health"].map((category, index) => (
            <motion.div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg"
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <h3 className="text-2xl font-semibold">{category} Insights</h3>
              <p className="mt-2">Read our latest posts on {category}.</p>
              <button className="mt-4 text-fuchsia-600 hover:underline">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="px-6 py-12 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-8">Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Tech", "Health", "Travel", "Lifestyle", "Finance"].map((cat, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 bg-fuchsia-700 rounded-full shadow-md cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              {cat}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Latest Blogs Section */}
      <div className="px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["AI is the Future", "10 Best Travel Spots", "Healthy Lifestyle"].map(
            (blog, index) => (
              <motion.div
                key={index}
                className="bg-white text-black p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold">{blog}</h3>
                <p className="mt-2">Check out our latest blog on {blog}.</p>
                <button className="mt-4 text-fuchsia-600 hover:underline">
                  Read More
                </button>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="px-6 py-12 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="mt-2">Get the latest blogs delivered straight to your inbox!</p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-lg w-64 text-black"
          />
          <button className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 transition-all rounded-r-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}


