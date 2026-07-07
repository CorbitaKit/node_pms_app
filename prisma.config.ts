import { defineConfig } from "prisma/config";
import {  DATABASE_URL } from "./src/config/config";

console.log(DATABASE_URL)
export default defineConfig({
  schema: "prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seeder/index.ts"
  },
  datasource: {
    url: DATABASE_URL,
  },
});
