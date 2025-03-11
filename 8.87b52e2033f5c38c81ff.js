(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{h9nd:function(e,t,a){"use strict";a.r(t),a.d(t,"TagsModule",(function(){return w}));var s=a("OwPx"),i=a("ofXK"),n=a("tyNb"),r=a("mrSG"),c=a("UYTu");const o=c.a`
  fragment tagObject on Tag {
    id
    name
    slug
  }
`;var u=a("I6Jw");const d=c.a`
  query tagsList($page: Int, $itemsPage: Int) {
    tags(page: $page, itemsPage: $itemsPage) {
      info {
        ...ResultInfoObject
      }
      status
      message
      tags {
        ...tagObject
      }
    }
  }
  ${o}
  ${u.a}
`;var l=a("b1el"),b=a("sYSY"),g=a("0iDv"),m=a("Ppxc"),p=a("fXoL");const h=c.a`
mutation insertarTag($tag: String!) {
    addTag(tag: $tag) {
        status
        message
        tag {
            ...tagObject
        }
    }
}
${o}
`,f=c.a`

  mutation modificarTag( $id: ID!, $tag: String!) {
    updateTag(id: $id, tag: $tag) {
      status
      message
      tag {
        ...tagObject
      }
    }
  }
  ${o}
`,v=c.a`

  mutation bloquearTag( $id: ID!) {
    blockTag(id: $id) {
      status
      message
    }
  }
`;var O=a("0nJ8"),j=a("q3Kh"),y=a("/IUn");let k=(()=>{class e extends O.a{constructor(e){super(e)}addTag(e){return this.set(h,{genre:e},{}).pipe(Object(j.map)(e=>e.addTag))}update(e,t){return this.set(f,{id:e,tag:t},{}).pipe(Object(j.map)(e=>e.updateTag))}block(e){return this.set(v,{id:e},{}).pipe(Object(j.map)(e=>e.blockTag))}}return e.\u0275fac=function(t){return new(t||e)(p.Xb(y.a))},e.\u0275prov=p.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var S=a("egAa"),$=a("hrBI");const I=[{path:"",component:(()=>{class e{constructor(e,t){this.service=e,this.titleService=t,this.query=d}ngOnInit(){this.titleService.updateTitle(m.a.TAGS),this.context={},this.itemsPage=10,this.resultData={listKey:"tags",definitionKey:"tags"},this.include=!1,this.columns=[{property:"id",label:"#"},{property:"name",label:"Tag"},{property:"slug",label:"Slug"}]}takeAction(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=e[1],a=`<input id="name" value="${void 0!==t.name&&""!==t.name?t.name:""}" class="swal2-input" required>`;switch(e[0]){case"add":this.addForm(a);break;case"edit":this.updateForm(a,t);break;case"info":const e=yield Object(l.e)("Detalles",`${t.name} (${t.slug})`,400,'<i class="fas fa-edit"></i> Editar','<i class="fas fa-lock"></i> Block');e?this.updateForm(a,t):!1===e&&this.blockForm(t);break;case"block":this.blockForm(t)}}))}addForm(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=yield Object(l.b)("A\xf1adir tag",e,"name");this.addGenre(t)}))}addGenre(e){e.value&&this.service.addTag(e.value).subscribe(e=>{e.status?Object(g.a)(b.a.SUCCESS,e.message):Object(g.a)(b.a.WARNING,e.message)})}updateGenre(e,t){t.value&&this.service.update(e,t.value).subscribe(e=>{e.status?Object(g.a)(b.a.SUCCESS,e.message):Object(g.a)(b.a.WARNING,e.message)})}updateForm(e,t){return Object(r.b)(this,void 0,void 0,(function*(){const a=yield Object(l.b)("Modificar tag",e,"name");this.updateGenre(t.id,a)}))}blockGenre(e){this.service.block(e).subscribe(e=>{e.status?Object(g.a)(b.a.SUCCESS,e.message):Object(g.a)(b.a.WARNING,e.message)})}blockForm(e){return Object(r.b)(this,void 0,void 0,(function*(){!1===(yield Object(l.e)("\xbfBloquear?","Si bloqueas el item seleccionado, no se mostrar\xe1 en la lista",475,"No, no bloquear","Si, bloquear"))&&this.blockGenre(e.id)}))}}return e.\u0275fac=function(t){return new(t||e)(p.Kb(k),p.Kb(S.a))},e.\u0275cmp=p.Eb({type:e,selectors:[["app-tags"]],decls:2,vars:6,consts:[[3,"query","context","itemsPage","resultData","include","tableColumns","manageItem"]],template:function(e,t){1&e&&(p.Pb(0,"app-table-pagination",0),p.ac("manageItem",(function(e){return t.takeAction(e)})),p.Ob(),p.Ac(1,"\n")),2&e&&p.ic("query",t.query)("context",t.context)("itemsPage",t.itemsPage)("resultData",t.resultData)("include",t.include)("tableColumns",t.columns)},directives:[$.a],styles:[""]}),e})()}];let T=(()=>{class e{}return e.\u0275mod=p.Ib({type:e}),e.\u0275inj=p.Hb({factory:function(t){return new(t||e)},imports:[[n.e.forChild(I)],n.e]}),e})(),w=(()=>{class e{}return e.\u0275mod=p.Ib({type:e}),e.\u0275inj=p.Hb({factory:function(t){return new(t||e)},imports:[[i.c,T,s.a]]}),e})()}}]);