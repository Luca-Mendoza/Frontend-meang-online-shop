(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6Ar+":function(c,t,n){"use strict";n.r(t),n.d(t,"DetailsModule",(function(){return k}));var i=n("ofXK"),e=n("tyNb"),o=n("X1hh"),r=n("b1el"),s=n("fXoL"),a=n("pFVZ"),d=n("e+rv"),u=n("ObHw");function b(c,t){if(1&c){const c=s.Qb();s.Pb(0,"img",22),s.ac("click",(function(){s.sc(c);const n=t.index;return s.cc(2).selectImgMain(n)})),s.Ob()}if(2&c){const c=t.$implicit;s.kc("alt","Screen ",t.index,""),s.ic("src",c,s.tc)}}function p(c,t){if(1&c&&(s.Ac(0,"\n            "),s.Pb(1,"div",23),s.Ac(2),s.Ob(),s.Ac(3,"\n          ")),2&c){const c=s.cc(2);s.xb(2),s.Dc("",c.currencySelect," ",c.product.price,"")}}function l(c,t){if(1&c&&(s.Pb(0,"div",23),s.Ac(1),s.dc(2,"number"),s.Pb(3,"span",24),s.Ac(4),s.dc(5,"number"),s.Ob(),s.Ac(6,"\n            "),s.Pb(7,"span",25),s.Ac(8),s.Ob(),s.Ac(9,"\n          "),s.Ob()),2&c){const c=s.cc(2);s.xb(1),s.Dc("\n            ",c.currencySelect," ",s.ec(2,5,c.product.priceDiscount),"\n            "),s.xb(3),s.Dc("\n              ",c.currencySelect," ",s.ec(5,7,c.product.price),"\n            "),s.xb(4),s.Cc("\n              (",c.product.discount,"%)\n            ")}}function m(c,t){1&c&&(s.Pb(0,"span"),s.Ac(1,"No hay stock. Producto no disponible en este momento"),s.Ob())}function g(c,t){if(1&c){const c=s.Qb();s.Pb(0,"shop-qty-selector",26),s.ac("updateValue",(function(t){return s.sc(c),s.cc(2).changeValue(t)})),s.Ob()}if(2&c){const c=s.cc(2);s.ic("qty",c.product.qty)("stock",c.product.stock)}}function f(c,t){if(1&c&&(s.Pb(0,"option",17),s.Ac(1),s.Ob()),2&c){const c=t.$implicit;s.ic("value",c.id),s.xb(1),s.Cc("\n          ",c.platform.name,"\n        ")}}function h(c,t){if(1&c){const c=s.Qb();s.Pb(0,"button",27),s.ac("click",(function(){return s.sc(c),s.cc(2).addToCart()})),s.Ac(1,"\n        "),s.Lb(2,"i",28),s.Ac(3,"\xa0\xa0 A\xf1adir\n      "),s.Ob()}}const A=function(c){return["/games/details",c]};function O(c,t){if(1&c&&(s.Pb(0,"div",29),s.Ac(1,"\n      "),s.Pb(2,"a",30),s.Ac(3,"\n        "),s.Lb(4,"img",31),s.Ac(5,"\n      "),s.Ob(),s.Ac(6,"\n      "),s.Pb(7,"h6",32),s.Ac(8),s.Ob(),s.Ac(9,"\n    "),s.Ob()),2&c){const c=t.$implicit;s.xb(2),s.lc("title","",c.name," ",c.description,""),s.ic("routerLink",s.nc(7,A,c.id)),s.xb(2),s.lc("alt","",c.name," ",c.description,""),s.ic("src",c.img,s.tc),s.xb(4),s.Bc(c.name)}}function P(c,t){if(1&c){const c=s.Qb();s.Pb(0,"div",1),s.Ac(1,"\n  "),s.Ac(2,"\n  "),s.Pb(3,"div",2),s.Ac(4,"\n    "),s.Pb(5,"div",3),s.Ac(6,"\n      "),s.yc(7,b,1,2,"img",4),s.Ac(8,"\n    "),s.Ob(),s.Ac(9,"\n    "),s.Pb(10,"div",5),s.Ac(11,"\n      "),s.Lb(12,"img",6),s.Ac(13,"\n    "),s.Ob(),s.Ac(14,"\n\n    "),s.Pb(15,"div",7),s.Ac(16,"\n      "),s.Pb(17,"h4",8),s.Ac(18),s.Ob(),s.Ac(19,"\n      "),s.Pb(20,"div",2),s.Ac(21,"\n        "),s.Pb(22,"div",9),s.Ac(23,"\n          "),s.Lb(24,"shop-rating",10),s.Ac(25,"\n        "),s.Ob(),s.Ac(26,"\n        "),s.Pb(27,"div",9),s.Ac(28,"\n          "),s.yc(29,p,4,2,"ng-template",null,11,s.zc),s.Ac(31,"\n          "),s.yc(32,l,10,9,"div",12),s.Ac(33,"\n        "),s.Ob(),s.Ac(34,"\n\n        "),s.Pb(35,"div",9),s.Ac(36),s.Lb(37,"hr"),s.Ac(38,"\n          "),s.yc(39,m,2,0,"span",13),s.Ac(40,"\n          "),s.yc(41,g,1,2,"shop-qty-selector",14),s.Ac(42,"\n        "),s.Ob(),s.Ac(43,"\n      "),s.Ob(),s.Ac(44,"\n      "),s.Lb(45,"br"),s.Ac(46,"\n      "),s.Pb(47,"span",15),s.Ac(48,"Platafotmas:"),s.Ob(),s.Ac(49,"\xa0\n      "),s.Pb(50,"select",16),s.ac("change",(function(t){return s.sc(c),s.cc().selectOtherPlatform(t)})),s.Ac(51,"\n        "),s.Pb(52,"option",17),s.Ac(53),s.Ob(),s.Ac(54,"\n        "),s.yc(55,f,2,2,"option",18),s.Ac(56,"\n        "),s.Ob(),s.Ac(57,"\n      "),s.Lb(58,"br"),s.Ac(59,"\n      "),s.yc(60,h,4,0,"button",19),s.Ac(61,"\n    "),s.Ob(),s.Ac(62,"\n  "),s.Ob(),s.Ac(63,"\n  "),s.Ac(64,"\n  "),s.Lb(65,"hr"),s.Ac(66,"\n  "),s.Ac(67,"\n  "),s.Pb(68,"h3",20),s.Ac(69,"Juegos que te puedan interesar"),s.Ob(),s.Ac(70,"\n\n  "),s.Pb(71,"div",2),s.Ac(72,"\n    "),s.yc(73,O,10,9,"div",21),s.Ac(74,"\n\n    "),s.Ac(75,"\n  "),s.Ob(),s.Ac(76,"\n  "),s.Ac(77,"\n"),s.Ob()}if(2&c){const c=s.rc(30),t=s.cc();s.xb(7),s.ic("ngForOf",t.screens),s.xb(5),s.ic("src",t.selectImage,s.tc),s.xb(6),s.Dc("",t.product.name," ",t.product.description,""),s.xb(6),s.ic("rating",t.product.rating),s.xb(8),s.ic("ngIf",t.product.discount)("ngIfElse",c),s.xb(4),s.Cc("\n          Stock: ",t.product.stock,"\n          "),s.xb(3),s.ic("ngIf",0==t.product.stock),s.xb(2),s.ic("ngIf",t.product.stock>0),s.xb(11),s.ic("value",t.product.id),s.xb(1),s.Bc(t.product.description),s.xb(2),s.ic("ngForOf",t.relationalProducts),s.xb(5),s.ic("ngIf",t.product.stock>0),s.xb(13),s.ic("ngForOf",t.randomItems)}}const y=[{path:"",component:(()=>{class c{constructor(c,t,n){this.productService=c,this.activatedRouter=t,this.cartService=n,this.currencySelect=o.b,this.screens=[],this.relationalProducts=[],this.randomItems=[]}ngOnInit(){this.activatedRouter.params.subscribe(c=>{this.loading=!0,Object(r.d)("Cargando datos","Espera mientra carga la informaci\xf3n"),this.loadDataValue(+c.id),this.updateListener(+c.id)}),this.cartService.itemsVar$.subscribe(c=>{this.product.qty=0!==c.subtotal?this.findProduct(+this.product.id).qty:1})}updateListener(c){this.productService.stockUpdateListener(c).subscribe(c=>{this.product.stock=c.stock,this.product.qty>this.product.stock&&(this.product.qty=this.product.stock),0===this.product.stock&&(this.product.qty=1)})}findProduct(c){return this.cartService.cart.products.find(t=>+t.id===c)}loadDataValue(c){this.productService.getDetailsProduct(c).subscribe(c=>{this.product=c.product;const t=this.findProduct(+this.product.id);this.product.qty=void 0!==t?t.qty:this.product.qty,this.selectImage=this.product.img,this.screens=c.screens,this.relationalProducts=c.relational,this.randomItems=c.random,this.loading=!1,Object(r.a)()})}changeValue(c){this.product.qty=c}selectOtherPlatform(c){const t=+c.target.value;this.loadDataValue(t),this.updateListener(t),window.history.replaceState({},"","/#/games/details/"+t)}selectImgMain(c){this.selectImage=this.screens[c]}addToCart(){this.cartService.manageProduct(this.product)}}return c.\u0275fac=function(t){return new(t||c)(s.Kb(a.a),s.Kb(e.a),s.Kb(d.a))},c.\u0275cmp=s.Eb({type:c,selectors:[["app-details"]],decls:3,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"row"],[1,"col-md-1","screens-section"],["class","img-fluid mini",3,"src","alt","click",4,"ngFor","ngForOf"],[1,"col-md-7"],["alt","",1,"img-fluid","main-img",3,"src"],[1,"col-md-4"],[1,"my-3"],[1,"col-lg-12"],[3,"rating"],["noDiscount",""],["class","price",4,"ngIf","ngIfElse"],[4,"ngIf"],[3,"qty","stock","updateValue",4,"ngIf"],[1,"h5"],["name","","id","",3,"change"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["class","btn btn-dark mt-3",3,"click",4,"ngIf"],[1,"my-4"],["class","col-md-2 col-sm-6 mb-4",4,"ngFor","ngForOf"],[1,"img-fluid","mini",3,"src","alt","click"],[1,"price"],[1,"price_span"],[1,"price_span","discount-percentage"],[3,"qty","stock","updateValue"],[1,"btn","btn-dark","mt-3",3,"click"],[1,"fas","fa-cart-plus"],[1,"col-md-2","col-sm-6","mb-4"],[3,"routerLink","title"],[1,"img-fluid","more-game",3,"src","alt"],[1,"text-center"]],template:function(c,t){1&c&&(s.Ac(0,"\n"),s.yc(1,P,78,15,"div",0),s.Ac(2,"\n")),2&c&&(s.xb(1),s.ic("ngIf",t.product&&!t.loading))},directives:[i.n,i.m,u.i,u.g,e.d],pipes:[i.f],styles:[".price[_ngcontent-%COMP%]{font-size:20px;font-weight:800;color:#cc1c39}.price[_ngcontent-%COMP%], .price_span[_ngcontent-%COMP%]{text-align:left;margin-left:5px;margin-bottom:12px}.price_span[_ngcontent-%COMP%]{font-size:18px;font-weight:400;color:#999;text-decoration:line-through}.discount-percentage[_ngcontent-%COMP%]{text-decoration:none}.price-total[_ngcontent-%COMP%]{font-weight:700;font-size:22px;margin-top:-5px}.container[_ngcontent-%COMP%]{margin-top:30px}.mini[_ngcontent-%COMP%]{margin-bottom:10px}@media (max-width:600px){.screens-section[_ngcontent-%COMP%]{display:none}}.main-img[_ngcontent-%COMP%], .more-game[_ngcontent-%COMP%]{object-fit:cover;object-position:center;display:block;height:100%;width:100%}.more-game[_ngcontent-%COMP%]{max-height:100px}"]}),c})()}];let x=(()=>{class c{}return c.\u0275mod=s.Ib({type:c}),c.\u0275inj=s.Hb({factory:function(t){return new(t||c)},imports:[[e.e.forChild(y)],e.e]}),c})();var v=n("qLNl");let k=(()=>{class c{}return c.\u0275mod=s.Ib({type:c}),c.\u0275inj=s.Hb({factory:function(t){return new(t||c)},imports:[[i.c,x,u.j,u.h,v.a]]}),c})()}}]);