import { GraphQLResolveInfo } from 'graphql';
import { Mutation as ApiMutation, Query as ApiQuery } from './generated/api';
import { Prisma } from '.prisma/client';
export type FirstArgument<T> = T extends (arg1: infer U, …args: any[]) => any ? U : any;
export type Remapped<T> = {
 [P in keyof T]: (
 parent: null | undefined,
 args: FirstArgument<T[P]>,
 ctx: Context,
 info?: GraphQLResolveInfo
 ) => any
};
export interface Context {
 db: typeof Prisma;
}
export type Query = Partial<Remapped<ApiQuery>>;
export type Mutation = Partial<Remapped<ApiMutation>>;
export type Resolver<T> = {
 [index: string]: { // or [index: string]: {
 [P in keyof Partial<T>]: (parent: T, args: any, ctx: Context, info: GraphQLResolveInfo) => any
 }
};