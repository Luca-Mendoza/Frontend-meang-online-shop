import { TAG_FRANGMENT } from '@graphql/operations/fragment/tag';
import { RESULT_INFO_FRAGMENT } from '@graphql/operations/fragment/result-info';

import gql from 'graphql-tag';

export const TAGS_LIST_QUERY = gql`
  query tagsList($page: Int, $itemsPage: Int) {
    tags(page: $page, itemsPage: $itemsPage) {
      info {
        ...ResultInfoObject
      }
      status
      message
      tags {
        ...tagObject
      }
    }
  }
  ${TAG_FRANGMENT}
  ${RESULT_INFO_FRAGMENT}
`;
