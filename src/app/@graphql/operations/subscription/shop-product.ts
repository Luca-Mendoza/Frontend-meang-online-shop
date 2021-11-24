import gql from 'graphql-tag';

export const SUBSCRIPTION_PRODUCT_SELECT_STOCK = gql`
  subscriptions selectStockProductupdate(
    $id: Int!
  ) {
    selectStockProductupdate(id: $id) {
        id
        stock
  }
`;
