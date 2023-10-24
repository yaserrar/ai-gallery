"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.section
      className="mt-10"
      id="contact-us"
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
        Contact Us
      </p>
      <div className="mb-20 sm:mb-28 w-full text-center flex justify-center">
        <form className="mt-10 gap-5 flex flex-col w-full md:w-1/2">
          <Input
            className="rounded-full"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <Textarea
            className="rounded-2xl"
            name="message"
            placeholder="Your message"
            required
            rows={10}
            maxLength={5000}
          />
          <Button variant="outline" className="rounded-full">
            Submit
          </Button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactUs;
