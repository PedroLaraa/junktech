/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Pickup_Point_owner_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
