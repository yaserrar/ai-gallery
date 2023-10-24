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
import Image from "next/image";

const ArtImage = ({ image }: { image: ImageType }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="group">
          <img
            className="rounded-lg shadow-lg group-hover:opacity-70 duration-300"
            src={image.path}
            alt={image.title}
          />
          {/* <Image
          width={500}
          height={500}
          className="rounded-lg shadow-lg hover:opacity-70 duration-300"
          src={image.path}
          alt={image.title}
        /> */}
          <p className="text-md p-2 font-medium ">{image.title}</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <p className="text-center px-4">{image.title}</p>
          </DialogTitle>
        </DialogHeader>
        <img
          className="rounded-lg shadow-lg"
          src={image.path}
          alt={image.title}
        />
        <DialogFooter className="items-center flex">
          <div className="justify-center flex items-center">
            <a
              className={cn(buttonVariants({ variant: "outline" }))}
              href={image.path}
              download={image.title}
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
