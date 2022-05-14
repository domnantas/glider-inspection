-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Inspection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gliderId" INTEGER NOT NULL,
    "completedBy" TEXT NOT NULL,
    CONSTRAINT "Inspection_gliderId_fkey" FOREIGN KEY ("gliderId") REFERENCES "Glider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Inspection" ("completedBy", "date", "gliderId", "id") SELECT "completedBy", "date", "gliderId", "id" FROM "Inspection";
DROP TABLE "Inspection";
ALTER TABLE "new_Inspection" RENAME TO "Inspection";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
