const { users, Articles } = require("../sampleData.js");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLScalarType,
} = require("graphql");

//User Type

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    comments: {
      type: commentType,
      resolve(parent, args) {
        return users.find((user) => user.username === parent.username);
      },
    },
    password: { type: GraphQLString },
  }),
});

//Article Type

const commentType = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    username: { type: GraphQLString },

    text: { type: GraphQLString },
  }),
});

// const tagType = new GraphQLObjectType({
//   name: "Tag",
//   fields: () => ({
//     tag: { type: GraphQLString },
//   }),
// });
const ArticleType = new GraphQLObjectType({
  name: "Article",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    upvotes: { type: GraphQLInt },
    comments: { type: new GraphQLList(commentType) },
    tags: { type: new GraphQLList(GraphQLString) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { username: { type: GraphQLString } },
      resolve(parent, args) {
        return users.find((user) => user.username === args.username);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return users;
        webkitURL;
      },
    },
    articles: {
      type: new GraphQLList(ArticleType),
      resolve(parent, args) {
        return Articles;
        webkitURL;
      },
    },
    article: {
      type: ArticleType,
      args: { title: { type: GraphQLString } },
      resolve(parent, args) {
        return Articles.find((article) => article.title === args.title);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
