import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';

interface ImageType {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageType[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image: ImageType, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage) {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') closeLightbox();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
            onClick={() => openLightbox(image, index)}
          >
            <div className="aspect-video relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FiMaximize2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-sm">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <FiX className="w-8 h-8" />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <FiChevronLeft className="w-8 h-8" />
            </button>

            <motion.img
              key={selectedImage.src}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <FiChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-sm">{selectedImage.alt}</p>
              <p className="text-xs mt-1 text-gray-400">
                Image {currentIndex + 1} of {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery; 