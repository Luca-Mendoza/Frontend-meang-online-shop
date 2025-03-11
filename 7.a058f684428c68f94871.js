(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{JXV5:function(e,t,a){"use strict";a.r(t),a.d(t,"GenresModule",(function(){return w}));var s=a("OwPx"),n=a("ofXK"),r=a("tyNb"),i=a("mrSG"),o=a("0iDv"),c=a("I6Jw"),u=a("UYTu");const d=u.a`
  fragment GenresObject on Genre {
    id
    name
    slug
  }
`,l=u.a`
query genresList($page: Int, $itemsPage: Int) {
  genres(page: $page, itemsPage: $itemsPage) {
    info {
      ...ResultInfoObject
    }
    status
    message
    genres {
      ...GenresObject
    }
  }
}
${d}
${c.a}
`;var b=a("b1el"),m=a("sYSY"),p=a("Ppxc"),g=a("fXoL");const h=u.a`
  mutation insertarGenero($genre: String!) {
    addGenre(genre: $genre) {
      status
      message
      genre {
        ...GenresObject
      }
    }
  }
  ${d}
`,f=u.a`

  mutation modificarGenero( $id: ID!, $genre: String!) {
    updateGenre(id: $id, genre: $genre) {
      status
      message
      genre {
        ...GenresObject
      }
    }
  }
  ${d}
`,v=u.a`

  mutation bloquearGenero( $id: ID!) {
    blockGenre(id: $id) {
      status
      message
    }
  }
`;var G=a("0nJ8"),O=a("q3Kh"),j=a("/IUn");let y=(()=>{class e extends G.a{constructor(e){super(e)}addGenre(e){return this.set(h,{genre:e},{}).pipe(Object(O.map)(e=>e.addGenre))}update(e,t){return this.set(f,{id:e,genre:t},{}).pipe(Object(O.map)(e=>e.updateGenre))}block(e){return this.set(v,{id:e},{}).pipe(Object(O.map)(e=>e.blockGenre))}}return e.\u0275fac=function(t){return new(t||e)(g.Xb(j.a))},e.\u0275prov=g.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var k=a("egAa"),S=a("hrBI");const $=[{path:"",component:(()=>{class e{constructor(e,t){this.service=e,this.titleService=t,this.query=l}ngOnInit(){this.titleService.updateTitle(p.a.GENRES),this.context={},this.itemsPage=5,this.resultData={listKey:"genres",definitionKey:"genres"},this.include=!1,this.columns=[{property:"id",label:"#"},{property:"name",label:"Nombre del g\xe9nero"},{property:"slug",label:"Slug"}]}takeAction(e){return Object(i.b)(this,void 0,void 0,(function*(){const t=e[1],a=`<input id="name" value="${void 0!==t.name&&""!==t.name?t.name:""}" class="swal2-input" required>`;switch(e[0]){case"add":this.addForm(a);break;case"edit":this.updateForm(a,t);break;case"info":const e=yield Object(b.e)("Detalles",`${t.name} (${t.slug})`,400,'<i class="fas fa-edit"></i> Editar','<i class="fas fa-lock"></i> Block');e?this.updateForm(a,t):!1===e&&this.blockForm(t);break;case"block":this.blockForm(t)}}))}addForm(e){return Object(i.b)(this,void 0,void 0,(function*(){const t=yield Object(b.b)("A\xf1adir g\xe9nero",e,"name");this.addGenre(t)}))}addGenre(e){e.value&&this.service.addGenre(e.value).subscribe(e=>{e.status?Object(o.a)(m.a.SUCCESS,e.message):Object(o.a)(m.a.WARNING,e.message)})}updateGenre(e,t){t.value&&this.service.update(e,t.value).subscribe(e=>{e.status?Object(o.a)(m.a.SUCCESS,e.message):Object(o.a)(m.a.WARNING,e.message)})}updateForm(e,t){return Object(i.b)(this,void 0,void 0,(function*(){const a=yield Object(b.b)("Modificar g\xe9nero",e,"name");this.updateGenre(t.id,a)}))}blockGenre(e){this.service.block(e).subscribe(e=>{e.status?Object(o.a)(m.a.SUCCESS,e.message):Object(o.a)(m.a.WARNING,e.message)})}blockForm(e){return Object(i.b)(this,void 0,void 0,(function*(){!1===(yield Object(b.e)("\xbfBloquear?","Si bloqueas el item seleccionado, no se mostrar\xe1 en la lista",475,"No, no bloquear","Si, bloquear"))&&this.blockGenre(e.id)}))}}return e.\u0275fac=function(t){return new(t||e)(g.Kb(y),g.Kb(k.a))},e.\u0275cmp=g.Eb({type:e,selectors:[["app-genres"]],decls:2,vars:6,consts:[[3,"query","context","itemsPage","resultData","include","tableColumns","manageItem"]],template:function(e,t){1&e&&(g.Pb(0,"app-table-pagination",0),g.ac("manageItem",(function(e){return t.takeAction(e)})),g.Ob(),g.Ac(1,"\n")),2&e&&g.ic("query",t.query)("context",t.context)("itemsPage",t.itemsPage)("resultData",t.resultData)("include",t.include)("tableColumns",t.columns)},directives:[S.a],styles:[""]}),e})()}];let I=(()=>{class e{}return e.\u0275mod=g.Ib({type:e}),e.\u0275inj=g.Hb({factory:function(t){return new(t||e)},imports:[[r.e.forChild($)],r.e]}),e})(),w=(()=>{class e{}return e.\u0275mod=g.Ib({type:e}),e.\u0275inj=g.Hb({factory:function(t){return new(t||e)},imports:[[n.c,I,s.a]]}),e})()}}]);