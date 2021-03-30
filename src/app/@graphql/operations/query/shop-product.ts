import gql from 'graphql-tag';
import { SHOP_PRODUCT_FRANGMENT } from '@graphql/operations/fragment/shop-product';
import { RESULT_INFO_FRAGMENT } from '../fragment/result-info';

export const SHOP_LAST_UNITS_OFFERS = gql`
  query shopProductsOffersLast(
    $page: Int
    $itemsPage: Int
    $active: ActiveFilterEnum
    $topPrice: Float
    $lastUnits: Int
    $random: Boolean
    $showInfo: Boolean = false
    $showPlatform: Boolean = false
  ) {
    shopProductsOffersLast(
      page: $page
      itemsPage: $itemsPage
      active: $active
      random: $random
      topPrice: $topPrice
      lastUnits: $lastUnits
    ) {
      info @include(if: $showInfo) {
        ...ResultInfoObject
      }
      status
      message
      shopProducts {
        ...shopProductsObject
      }
    }
  }
  ${RESULT_INFO_FRAGMENT},
  ${SHOP_PRODUCT_FRANGMENT}
`;

export const SHOP_PRODUCT_BY_PLATFORM = gql`
  query shopProductsPlatforms(
    $page: Int
    $itemsPage: Int
    $active: ActiveFilterEnum
    $platform: [ID!]!
    $random: Boolean
    $showInfo: Boolean = false
    $showPlatform: Boolean = false
  ) {
    shopProductsPlatforms(
      page: $page
      itemsPage: $itemsPage
      active: $active
      random: $random
      platform: $platform
    ) {
      info @include(if: $showInfo) {
        ...ResultInfoObject
      }
      status
      message
      shopProducts {
        ...shopProductsObject
      }
    }
  }
  ${RESULT_INFO_FRAGMENT},
  ${SHOP_PRODUCT_FRANGMENT}
`;
export const SHOP_PRODUCT_DETAILS = gql`
  query detallesProducto($id: Int!, $showPlatform: Boolean = true) {
    shopProductDetails(id: $id) {
      shopProduct {
        ...shopProductsObject
      }
    }
  }
  ${SHOP_PRODUCT_FRANGMENT}
`;
