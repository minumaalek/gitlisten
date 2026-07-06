/*
  Warnings:

  - You are about to drop the column `creatorId` on the `Vibe` table. All the data in the column will be lost.
  - Added the required column `creator` to the `Vibe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vibe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "emoji" TEXT NOT NULL,
    "vibe" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "embed" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Vibe" ("createdAt", "description", "embed", "emoji", "id", "vibe") SELECT "createdAt", "description", "embed", "emoji", "id", "vibe" FROM "Vibe";
DROP TABLE "Vibe";
ALTER TABLE "new_Vibe" RENAME TO "Vibe";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
