import {
  GraphQLDate as Date,
  GraphQLDateTime as DateTime
} from "graphql-iso-date";
import GraphQLJSON from "graphql-type-json";

export default {
  Date,
  DateTime,
  JSON: GraphQLJSON
};
