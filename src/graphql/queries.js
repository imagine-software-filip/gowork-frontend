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

export const LIST_JOBS = gql`
    query jobs($token: String!) {
        jobs(token: $token) {
            id
            title
            desc
            price
            endRangeAvailability
            user {
                firstName
                lastName
            }
        }
    }
`;