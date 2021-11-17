import gql from 'graphql-tag';
import { CHARGE_FRAGMENT_OBJECT } from '../../fragment/stripe/charge';

export const CREATE_PAY_ORDER = gql`
  mutation chargeOrder($payment: ChargeInput) {
    chargeOrder(payment: $payment) {
      status
      message
      charge {
      ...ChargeObject
      }
    }

      ${CHARGE_FRAGMENT_OBJECT}
  }
`;
