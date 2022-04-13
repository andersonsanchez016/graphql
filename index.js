'use strict';
const express = require('express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { graphqlHTTP } = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const { dbConnection } = require('./database/dbConnection');
const resolvers = require('./lib/graphql/resolvers/resolvers');
const app = express();
const port = 3000;

//connection to the database
dbConnection();
//definiendo el schema
const typeDefs = readFileSync(
    join(__dirname, 'lib', 'graphql', 'schemas', 'schema.graphql'),
    'utf-8'
);
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Configurar los resolvers
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: true
    })
);

app.listen(port, () => {
    console.log('server running in port 3000');
});
