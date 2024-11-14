/*
  Warnings:

  - You are about to drop the `Pickup_Point` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pickup_Point" DROP CONSTRAINT "Pickup_Point_owner_id_fkey";

-- DropTable
DROP TABLE "Pickup_Point";

-- CreateTable
CREATE TABLE "PickupPoint" (
    "id" TEXT NOT NULL,
    "geolocation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "PickupPoint_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PickupPoint" ADD CONSTRAINT "PickupPoint_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
