import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import resolvers from "./gql/resolvers";
import typeDefs from "./gql/schema";

const prisma = new PrismaClient();

async function main() {
  const server = new ApolloServer({ typeDefs, resolvers, context: { prisma } });
  const { url } = await server.listen();
  console.log(`Server listening at ${url}`);
}

main();
