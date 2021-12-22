import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"]
});

export interface Context {
  prisma: typeof prisma;
}

const context: Context = {
  prisma
};

export default context;
