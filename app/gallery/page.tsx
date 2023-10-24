import { prisma } from "@/lib/prisma";
import Images from "./Images";

export default async function page() {
  const images = await prisma.image.findMany();

  return (
    <main className="pt-8">
      <Images images={images} />
    </main>
  );
}
