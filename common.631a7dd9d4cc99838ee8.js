(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+sI6":function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var o=n("q3Kh"),r=n("0nJ8"),c=n("UYTu");const s=c.a`
  fragment ChargeObject on StripeCharge {
    id
    card
    paid
    description
    customer
    created
    amount
    status
    typeOrder
    receiptUrl
    receiptEmail
  }
`,i=c.a`
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
  ${s}
`,a=c.a`
  query chargesByCustomer(
    $customer: ID!
    $limit: Int
    $startingAfter: ID
    $endingBefore: ID
  ) {
    chargesByCustomer(
      customer: $customer
      limit: $limit
      startingAfter: $startingAfter
      endingBefore: $endingBefore
    ) {
      status
      message
      hasMore
      charges {
        ...ChargeObject
      }
    }
  }

  ${s}
`;var u=n("fXoL"),l=n("/IUn");let p=(()=>{class t extends r.a{constructor(t){super(t)}pay(t,e){return this.set(i,{payment:t,stockCharge:e}).pipe(Object(o.map)(t=>t.chargeOrder))}listByCustomer(t,e,n,r){return this.get(a,{customer:t,limit:e,startingAfter:n,endingBefore:r}).pipe(Object(o.map)(t=>t.chargesByCustomer))}}return t.\u0275fac=function(e){return new(e||t)(u.Xb(l.a))},t.\u0275prov=u.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"0iDv":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("sYSY"),r=n("PSD3"),c=n.n(r);function s(t=o.a.SUCCESS,e=""){c.a.fire({title:e,icon:t,position:"top",showConfirmButton:!1,toast:!0,timer:4e3,timerProgressBar:!0})}},Dxa7:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=n("FWf1"),c=n("IKal"),s=n("aJGj");e.take=function(t){return function(e){return 0===t?s.empty():e.lift(new i(t))}};var i=function(){function t(t){if(this.total=t,this.total<0)throw new c.ArgumentOutOfRangeError}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.total))},t}(),a=function(t){function e(e,n){var o=t.call(this,e)||this;return o.total=n,o.count=0,o}return o(e,t),e.prototype._next=function(t){var e=this.total,n=++this.count;n<=e&&(this.destination.next(t),n===e&&(this.destination.complete(),this.unsubscribe()))},e}(r.Subscriber)},IKal:function(t,e,n){"use strict";e.ArgumentOutOfRangeError=function(){function t(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return t.prototype=Object.create(Error.prototype),t}()},OwPx:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("3Pt+"),r=n("ofXK"),c=n("1kSV"),s=n("fXoL");let i=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)},imports:[[r.c,c.f,o.b]]}),t})()},Ppxc:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(t){return t.DASHBOARD="Inicio",t.GENRES="G\xe9neros",t.TAGS="Etiquetas",t.USERS="Usuarios",t}({})},UdEE:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return u}));var o=n("/nKQ"),r=n("UYTu");const c=r.a`
  mutation addUser($user: UserInput!, $include: Boolean!) {
    register(user: $user) {
      status
      message
      user {
        ...UserObject
      }
    }
  }
  ${o.a}
`,s=r.a`
  mutation updateUser($user: UserInput!, $include: Boolean!) {
    updateUser(user: $user) {
      status
      message
      user {
        ...UserObject
      }
    }
  }
  ${o.a}
`,i=r.a`
  mutation blockUser($id: ID!, $unblock: Boolean, $admin: Boolean) {
    blockUser(id: $id, unblock: $unblock, admin: $admin) {
      status
      message
    }
  }
`,a=r.a`
  mutation activarEmailUser($id: ID!, $email: String!) {
    activeUserEmail(id: $id, email: $email) {
      status
      message
    }
  }
`,u=r.a`
  mutation activeUser($id: ID!, $birthday: String!, $password: String!) {
    activeUserAction(id: $id, birthday: $birthday, password: $password) {
      status
      message
    }
  }
`},Y1Ic:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("ofXK"),r=n("1kSV"),c=n("3Pt+"),s=n("fXoL");let i=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)},imports:[[o.c,r.c,c.b]]}),t})()},aJGj:function(t,e,n){"use strict";var o=n("Q1FS");e.EMPTY=new o.Observable((function(t){return t.complete()})),e.empty=function(t){return t?function(t){return new o.Observable((function(e){return t.schedule((function(){return e.complete()}))}))}(t):e.EMPTY}},hrBI:function(t,e,n){"use strict";n.d(e,"a",(function(){return I}));var o=n("q3Kh"),r=n("fXoL"),c=n("rAgn"),s=n("b1el"),i=n("0nJ8"),a=n("/IUn");let u=(()=>{class t extends i.a{constructor(t){super(t)}getCollectionData(t,e={},n={}){return this.get(t,e,n)}}return t.\u0275fac=function(e){return new(e||t)(r.Xb(a.a))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=n("3Pt+"),p=n("ofXK"),f=n("1kSV");function d(t,e){if(1&t&&(r.Pb(0,"th",7),r.Ac(1),r.Ob()),2&t){const t=e.$implicit;r.xb(1),r.Cc("\n          ",t.label,"\n        ")}}function m(t,e){if(1&t&&(r.Pb(0,"span"),r.Ac(1),r.Ob()),2&t){const t=r.cc().$implicit,e=r.cc().$implicit;r.xb(1),r.Cc("\n            ",e[t.property],"\n          ")}}function g(t,e){1&t&&(r.Pb(0,"span"),r.Lb(1,"i",21),r.Ob())}function b(t,e){1&t&&(r.Pb(0,"span"),r.Lb(1,"i",22),r.Ob())}function h(t,e){if(1&t&&(r.Ac(0,"\n            "),r.yc(1,g,2,0,"span",20),r.Ac(2,"\n            "),r.yc(3,b,2,0,"span",20),r.Ac(4,"\n\n          ")),2&t){const t=r.cc().$implicit,e=r.cc().$implicit;r.xb(1),r.ic("ngIf",1==e[t.property]),r.xb(2),r.ic("ngIf",!0!==e[t.property])}}function P(t,e){if(1&t&&(r.Pb(0,"td"),r.Ac(1,"\n          "),r.yc(2,m,2,1,"span",18),r.Ac(3,"\n          "),r.yc(4,h,5,2,"ng-template",null,19,r.zc),r.Ac(6,"\n\n        "),r.Ob()),2&t){const t=e.$implicit,n=r.rc(5);r.xb(2),r.ic("ngIf","active"!=t.property)("ngIfElse",n)}}function A(t,e){if(1&t){const t=r.Qb();r.Pb(0,"button",23),r.ac("click",(function(){r.sc(t);const e=r.cc().$implicit;return r.cc().manageAction("block",e)})),r.Ac(1,"\n            "),r.Lb(2,"i",24),r.Ob()}}function O(t,e){if(1&t){const t=r.Qb();r.Ac(0,"\n            "),r.Pb(1,"button",23),r.ac("click",(function(){r.sc(t);const e=r.cc().$implicit;return r.cc().manageAction("unblock",e)})),r.Ac(2,"\n              "),r.Lb(3,"i",25),r.Ac(4,"\n            "),r.Ob(),r.Ac(5,"\xa0\n          ")}}function $(t,e){if(1&t){const t=r.Qb();r.Pb(0,"tr"),r.Ac(1,"\n        "),r.yc(2,P,7,2,"td",8),r.Ac(3,"\n        "),r.Pb(4,"td"),r.Ac(5,"\n          "),r.Pb(6,"button",12),r.ac("click",(function(){r.sc(t);const n=e.$implicit;return r.cc().manageAction("edit",n)})),r.Ac(7,"\n            "),r.Lb(8,"i",13),r.Ob(),r.Ac(9,"\xa0\n          "),r.Pb(10,"button",14),r.ac("click",(function(){r.sc(t);const n=e.$implicit;return r.cc().manageAction("info",n)})),r.Ac(11,"\n            "),r.Lb(12,"i",15),r.Ob(),r.Ac(13,"\xa0\n\n          "),r.yc(14,A,3,0,"button",16),r.Ac(15,"\xa0\n\n          "),r.yc(16,O,6,0,"ng-template",null,17,r.zc),r.Ac(18,"\n\n        "),r.Ob(),r.Ac(19,"\n      "),r.Ob()}if(2&t){const t=e.$implicit,n=r.rc(17),o=r.cc();r.xb(2),r.ic("ngForOf",o.tableColumns),r.xb(12),r.ic("ngIf",0!=t.active)("ngIfElse",n)}}let I=(()=>{class t{constructor(t){this.service=t,this.itemsPage=20,this.include=!0,this.filterActiveValues=c.a.ACTIVE,this.manageItem=new r.n}ngOnInit(){if(void 0===this.query)throw new Error("Query is indefined, please add");if(void 0===this.resultData)throw new Error("ResultData is indefined, please add");if(void 0===this.tableColumns)throw new Error("Table Columns is indefined, please add");this.infoPage={page:1,pages:1,itemsPage:this.itemsPage,total:1},this.loadData()}loadData(){this.loading=!0,Object(s.d)("Cargando datos","Espera mientra carga la informaci\xf3n"),this.data$=this.service.getCollectionData(this.query,{page:this.infoPage.page,itemsPage:this.infoPage.itemsPage,include:this.include,active:this.filterActiveValues},{}).pipe(Object(o.map)(t=>{const e=t[this.resultData.definitionKey];return this.infoPage.pages=e.info.pages,this.infoPage.total=e.info.total,this.loading=!1,Object(s.a)(),e[this.resultData.listKey]}))}refreshPage(){this.loadData()}manageAction(t,e){this.manageItem.emit([t,e])}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(u))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-table-pagination"]],inputs:{query:"query",context:"context",itemsPage:"itemsPage",include:"include",resultData:"resultData",filterActiveValues:"filterActiveValues",tableColumns:"tableColumns"},outputs:{manageItem:"manageItem"},decls:56,vars:14,consts:[[1,"btn","btn-success","float-right","mr-3","mb-2",3,"click"],[1,"fas","fa-plus-circle"],[1,"custom-select","float-right","mr-3",2,"width","auto",3,"ngModel","ngModelChange"],[3,"ngValue"],[1,"table-responsive"],[1,"table","table-striped"],["scope","col",4,"ngFor","ngForOf"],["scope","col"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","p-2"],[3,"collectionSize","page","pageSize","pageChange"],[1,"custom-select",2,"width","auto",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"fas","fa-edit"],["type","button",1,"btn","btn-info",3,"click"],[1,"fas","fa-info"],["type","button","class","btn btn-danger",3,"click",4,"ngIf","ngIfElse"],["unblockBtn",""],[4,"ngIf","ngIfElse"],["activeValue",""],[4,"ngIf"],[1,"fas","fa-check-circle"],[1,"fas","fa-times-circle"],["type","button",1,"btn","btn-danger",3,"click"],[1,"fas","fa-lock"],[1,"fas","fa-lock-open"]],template:function(t,e){1&t&&(r.Ac(0,"\n"),r.Pb(1,"button",0),r.ac("click",(function(){return e.manageAction("add","")})),r.Ac(2,"\n  "),r.Lb(3,"i",1),r.Ac(4," \xa0 A\xf1adir\n"),r.Ob(),r.Ac(5,"\n"),r.Pb(6,"select",2),r.ac("ngModelChange",(function(t){return e.filterActiveValues=t}))("ngModelChange",(function(){return e.loadData()})),r.Ac(7,"\n  "),r.Pb(8,"option",3),r.Ac(9,"Todos"),r.Ob(),r.Ac(10,"\n  "),r.Pb(11,"option",3),r.Ac(12,"Activos"),r.Ob(),r.Ac(13,"\n  "),r.Pb(14,"option",3),r.Ac(15,"Inactivos"),r.Ob(),r.Ac(16,"\n"),r.Ob(),r.Ac(17,"\n"),r.Pb(18,"div",4),r.Ac(19,"\n  "),r.Pb(20,"table",5),r.Ac(21,"\n    "),r.Pb(22,"thead"),r.Ac(23,"\n      "),r.Pb(24,"tr"),r.Ac(25,"\n        "),r.yc(26,d,2,1,"th",6),r.Ac(27,"\n        "),r.Pb(28,"th",7),r.Ac(29,"Gestionar Informacion"),r.Ob(),r.Ac(30,"\n      "),r.Ob(),r.Ac(31,"\n    "),r.Ob(),r.Ac(32,"\n    "),r.Pb(33,"tbody"),r.Ac(34,"\n      "),r.yc(35,$,20,3,"tr",8),r.dc(36,"async"),r.Ac(37,"\n    "),r.Ob(),r.Ac(38,"\n  "),r.Ob(),r.Ac(39,"\n"),r.Ob(),r.Ac(40,"\n\n"),r.Pb(41,"div",9),r.Ac(42,"\n  "),r.Pb(43,"ngb-pagination",10),r.ac("pageChange",(function(t){return e.infoPage.page=t}))("pageChange",(function(){return e.refreshPage()})),r.Ac(44,"\n  "),r.Ob(),r.Ac(45,"\n\n  "),r.Pb(46,"select",11),r.ac("ngModelChange",(function(t){return e.infoPage.itemsPage=t}))("ngModelChange",(function(){return e.loadData()})),r.Ac(47,"\n    "),r.Pb(48,"option",3),r.Ac(49,"5 items per page"),r.Ob(),r.Ac(50,"\n    "),r.Pb(51,"option",3),r.Ac(52,"10 items per page"),r.Ob(),r.Ac(53,"\n  "),r.Ob(),r.Ac(54,"\n"),r.Ob(),r.Ac(55,"\n")),2&t&&(r.xb(6),r.ic("ngModel",e.filterActiveValues),r.xb(2),r.ic("ngValue","ALL"),r.xb(3),r.ic("ngValue","ACTIVE"),r.xb(3),r.ic("ngValue","INACTIVE"),r.xb(12),r.ic("ngForOf",e.tableColumns),r.xb(9),r.ic("ngForOf",r.ec(36,12,e.data$)),r.xb(8),r.ic("collectionSize",e.infoPage.total)("page",e.infoPage.page)("pageSize",e.infoPage.itemsPage),r.xb(3),r.ic("ngModel",e.infoPage.itemsPage),r.xb(2),r.ic("ngValue",5),r.xb(3),r.ic("ngValue",10))},directives:[l.l,l.e,l.h,l.i,l.m,p.m,f.e,p.n],pipes:[p.b],styles:[".fa-check-circle[_ngcontent-%COMP%]{color:#28a745}.fa-times-circle[_ngcontent-%COMP%]{color:#dc3545}"]}),t})()},lia2:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n("fXoL"),r=n("tyNb"),c=n("e+rv"),s=n("ofXK"),i=n("ObHw");function a(t,e){if(1&t&&(o.Pb(0,"p"),o.Ac(1),o.Ob()),2&t){const t=o.cc();o.xb(1),o.Bc(t.description)}}function u(t,e){if(1&t){const t=o.Qb();o.Pb(0,"div",5),o.Ac(1,"\n      "),o.Pb(2,"shop-product-item",6),o.ac("add",(function(e){return o.sc(t),o.cc().addToCart(e)}))("itemDetails",(function(e){return o.sc(t),o.cc().showProductDetails(e)})),o.Ob(),o.Ac(3,"\n    "),o.Ob()}if(2&t){const t=e.$implicit,n=o.cc();o.xb(2),o.ic("showDesc",""!=t.description&&n.showDesc)("product",t)}}let l=(()=>{class t{constructor(t,e){this.router=t,this.cartService=e,this.title="Titulo de la categoria",this.productsList=[],this.description=""}addToCart(t){this.cartService.manageProduct(t)}showProductDetails(t){this.router.navigate(["/games/details",+t.id])}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.b),o.Kb(c.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-product-category-list"]],inputs:{title:"title",productsList:"productsList",description:"description",showDesc:"showDesc"},decls:15,vars:3,consts:[[1,"container"],[1,"text-center"],[4,"ngIf"],[1,"row"],["class","col-lg-3","style","margin-bottom: 12px",4,"ngFor","ngForOf"],[1,"col-lg-3",2,"margin-bottom","12px"],[3,"showDesc","product","add","itemDetails"]],template:function(t,e){1&t&&(o.Pb(0,"section",0),o.Ac(1,"\n  "),o.Pb(2,"h2",1),o.Ac(3),o.Ob(),o.Ac(4,"\n  "),o.Lb(5,"hr"),o.Ac(6,"\n  "),o.yc(7,a,2,1,"p",2),o.Ac(8,"\n  "),o.Pb(9,"div",3),o.Ac(10,"\n    "),o.yc(11,u,4,2,"div",4),o.Ac(12,"\n  "),o.Ob(),o.Ac(13,"\n"),o.Ob(),o.Ac(14,"\n")),2&t&&(o.xb(3),o.Bc(e.title),o.xb(4),o.ic("ngIf",""!=e.description),o.xb(4),o.ic("ngForOf",e.productsList))},directives:[s.n,s.m,i.e],styles:[""]}),t})()},pFVZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var o=n("rAgn"),r=n("q3Kh"),c=n("0nJ8"),s=n("UYTu");const i=s.a`
  fragment shopProductsObject on ShopProduct {
    id
    price
    stock
    product {
      name
      img
      rating {
        value
        count
      }
      screenshoot @include(if: $relationScreens)
    }
    platform @include(if: $showPlatform) {
      id
      name
      slug
    }
    relationalProducts @include(if: $relationScreens) {
      id
      platform {
        name
      }
    }
  }
`;var a=n("I6Jw");const u=s.a`
  query shopProductsOffersLast(
    $page: Int
    $itemsPage: Int
    $active: ActiveFilterEnum
    $topPrice: Float
    $lastUnits: Int
    $random: Boolean
    $showInfo: Boolean = false
    $showPlatform: Boolean = false
    $relationScreens: Boolean = false
  ) {
    shopProductsOffersLast(
      page: $page
      itemsPage: $itemsPage
      active: $active
      random: $random
      topPrice: $topPrice
      lastUnits: $lastUnits
    ) {
      info @include(if: $showInfo) {
        ...ResultInfoObject
      }
      status
      message
      shopProducts {
        ...shopProductsObject
      }
    }
  }
  ${a.a},
  ${i}
`,l=s.a`
  query shopProductsPlatforms(
    $page: Int
    $itemsPage: Int
    $active: ActiveFilterEnum
    $platform: [ID!]!
    $random: Boolean
    $showInfo: Boolean = false
    $showPlatform: Boolean = false
    $relationScreens: Boolean = false
  ) {
    shopProductsPlatforms(
      page: $page
      itemsPage: $itemsPage
      active: $active
      random: $random
      platform: $platform
    ) {
      info @include(if: $showInfo) {
        ...ResultInfoObject
      }
      status
      message
      shopProducts {
        ...shopProductsObject
      }
    }
  }
  ${a.a},
  ${i}
`,p=(s.a`
  query detallesProducto(
    $id: Int!
    $showPlatform: Boolean = true
    $relationScreens: Boolean = true
  ) {
    shopProductDetails(id: $id) {
      shopProduct {
        ...shopProductsObject
      }
    }
  }
  ${i}
`,s.a`
  query itemsAleatorios(
    $showPlatform: Boolean = true
    $relationScreens: Boolean = false
  ) {
    randomItems: shopProductsOffersLast(itemsPage: 6, random: true) {
      shopProducts {
        ...shopProductsObject
      }
    }
  }

  ${i}
`),f=s.a`
  subscription selectStockProductupdate($id: Int!) {
    selectStockProductupdate(id: $id) {
      id
      stock
    }
  }
`,d=s.a`
  query HomePageInfo(
    $showPlatform: Boolean = false
    $relationScreens: Boolean = false
  ) {
    carousel: shopProductsOffersLast(itemsPage: 4, topPrice: 30, random: true) {
      shopProducts {
        ...shopProductsObject
      }
    }
    pc: shopProductsPlatforms(itemsPage: 4, random: true, platform: ["4"]) {
      shopProducts {
        ...shopProductsObject
      }
    }
    ps4: shopProductsPlatforms(itemsPage: 4, random: true, platform: ["18"]) {
      shopProducts {
        ...shopProductsObject
      }
    }
    topPrice35: shopProductsOffersLast(
      itemsPage: 4
      topPrice: 35
      random: true
    ) {
      shopProducts {
        ...shopProductsObject
      }
    }
  }
  ${i}
`,m=s.a`
  query DetailsPageInfo(
    $id: Int!
    $showPlatform: Boolean = true
    $relationScreens: Boolean = true
  ) {
    randomItems: shopProductsOffersLast(itemsPage: 6, random: true) {
      shopProducts {
        ...shopProductsObject
      }
    }
    details: shopProductDetails(id: $id) {
      shopProduct {
        ...shopProductsObject
      }
    }
  }
  ${i}
`;var g=n("fXoL"),b=n("/IUn");let h=(()=>{class t extends c.a{constructor(t){super(t)}getHomePage(){return this.get(d,{showPlatform:!0}).pipe(Object(r.map)(t=>({carousel:t.carousel,pc:this.manageInfo(t.pc.shopProducts,!0),ps4:this.manageInfo(t.ps4.shopProducts,!0),topPrice35:this.manageInfo(t.topPrice35.shopProducts,!0)})))}shopProductsPlatforms(t=1,e=10,n=o.a.ACTIVE,c=!1,s,i=!1,a=!1){return this.get(l,{page:t,itemsPage:e,active:n,random:c,platform:s,showInfo:i,showPlatform:a}).pipe(Object(r.map)(t=>{const e=t.shopProductsPlatforms;return{info:e.info,result:this.manageInfo(e.shopProducts)}}))}getByLastUnitsOffers(t=1,e=10,n=o.a.ACTIVE,c=!1,s=-1,i=-1,a=!1,l=!1){return this.get(u,{page:t,itemsPage:e,active:n,random:c,topPrice:s,lastUnits:i,showInfo:a,showPlatform:l}).pipe(Object(r.map)(t=>{const e=t.shopProductsOffersLast;return{info:e.info,result:this.manageInfo(e.shopProducts)}}))}getDetailsProduct(t){return this.get(m,{id:t},{},!1).pipe(Object(r.map)(t=>{const e=t.details,n=t.randomItems;return{product:this.setInObject(e.shopProduct,!0),screens:e.shopProduct.product.screenshoot,relational:e.shopProduct.relationalProducts,random:this.manageInfo(n.shopProducts,!0)}}))}getRandomItems(){return this.get(p).pipe(Object(r.map)(t=>(console.log(t.randomItems.shopProducts),this.manageInfo(t.randomItems.shopProducts,!0))))}setInObject(t,e){return{id:t.id,img:t.product.img,name:t.product.name,rating:t.product.rating,description:t.platform&&e?t.platform.name:"",qty:1,price:t.price,stock:t.stock}}manageInfo(t,e=!0){const n=[];return t.map(t=>{n.push(this.setInObject(t,e))}),n}stockUpdateListener(t){return this.subscription(f,{id:t}).pipe(Object(r.map)(t=>t.selectProductStockUpdate))}}return t.\u0275fac=function(e){return new(e||t)(g.Xb(b.a))},t.\u0275prov=g.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},q3Kh:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=n("FWf1");e.map=function(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new c(t,e))}};var c=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new s(t,this.project,this.thisArg))},t}();e.MapOperator=c;var s=function(t){function e(e,n,o){var r=t.call(this,e)||this;return r.project=n,r.count=0,r.thisArg=o||r,r}return o(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(e)},e}(r.Subscriber)},qLNl:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("ofXK"),r=n("ObHw"),c=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[o.c,r.f]]}),t})()},qsuy:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var o=n("UYTu");const r=o.a`
  mutation retearPassword($email: String!) {
    resetPassword(email: $email) {
      status
      message
    }
  }
`,c=o.a`
  mutation cambio($id: ID!, $password: String!) {
    changePassword(id: $id, password: $password) {
      status
      message
    }
  }
`;var s=n("0nJ8"),i=n("q3Kh"),a=n("tk/3"),u=n("fXoL"),l=n("/IUn");let p=(()=>{class t extends s.a{constructor(t){super(t)}reset(t){return this.set(r,{email:t}).pipe(Object(i.map)(t=>t.resetPassword))}change(t,e){const n=JSON.parse(atob(t.split(".")[1])).user;return this.set(c,{id:n.id,password:e},{headers:new a.c({Authorization:t})}).pipe(Object(i.map)(t=>t.changePassword))}}return t.\u0275fac=function(e){return new(e||t)(u.Xb(l.a))},t.\u0275prov=u.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},rAgn:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(t){return t.ALL="ALL",t.INACTIVE="INACTIVE",t.ACTIVE="ACTIVE",t}({})},vqVJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n("ODCe"),r=n("0nJ8"),c=n("lJxs"),s=n("UdEE"),i=n("tk/3"),a=n("fXoL"),u=n("/IUn");let l=(()=>{class t extends r.a{constructor(t){super(t)}getUsers(t=1,e=20){return this.get(o.c,{include:!0,itemsPage:e,page:t}).pipe(Object(c.a)(t=>t.users))}register(t){return this.set(s.d,{user:t,include:!1}).pipe(Object(c.a)(t=>t.register))}active(t,e,n){const o=JSON.parse(atob(t.split(".")[1])).user;return this.set(s.b,{id:o.id,birthday:e,password:n},{headers:new i.c({Authorization:t})}).pipe(Object(c.a)(t=>t.activeUserAction))}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(u.a))},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);