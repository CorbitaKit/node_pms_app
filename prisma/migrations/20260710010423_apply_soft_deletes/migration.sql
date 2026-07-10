-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "UserPersonalInformation" ADD COLUMN     "deleted_at" TIMESTAMP(3);
