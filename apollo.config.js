

module.exports = {
  client: {
    service: {
      name: 'github', 
      url: 'https://api.github.com/graphql',
      headers: {
        authorization: `bearer dc62d530b90a0af85b0b1f2cbe6ef5a8b07c9569`
      },
      // optional disable SSL validation check
      skipSSLValidation: true,
    }
  }
};

// from .graphqlconfig file
// {
//   "name": "Github Schema",
//   "schemaPath": "./schema.graphql",
//   "extensions": {
//     "endpoints": {
//       "Github GraphQL Endpoint": {
//         "url": "https://api.github.com/graphql",
//         "headers": {
//           "Authorization": "bearer dc62d530b90a0af85b0b1f2cbe6ef5a8b07c9569"
//         },
//         "introspect": true
//       }
//     }
//   }
// }