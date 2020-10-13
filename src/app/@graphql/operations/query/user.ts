import { USER_FRAGMENT } from '@graphql/operations/fragment/user';
import gql from 'graphql-tag';

export const LOGIN_QUERY = gql`
    query getLogin($email: String!, $password: String!){
        login(email: $email, password: $password){
            status
            message
            token
        }
    }
`;

export const USERS_LIST_QUERY = gql `
    query {
        users {
            status
            message
            users {
                ...UserObject
            }
        }
    }
   
    ${ USER_FRAGMENT }

`;

