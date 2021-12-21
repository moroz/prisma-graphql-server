import { Query } from "../utils";
import { Context } from "../context";
import scalars from "./scalars";

const Query: Query = {
  users: async (_parent, _args, { prisma }: Context) => {
    return prisma.user.findMany();
  }
};

export default {
  ...scalars,
  Query
};
