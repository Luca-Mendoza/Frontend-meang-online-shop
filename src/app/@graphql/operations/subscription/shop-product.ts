import gql from 'graphql-tag';

export const SUBSCRIPTIONS_PRODUCT_SELECT_STOCK = gql`
  subscription selectStockProductupdate($id: Int!) {
    selectStockProductupdate(id: $id) {
      id
      stock
    }
  }
`;
