import { gql } from "@apollo/client";

export const CHECK_LOGIN = gql`
    query currentUser($token: String!) {
        currentUser(token: $token) {
            id
            email
            isVerified
        }
    }
`;