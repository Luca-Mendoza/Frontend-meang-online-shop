import gql from 'graphql-tag';

export const TAG_FRANGMENT = gql`
  fragment tagObject on Tag {
    id
    name
    slug
  }
`;
