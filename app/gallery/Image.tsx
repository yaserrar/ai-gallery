import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ImageType } from "./Images";
import { motion } from "framer-motion";

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

const ArtImage = ({ image, index }: { image: ImageType; index: number }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
          className="flex flex-col justify-center items-center"
        >
          <div className="group duration-300 active:scale-[98%]">
            <img
              className="rounded-2xl shadow-lg group-hover:opacity-70 duration-300"
              src={image.path}
              alt={image.title}
            />
            <p className="text-md p-2 font-medium ">{image.title}</p>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <p className="text-center px-4 text-primary">{image.title}</p>
          </DialogTitle>
        </DialogHeader>
        <img
          className="rounded-2xl shadow-lg"
          src={image.path}
          alt={image.title}
        />
        <DialogFooter className="items-center flex">
          <div className="justify-center flex items-center">
            <a
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full"
              )}
              href={image.path}
              download
            >
              Download
            </a>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ArtImage;
