import gql from 'graphql-tag';

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
      info {
        page
        pages
        itemsPage
        total
      }
      status
      message
      shopProducts {
        id
        price
        active
        stock
        productId
        product {
          id
          slug
          name
          img
          released
          rating {
            value
            count
          }
          clip {
            clips {
              low
              medium
              full
            }
            preview
            video
          }
          screenshoot
        }
        platformId
        platform {
          id
          slug
          name
          active
        }
      }
    }
  }
`;
