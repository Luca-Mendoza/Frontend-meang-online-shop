import { GENRES_FRANGMENT } from './../fragment/genre';
import gql from 'graphql-tag';

export const ADD_GENRE = gql`
  mutation insertarGenero($genre: String!) {
    addGenre(genre: $genre) {
      status
      message
      genre {
        ...GenresObject
      }
    }
  }
  ${GENRES_FRANGMENT}
`;


export const MODIFY_GENRE = gql`

  mutation modificarGenero( $id: ID!, $genre: String!) {
    updateGenre(id: $id, genre: $genre) {
      status
      message
      genre {
        ...GenresObject
      }
    }
  }
  ${GENRES_FRANGMENT}
`;


export const BLOCK_GENRE = gql`

  mutation bloquearGenero( $id: ID!) {
    blockGenre(id: $id) {
      status
      message
    }
  }
`;
