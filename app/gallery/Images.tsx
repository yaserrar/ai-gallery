"use client";

import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ChangeEvent, useState } from "react";
import ArtImage from "./Image";
import { useDebounce } from "use-debounce";
import { Image } from "@prisma/client";
import { Search } from "lucide-react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export type ImageType = { title: string; path: string };

const Images = ({ images }: { images: Image[] }) => {
  const [selectedImages, setSelectedImages] = useState(images);
  const [debouncedSelectedImages] = useDebounce(selectedImages, 500);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    setSelectedImages(() =>
      images.filter((image) => image.title.toLowerCase().includes(query))
    );
  };

  return (
    <div>
      <div className="flex justify-center p-4">
        <label
          htmlFor="email"
          className="relative text-gray-400 focus-within:text-gray-600 block"
        >
          <Search className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" />
          <Input
            className="max-w-[400px]"
            placeholder="Search"
            onChange={handleSearch}
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 justify-center">
        {debouncedSelectedImages.map((image, i) => (
          <motion.div
            key={i}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
            className="flex flex-col justify-center items-center"
          >
            <ArtImage image={image} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Images;
