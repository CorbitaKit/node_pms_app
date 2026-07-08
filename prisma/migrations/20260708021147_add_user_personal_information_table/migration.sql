-- CreateEnum
CREATE TYPE "Genders" AS ENUM ('FEMALE', 'MALE', 'OTHER');

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "roleID" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "UserPersonalInformation" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "gender" "Genders" NOT NULL,

    CONSTRAINT "UserPersonalInformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserPersonalInformation_user_id_key" ON "UserPersonalInformation"("user_id");
