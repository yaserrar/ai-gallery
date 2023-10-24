import { prisma } from "@/lib/prisma";
import Images from "./Images";

export default async function page() {
  const images = await prisma.image.findMany();

  return (
    <main className="pt-8">
      <p className="text-4xl text-primary font-semibold w-full text-center py-6 ">
        Welcome to the AI Art Gallery
      </p>
      <Images images={images} />
    </main>
  );
}
