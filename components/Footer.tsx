"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import { buttonVariants } from "./ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.section
      className="container max-w-7xl py-6 mt-10"
      initial={{
        y: -50,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="flex">
        <div className="w-full md:w-2/3">
          <Link href="/" className="font-semibold text-xl text-primary">
            AI Art Gallery
          </Link>
          <p className="mt-6">
            Explore the AI Art Gallery, where technology and creativity unite to
            redefine the world of art. Immerse yourself in a digital realm
            filled with AI-generated masterpieces, discover new perspectives,
            and collect your favorites.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "link", size: "default" }),
              "hover:no-underline"
            )}
          >
            Home
          </Link>
          <Link
            href="/#about-us"
            className={cn(
              buttonVariants({ variant: "link", size: "default" }),
              "hover:no-underline"
            )}
          >
            About Us
          </Link>
          <Link
            href="/#contact-us"
            className={cn(
              buttonVariants({ variant: "link", size: "default" }),
              "hover:no-underline"
            )}
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center text-primary">
        Designed and Developed by{" "}
        <Link
          href="https://www.linkedin.com/in/youssefaserrar/"
          className={cn(
            buttonVariants({ variant: "link", size: "default" }),
            "hover:no-underline p-0 pl-2 font-semibold text-base"
          )}
        >
          Youssef Aserrar
        </Link>
      </div>
    </motion.section>
  );
};

export default Footer;
