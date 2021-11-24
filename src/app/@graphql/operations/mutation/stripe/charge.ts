import gql from 'graphql-tag';
import { CHARGE_FRAGMENT_OBJECT } from '../../fragment/stripe/charge';

export const CREATE_PAY_ORDER = gql`
  mutation chargeOrder(
    $payment: ChargeInput!
    $stockCharge: [ShopProductStockInput!]!
  ) {
    chargeOrder(payment: $payment, stockCharge: $stockCharge) {
      status
      message
      charge {
        ...ChargeObject
      }
    }
  }
  ${CHARGE_FRAGMENT_OBJECT}
`;
