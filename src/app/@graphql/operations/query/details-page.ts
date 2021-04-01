import gql from 'graphql-tag';

import { SHOP_PRODUCT_FRANGMENT } from '../../../@graphql/operations/fragment/shop-product';
import { RESULT_INFO_FRAGMENT } from '../fragment/result-info';

export const DETAILS_PAGE = gql`
  query DetailsPageInfo(
    $id: Int!
    $showPlatform: Boolean = true
    $relationScreens: Boolean = true
  ) {
    randomItems: shopProductsOffersLast(itemsPage: 6, random: true) {
      shopProducts {
        ...shopProductsObject
      }
    }
    details: shopProductDetails(id: $id) {
      shopProduct {
        ...shopProductsObject
      }
    }
  }
  ${SHOP_PRODUCT_FRANGMENT}
`;
