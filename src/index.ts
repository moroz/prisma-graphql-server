import { ApolloServer } from "apollo-server";
import context from "./gql/context";
import resolvers from "./gql/resolvers";
import typeDefs from "./gql/schema";

async function main() {
  const server = new ApolloServer({ typeDefs, resolvers, context });
  const { url } = await server.listen();
  console.log(`Server listening at ${url}`);
}

main();
