// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backend: 'https://gamezonia-shop.herokuapp.com/graphql',
  backendWs: 'wss://gamezonia-shop.herokuapp.com/graphql',
  stripePublicKey:
    'pk_test_51IdFgILcAMPJSB0NM7ohOaQWM1VlLPmxyKxi81Ki7kgXEKBzklYD0jQ7Mr7sR464DU3Tdco4CRLofVPSi7k9XF4y00Gdy8kNoI',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
