import gql from "graphql-tag";

const typeDefs = gql`
  scalar Date
  scalar DateTime
  scalar JSON

  type Post {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    content: String
    published: Boolean!
    author: User!
    authorId: ID!
  }

  type Profile {
    id: ID!
    bio: String
    user: User!
    userId: ID!
  }

  type User {
    id: ID!
    email: String!
    name: String
    posts: [Post!]!
    profile: Profile
  }

  type Query {
    users: [User!]!
  }
`;

export default typeDefs;
