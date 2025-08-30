import { PrismaClient } from "@prisma/client"; // or your custom output path
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      {
        name: "Feather Wand Toy",
        description: "Interactive wand keeps your cat active.",
        category: "toys",
        priceCents: 999,
        imageUrl: "https://picsum.photos/seed/feather/600/400",
      },
      {
        name: "Catnip Mouse",
        description: "Plush mouse filled with organic catnip.",
        category: "toys",
        priceCents: 599,
        imageUrl: "https://picsum.photos/seed/mouse/600/400",
      },
      {
        name: "Grain-Free Salmon Dry Food (2kg)",
        description: "High-protein salmon kibble.",
        category: "food",
        priceCents: 2499,
        imageUrl: "https://picsum.photos/seed/salmon/600/400",
      },
      {
        name: "Chicken Treats (150g)",
        description: "Soft-baked chicken treats.",
        category: "food",
        priceCents: 799,
        imageUrl: "https://picsum.photos/seed/chicken/600/400",
      },
      {
        name: "Cozy Cat Bed",
        description: "Round plush bed with non-slip bottom.",
        category: "accessories",
        priceCents: 2999,
        imageUrl: "https://picsum.photos/seed/bed/600/400",
      },
      {
        name: "Sisal Scratching Post",
        description: "Tall post to protect your furniture.",
        category: "accessories",
        priceCents: 3499,
        imageUrl: "https://picsum.photos/seed/scratch/600/400",
      },
    ],
  });

  console.log("Seeded cat products ✅");
}

main().finally(() => prisma.$disconnect());
