import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import prisma from "../../../../prisma/client";

const createBuildSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  rightHandArmament: z.string().array().min(0).max(3),
  arrows: z.string().array().max(2),
  leftHandArmament: z.string().array().min(0).max(3),
  bolts: z.string().array().max(2),
  head: z.string().max(255),
  chest: z.string().max(255),
  arms: z.string().max(255),
  legs: z.string().max(255),
  talisman: z.string().array().max(4),
  item: z.string().array().max(10),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const validation = createBuildSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newBuild = await prisma.build.create({
    data: {
      title: body.title,
      description: body.description,
      rightHandArmament: body.rightHandArmament,
      arrows: body.arrows,
      leftHandArmament: body.leftHandArmament,
      bolts: body.bolts,
      head: body.head,
      chest: body.chest,
      arms: body.arms,
      legs: body.legs,
      talisman: body.talisman,
      item: body.item,
    },
  });

  return NextResponse.json(newBuild, { status: 201 });
}

export async function GET(request: NextRequest) {
  const builds = await prisma.build.findMany({
    take: 20,
    select: {
      title: true,
      description: true,
      createdAt: true,
      id: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(builds, { status: 200 });
}
