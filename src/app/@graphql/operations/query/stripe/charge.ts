import gql from 'graphql-tag';
import { CHARGE_FRAGMENT_OBJECT } from '../../fragment/stripe/charge';

export const CHARGE_CUSTOMER_LIST = gql`
    query chargesByCustomer(($customer: ID!, $limit: Int, $startingAfter: ID, $endingBefore: ID) {
            chargesByCustomer(customer: $customer, limit: $limit, startingAfter: $startingAfter, endingBefore: $endingBefore) {
                status
                message
                hasMore
                charges {
                    ...ChargeObject
                }
            }
    }

    ${CHARGE_FRAGMENT_OBJECT}
`;
