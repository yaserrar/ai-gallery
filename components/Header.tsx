import { cn } from "@/lib/utils";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import { buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <main className="border-b-2 border-primary fixed top-0 left-0 w-full bg-white dark:bg-black z-50">
      <nav className="flex justify-between p-2 container max-w-7xl text-sm items-center">
        <Link href="/" className="font-semibold text-xl text-primary">
          AI Art Gallery
        </Link>
        <section className="gap-3 items-center hidden md:flex">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "link", size: "default" }))}
          >
            Home
          </Link>
          <Link
            href="/#about-us"
            className={cn(buttonVariants({ variant: "link", size: "default" }))}
          >
            About Us
          </Link>
          <Link
            href="/#contact-us"
            className={cn(buttonVariants({ variant: "link", size: "default" }))}
          >
            Contact Us
          </Link>
        </section>
        <div className="flex items-center gap-3">
          <Link
            href="./gallery"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Discover Art
          </Link>
          <DarkModeButton />
        </div>
      </nav>
    </main>
  );
};

export default Header;
