// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Create a singleton Prisma instance for the database connection
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = 
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // Enable logging for debugging (optional)
  });

// If in development mode, attach the prisma instance to the global object
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
