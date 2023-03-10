import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation tokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`;

export const VERIFY_USER = gql`
  mutation tokenAuth($userId: String!, $verifyCode: String!) {
    verifyUser(userId: $userId, verifyCode: $verifyCode) {
      user {
        id
      }
    }
  }
`;