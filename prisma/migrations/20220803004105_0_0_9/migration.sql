/*
  Warnings:

  - You are about to alter the column `isWorker` on the `User_Worker` table. The data in that column could be lost. The data in that column will be cast from `Boolean` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User_Worker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "image_url" TEXT,
    "isWorker" INTEGER,
    "city" TEXT,
    "rating" REAL,
    "name" TEXT,
    "cpf_or_cnpj" TEXT,
    "age" INTEGER,
    "temp_password" TEXT,
    "number" TEXT,
    "sex" TEXT,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User_Worker" ("age", "city", "cpf_or_cnpj", "create_at", "email", "id", "image_url", "isWorker", "job", "name", "number", "password", "rating", "sex", "temp_password") SELECT "age", "city", "cpf_or_cnpj", "create_at", "email", "id", "image_url", "isWorker", "job", "name", "number", "password", "rating", "sex", "temp_password" FROM "User_Worker";
DROP TABLE "User_Worker";
ALTER TABLE "new_User_Worker" RENAME TO "User_Worker";
CREATE UNIQUE INDEX "User_Worker_email_key" ON "User_Worker"("email");
CREATE UNIQUE INDEX "User_Worker_cpf_or_cnpj_key" ON "User_Worker"("cpf_or_cnpj");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
