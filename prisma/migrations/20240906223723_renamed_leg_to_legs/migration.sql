/*
  Warnings:

  - You are about to drop the column `leg` on the `Build` table. All the data in the column will be lost.
  - Added the required column `legs` to the `Build` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Build" DROP COLUMN "leg",
ADD COLUMN     "legs" VARCHAR(255) NOT NULL;
