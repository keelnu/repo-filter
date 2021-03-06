module.exports = {
  client: {
    service: {
      name: 'github', 
      url: 'https://api.github.com/graphql',
      headers: {
        authorization: `Bearer ${process.env.GITHUB_KEY}`
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
//           "Authorization": "bearer ${process.env.REACT_APP_BEARER}"
//         },
//         "introspect": true
//       }
//     }
//   }
// }
