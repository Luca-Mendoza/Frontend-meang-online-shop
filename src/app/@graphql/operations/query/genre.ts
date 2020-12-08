import { RESULT_INFO_FRAGMENT } from '../fragment/result-info';
import { GENRES_FRANGMENT } from '../fragment/genre';

import gql from 'graphql-tag';

export const LOGIN_QUERY = gql`
query genresList($page: Int, $itemsPage: Int) {
  genres(page: $page, itemsPage: $itemsPage) {
    info {
      ...ResultInfoObject
    }
    status
    message
    genres {
      ...GenresObject
    }
  }
}
${GENRES_FRANGMENT}
${RESULT_INFO_FRAGMENT}
`;
