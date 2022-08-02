/*
  Warnings:

  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "User_Worker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "name" TEXT,
    "cpf_or_cnpj" TEXT,
    "age" INTEGER,
    "temp_password" TEXT,
    "number" TEXT,
    "sex" TEXT,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "cpf_or_cnpj" TEXT,
    "age" INTEGER,
    "temp_password" TEXT,
    "number" TEXT,
    "sex" TEXT,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("age", "cpf_or_cnpj", "create_at", "email", "id", "name", "number", "password", "sex", "temp_password") SELECT "age", "cpf_or_cnpj", "create_at", "email", "id", "name", "number", "password", "sex", "temp_password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_cpf_or_cnpj_key" ON "User"("cpf_or_cnpj");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_Worker_email_key" ON "User_Worker"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_Worker_cpf_or_cnpj_key" ON "User_Worker"("cpf_or_cnpj");
