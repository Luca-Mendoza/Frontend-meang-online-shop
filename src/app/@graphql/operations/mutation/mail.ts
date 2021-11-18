import gql from 'graphql-tag';

export const SEND_EMAIL_ACTION = gql`
  mutation sendEmail($mail: MailInput!) {
    sendEmail(mail: $mail) {
      status
    }
  }
`;
