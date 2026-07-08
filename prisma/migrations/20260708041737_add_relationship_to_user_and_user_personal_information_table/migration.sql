-- AddForeignKey
ALTER TABLE "UserPersonalInformation" ADD CONSTRAINT "UserPersonalInformation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
