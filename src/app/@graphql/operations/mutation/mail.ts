import gql from 'graphql-tag';

export const SEND_EMAIL_ACTION = gql`
  mutation sendEmail($email: String!) {
    sendEmail(email: $email) {
      status
      message
    }
  }
`;
