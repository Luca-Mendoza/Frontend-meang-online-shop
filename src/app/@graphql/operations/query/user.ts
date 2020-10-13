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
