import gql from 'graphql-tag';

export const GENRES_FRANGMENT = gql`
  fragment GenresObject on Genre {
    id
    name
    slug
  }
`;
