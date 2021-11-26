import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApolloLink, split } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { Apollo, ApolloModule } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [HttpClientModule, ApolloModule, HttpLinkModule],
})
export class GraphqlModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    // Para capturar los errores de consulta y/o de red
    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log('GraphQL Errors', graphQLErrors);
      }

      if (networkError) {
        console.log('Network Errors', networkError);
      }
    });

    // Apollo Link para conectar con el servidor
    const uri = environment.backend;
    // const uri = 'http://localhost:2002/graphql';
    const urlLink = ApolloLink.from([errorLink, httpLink.create({ uri })]);

    // Apollo Link para conectar con el servidor subscriptionLink
    const subscriptionLink = new WebSocketLink({
      uri: environment.backendWs,
      options: {
        reconnect: true,
      },
    });

    const link = split(
      ({ query }) => {
        const { kind, operation }: any = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      subscriptionLink,
      urlLink
    );

    apollo.create({
      link,
      cache: new InMemoryCache(),
    });
  }
}
