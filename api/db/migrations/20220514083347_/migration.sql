/*
  Warnings:

  - Added the required column `registration` to the `Glider` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Glider" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gliderTypeId" INTEGER NOT NULL,
    "registration" TEXT NOT NULL,
    CONSTRAINT "Glider_gliderTypeId_fkey" FOREIGN KEY ("gliderTypeId") REFERENCES "GliderType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Glider" ("gliderTypeId", "id") SELECT "gliderTypeId", "id" FROM "Glider";
DROP TABLE "Glider";
ALTER TABLE "new_Glider" RENAME TO "Glider";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
