const users = [
  {
    id: 2,
    username: "Gowon",
    password: "loona",
  },
  {
    id: 4,
    username: "Kim Lip",
    password: "yo",
  },
  {
    id: 5,
    username: "test",
    password: "yyxy",
  },
  {
    id: 23,
    username: "hudahoop",
    password: "1/3",
  },
];

const Articles = [
  {
    title: "Technical Writing",
    upvotes: 0,
    comments: [
      {
        username: "Gowon",
        text: "ayo",
      },
    ],
    tags: ["tech", "lifestyle"],
  },
  {
    title: "Valorant",
    upvotes: 2,
    comments: [
      {
        username: "Loona",
        text: "hi high",
      },
      {
        username: "Loona",
        text: "perfecto love",
      },
    ],
    tags: ["eSports"],
  },
  {
    title: "Overwatch",
    upvotes: 0,
    comments: [
      {
        username: "Me",
        text: "test",
      },
    ],
    tags: ["eSports"],
  },
  {
    title: "Loona",
    upvotes: 50,
    comments: [],
    tags: ["Loona"],
  },
];

module.exports = { Articles, users };
