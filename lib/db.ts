import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '@/db/schema';

const connectionString = process.env.DATABASE_URL!;

// Fix: Remove sslmode=require to prevent conflict with explicit ssl config
const cleanConnectionString = connectionString.replace('sslmode=require', '');

const pool = new Pool({
  connectionString: cleanConnectionString,
});

export const db = drizzle(pool, { schema });
