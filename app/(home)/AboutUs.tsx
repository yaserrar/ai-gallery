"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const AboutUs = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      className="mt-10"
      id="about-us"
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
      <p className="text-4xl text-primary font-semibold w-full text-center py-6 hover:underline">
        About Us
      </p>
      <div className="grid md:grid-cols-5 grid-cols-1 items-center gap-10">
        <p className="font-medium mt-4 md:col-span-2 col-span-1 ">
          At AI Art Gallery, we are passionate about bringing art to life
          through the power of technology. Our mission is to bridge the gap
          between the traditional and digital art worlds, offering a unique
          platform where art enthusiasts and collectors can explore, appreciate,
          and acquire virtual masterpieces. We believe that art should be
          accessible to all, and {"we've"} harnessed the potential of artificial
          intelligence to create an immersive, interactive, and inclusive
          gallery experience.
        </p>
        <div className="flex justify-center md:col-span-3 col-span-1">
          <Image
            className="rounded-lg"
            src={theme === "light" ? "/about.png" : "/about-dark.png"}
            alt="about image"
            height={600}
            width={600}
            quality={100}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
