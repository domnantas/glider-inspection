-- CreateTable
CREATE TABLE "Glider" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gliderTypeId" INTEGER NOT NULL,
    CONSTRAINT "Glider_gliderTypeId_fkey" FOREIGN KEY ("gliderTypeId") REFERENCES "GliderType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GliderType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Step" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "action" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gliderId" INTEGER NOT NULL,
    "gliderTypeId" INTEGER NOT NULL,
    CONSTRAINT "Step_gliderId_fkey" FOREIGN KEY ("gliderId") REFERENCES "Glider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Step_gliderTypeId_fkey" FOREIGN KEY ("gliderTypeId") REFERENCES "GliderType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Inspection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "gliderId" INTEGER NOT NULL,
    "completedBy" TEXT NOT NULL,
    CONSTRAINT "Inspection_gliderId_fkey" FOREIGN KEY ("gliderId") REFERENCES "Glider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "GliderType_name_key" ON "GliderType"("name");
