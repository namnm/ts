### TypeScript NodeJS GraphQL

- To start backend development run these commands in 2 separated Terminal tabs:

  - `npx nodemon` will run and watch the backend code
    - This command will not include the type check because we need to run graphql-codegen to generate types from localhost backend. The code may depends on the generated types, so if we put type check in this command it may cause type error in a circular way
  - `npx tsc --watch` will run and watch the TypeScript check for the project

- `npx grapqh-codegen`
- `npx type-coverage`
