import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import DJ2 from "./Images/DJ2.jpg";
import Maclub from "./Images/Maclub.png";
import wedding from "./Images/wedding.jpg";
import party from "./Images/party.jpg";
import corporate from "./Images/corporate.jpeg";
import PAsystem from "./Images/PAsystem.jpg";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: DJ2,
      caption: "DJ Performance at Club",
    },
    {
      url: "https://images.unsplash.com/photo-1763630055039-a284bbb3f01d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMGNsdWIlMjBzdGFnZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzYzNDA4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Stage Performance",
    },
    {
      url: "https://images.unsplash.com/photo-1619386113777-f92dd987bfb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMGVxdWlwbWVudCUyMGNvbnNvbGUlMjBtaXhlcnxlbnwxfHx8fDE3NzYzNDA4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Professional DJ Equipment",
    },
    {
      url: party,
      caption: "Club Night Energy",
    },
    {
      url: corporate,
      caption: "Corporate Event Entertainment",
    },
    {
      url: wedding,
      caption: "Wedding Reception",
    },
    {
      url: Maclub,
      caption: "DJ in Action",
    },
    {
      url: PAsystem,
      caption: "Sound System Setup",
    },
  ];

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
      } else if (e.key === "ArrowRight") {
        setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, images.length]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1763630055039-a284bbb3f01d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMGNsdWIlMjBzdGFnZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzYzNDA4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Gallery</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Moments captured from unforgettable events and performances
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden cursor-pointer bg-zinc-900"
                onClick={() => setSelectedImage(index)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${image.url})` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].caption}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <p className="text-white text-center mt-4 text-lg">
                {images[selectedImage].caption}
              </p>
            </motion.div>

            {/* Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
                }}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors"
              >
                Previous
              </button>
              <span className="text-white">
                {selectedImage + 1} / {images.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
                }}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}