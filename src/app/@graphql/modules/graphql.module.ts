
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { Apollo, ApolloModule } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';



@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
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
    const uri = 'http://localhost:2002/graphql';
    const link = ApolloLink.from(
      [
        errorLink,
        httpLink.create({ uri })
      ]
    );
    apollo.create({
      link,
      cache: new InMemoryCache()
    });
  }

}
