import { defineConfig } from "prisma/config";
import {  DATABASE_URL } from "./src/config/config";

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
