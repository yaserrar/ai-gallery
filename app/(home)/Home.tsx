"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Home = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      id="home"
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
      <p className="text-4xl text-primary font-semibold w-full text-center py-6">
        Welcome to the AI Art Gallery
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center mt-4">
        <div className="">
          <p className="font-medium text-lg mb-5">
            Immerse yourself in the world of AI art as you explore captivating
            collections and experience the magic of the canvas like never
            before.
          </p>
          <Link
            href="./gallery"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full"
            )}
          >
            Discover Art
          </Link>
        </div>
        <div className="col-span-1 md:col-span-2 justify-center flex">
          <Image
            className="rounded-lg"
            src={theme === "dark" ? "/home-dark.png" : "/home.png"}
            alt="home image"
            height={500}
            width={500}
            quality={100}
          />
        </div>
        <div className="">
          <p className="font-medium text-lg">
            Step into a digital realm where AI art comes to life. Walk through
            our virtual gallery rooms, marvel at curated AI artworks, and dive
            deeper into the AI {"artist's"} world with a simple click.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
