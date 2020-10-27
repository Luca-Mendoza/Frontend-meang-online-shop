import gql from 'graphql-tag';



export const USER_FRAGMENT = gql`
    fragment UserObject on User {
        id
        name
        lastname
        email
        password @include(if: $include)
        role
        registerDate @include(if: $include)
        brithday @include(if: $include)
        role
    }
`;


