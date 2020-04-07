### TypeScript NodeJS GraphQL

- To start backend development run these commands in 2 separated Terminal tabs:
  - `yarn backend` to start and watch the backend code
    - This command will not include the type check because we need to run graphql-codegen to generate types from localhost backend. The code may depends on the generated types, so if we put type check in this command it may cause type error in a circular way
  - `yarn tsc` to start and watch the TypeScript check for the project
- Some other commands and usage:
  - `npx grapqh-codegen` to generate types from localhost backend
    - The default port is 3030. You can configure it in `codegen.yml`
  - `npx type-coverage` to run the type coverage check
  - `yarn drop` to drop and recreate the database
    - Shorthand for `sequelize db:drop && sequelize db:create && sequelize db:migrate && sequelize db:seed:all`
    - Only work in development env
