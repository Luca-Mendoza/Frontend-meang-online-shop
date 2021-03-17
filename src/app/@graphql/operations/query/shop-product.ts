import gql from 'graphql-tag';
import { SHOP_PRODUCT_FRANGMENT } from '@graphql/operations/fragment/shop-product';

export const SHOP_LAST_UNITS_OFFERS = gql`
  query shopProductsOffersLast(
    $page: Int
    $itemsPage: Int
    $active: ActiveFilterEnum
    $topPrice: Float
    $lastUnits: Int
    $random: Boolean
  ) {
    shopProductsOffersLast(
      page: $page
      itemsPage: $itemsPage
      active: $active
      random: $random
      topPrice: $topPrice
      lastUnits: $lastUnits
    ) {
      status
      message
      shopProducts {
        ...shopProductsObject
      }
    }
  }
  ${SHOP_PRODUCT_FRANGMENT}
`;

export const SHOP_PRODUCT_BY_PLATFORM = gql`
  query shopProductsPlatforms(
    $page: Int
    $itemsPage: Int
    $active: ActiveFilterEnum
    $platform: ID!
    $random: Boolean
  ) {
    shopProductsPlatforms(
      page: $page
      itemsPage: $itemsPage
      active: $active
      random: $random
      platform: $platform
    ) {
      status
      message
      shopProducts {
        ...shopProductsObject
      }
    }
  }
  ${SHOP_PRODUCT_FRANGMENT}
`;
