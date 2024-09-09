-- CreateTable
CREATE TABLE "Build" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "rightHandArmament" TEXT[],
    "arrows" TEXT[],
    "leftHandArmament" TEXT[],
    "bolts" TEXT[],
    "head" VARCHAR(255) NOT NULL,
    "chest" VARCHAR(255) NOT NULL,
    "arms" VARCHAR(255) NOT NULL,
    "leg" VARCHAR(255) NOT NULL,
    "talisman" TEXT[],
    "item" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Build_pkey" PRIMARY KEY ("id")
);
