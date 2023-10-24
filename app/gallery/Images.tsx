"use client";

import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import ArtImage from "./Image";
import { useDebounce } from "use-debounce";
import { Image } from "@prisma/client";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

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
      <motion.section
        id="contact"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <p className="text-4xl text-primary font-semibold w-full text-center py-6 ">
          Welcome to the AI Art Gallery
        </p>
        <div className="flex justify-center p-4">
          <label htmlFor="email" className="relative">
            <Search className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3 text-primary" />
            <Input
              className="max-w-[500px] pl-10 rounded-full"
              placeholder="Search"
              onChange={handleSearch}
            />
          </label>
        </div>
      </motion.section>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 justify-center">
        {debouncedSelectedImages.map((image, index) => (
          <ArtImage key={index} image={image} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Images;
