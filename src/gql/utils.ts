import { GraphQLResolveInfo } from "graphql";
import { Context } from "./context";

export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any
  ? U
  : any;

export type Remapped = {
  [operationName: string]: (
    parent: null | undefined,
    args: Record<string, any>,
    ctx: Context,
    info?: GraphQLResolveInfo
  ) => any;
};

export type Query = Remapped;
export type Resolver<T> = {
  [index: string]: {
    // or [index: string]: {
    [P in keyof Partial<T>]: (
      parent: T,
      args: any,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => any;
  };
};
