
import { readFileSync } from "fs";
import { UserQuery } from "./query";
import { SkillResolvers } from "./resolvers";
export const types = readFileSync(`./src/schema/type.graphql`, 'utf-8')



export const typeDefs = `#graphql
  type Query
  ${types}
`;

export const resolvers = {
  Query: {
    ...UserQuery,
  },
  Skill: SkillResolvers,
}