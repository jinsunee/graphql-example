const { buildSchema } = require('graphql')
const express = require('express')
var { graphqlHTTP } = require('express-graphql');


// graphQL 스키마 언어를 사용한 스키마 만들기
const schema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
`)

// rootValue는 각 api 엔드포인트에 맞게 resolver 함수를 제공한다.
const rootValue = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random: () => {
    return Math.random()
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
  }
}

const app = express()
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}))
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
