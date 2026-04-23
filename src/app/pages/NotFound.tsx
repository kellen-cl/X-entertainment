import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Page Not Found</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="bg-white text-black px-8 py-4 text-base font-semibold tracking-wide hover:bg-gray-200 transition-all hover:scale-105 flex items-center group"
            >
              <Home className="mr-2 w-5 h-5" />
              GO HOME
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border-2 border-white text-white px-8 py-4 text-base font-semibold tracking-wide hover:bg-white hover:text-black transition-all hover:scale-105 flex items-center group"
            >
              <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              GO BACK
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
