import { Query } from "../utils";
import { Context } from "../context";

const Query: Query = {
  users: async (_parent, _args, { prisma }: Context) => {
    return prisma.user.findMany();
  }
};

export default {
  Query
};
