-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "cpf_or_cnpj" TEXT,
    "age" INTEGER,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "temp_password" TEXT,
    "number" TEXT,
    "sex" TEXT
);
INSERT INTO "new_User" ("age", "cpf_or_cnpj", "create_at", "email", "id", "name", "password", "temp_password") SELECT "age", "cpf_or_cnpj", "create_at", "email", "id", "name", "password", "temp_password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
