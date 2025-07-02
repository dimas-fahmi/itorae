import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL doesn't exist");
}

const schema = {
  schema: {},
};

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const db = drizzle(pool, schema);
