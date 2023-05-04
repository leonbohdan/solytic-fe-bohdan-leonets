import { gql } from "@apollo/client/core";

export const LOGIN = gql`
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
`;
