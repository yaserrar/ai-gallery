import Image from "next/image";
import AboutUs from "./AboutUs";
import Home from "./Home";
import ContactUs from "./ContactUs";

export default function page() {
  return (
    <main className="pt-8">
      <Home />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
