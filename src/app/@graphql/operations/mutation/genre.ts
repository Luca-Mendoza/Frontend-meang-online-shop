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
