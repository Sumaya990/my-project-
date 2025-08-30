import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";          // Prisma needs Node runtime
export const dynamic = "force-dynamic";   // avoid caching
export const revalidate = 0;

// GET /api/products
export async function GET() {
  try {
    const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

// POST /api/products
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, description, category, priceCents, imageUrl } = body;

    if (!name || typeof priceCents !== "number") {
      return NextResponse.json({ error: "name and priceCents are required" }, { status: 400 });
    }

    const product = await prisma.product.create({
      data: {
        name,
        description: description ?? null,
        category: category ?? "misc",
        priceCents,
        imageUrl: imageUrl ?? null,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}