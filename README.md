# solytic-fe-bohdan-leonets

#### Create a login page with the following requirements:
- Username should be a valid email address format
- Password’s minimum length should be 8
- Validate and give proper validation feedback
- Enable the sign-in button only after the user enters the username and password
- Perform a call to an API and store the user id and token.
- Show a pop-up with the user id (received in the result)
- Add a header with navigation for 2 pages: Log in and user details (after login)
- Keep in mind an enterprise architecture
- Try to use the Atomic design pattern

#### Technical Requirements

```
Stack:
- Vue, Vuex
- Typescript
- GraphQL
- Apollo
- BEMIT
- SASS
- Yarn
- Jest
- Cypress
```

- Add automated tests
- Document your code
- Publish the code in your Git repository (private repository) - Name the repository as
solytic-fe-<first-name>-<last-name> (e.g. solytic-fe-mario-santos)

#### Mock API

To speed up the challenge you can either create your own backend to create mock APIs using
sites such as https://mockapi.io/docs and https://beeceptor.com/.

The endpoint can return the same mocked data every time (no need to be dynamic)

#### Graph Query

```
Query Variables

mutation LoginUser($user: UserLoginInput!) {
   loginUser(user: $user) {
      user {
         id
      }
      accessToken {
         token
         tokenType
      }
   }
}
```

```
Variables

{
   "user": {
      "emailAddress": "user@name.com",
      "password": "passwd"
   }
}
```

```
Headers (request) 
Api-Key: 93f78ce7-5728-4010-b741-a628d1e4f425 
```

```
Response (Mock)

{
"data": {
   "loginUser": {
      "user": {
         "id": 123
      },
      "accessToken": {
            "token": "51195a5f-6fb7-415b",
            "tokenType": "Bearer"
         }
      }
   }
}
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
