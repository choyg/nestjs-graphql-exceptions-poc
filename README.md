# NestJS GraphQL Exceptions Filter Bug POC

1. `yarn install`
2. `yarn start`
3. http://localhost:3000/graphql
4. Query for a post. Because posts is a root resolver, the all exceptions filter is triggered, shown in stdout
``` graphql
{
  post {
    id
  }
}
```
5. Query for an author's posts. A child resolver (posts) throws an error but is not caught by the all exception filter
``` graphql
{
  author {
    posts {
      id
    }
  }
}
```
