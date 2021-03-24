import gql from 'graphql-tag';

import { SHOP_PRODUCT_FRANGMENT } from '../../../@graphql/operations/fragment/shop-product';
import { RESULT_INFO_FRAGMENT } from '../fragment/result-info';

export const HOME_PAGE = gql`
  query HomePageInfo($showPlatform: Boolean = false) {
    carousel: shopProductsOffersLast(itemsPage: 4, topPrice: 30, random: true) {
      shopProducts {
        ...shopProductsObject
      }
    }
    pc: shopProductsPlatforms(itemsPage: 4, random: true, platform: ["4"]) {
      shopProducts {
        ...shopProductsObject
      }
    }
    ps4: shopProductsPlatforms(itemsPage: 4, random: true, platform: ["18"]) {
      shopProducts {
        ...shopProductsObject
      }
    }
    topPrice35: shopProductsOffersLast(
      itemsPage: 4
      topPrice: 35
      random: true
    ) {
      shopProducts {
        ...shopProductsObject
      }
    }
  }
  ${SHOP_PRODUCT_FRANGMENT}
`;
