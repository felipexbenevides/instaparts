(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{tmrb:function(i,t,n){"use strict";n.r(t),n.d(t,"Tab1PageModule",(function(){return G}));var e=n("TEn/"),o=n("ofXK"),c=n("3Pt+"),a=n("qtYk"),s=n("tyNb"),b=n("EVdn"),r=n.n(b),l=n("fXoL");function p(i,t){1&i&&(l.Mb(0,"span"),l.Mb(1,"ion-chip"),l.Mb(2,"ion-label"),l.ic(3,"Debug"),l.Lb(),l.Lb(),l.Lb())}function u(i,t){if(1&i){const i=l.Nb();l.Mb(0,"ion-item"),l.Mb(1,"b"),l.ic(2,"["),l.Mb(3,"span",16),l.Ub("click",(function(t){return l.dc(i),l.Wb(2).setProd(t)})),l.ic(4),l.Lb(),l.ic(5,"]"),l.Lb(),l.Lb()}if(2&i){const i=t.$implicit;l.zb(4),l.jc(i)}}function g(i,t){if(1&i&&(l.Mb(0,"ion-list"),l.gc(1,u,6,1,"ion-item",15),l.Lb()),2&i){const i=l.Wb();l.zb(1),l.Zb("ngForOf",i.items)}}function d(i,t){1&i&&l.Kb(0,"div")}function m(i,t){}function h(i,t){1&i&&(l.Mb(0,"div"),l.Mb(1,"ion-chip",17),l.Mb(2,"ion-label"),l.ic(3,"n\xe3o encontrado"),l.Lb(),l.Lb(),l.Lb())}function f(i,t){if(1&i&&l.gc(0,h,4,0,"div",1),2&i){const i=l.Wb();l.Zb("ngIf",i.codiprod)}}function M(i,t){if(1&i){const i=l.Nb();l.Mb(0,"div"),l.Mb(1,"ion-button",28),l.Ub("click",(function(){return l.dc(i),l.Wb(2).onSubmit()})),l.ic(2," ENVIAR "),l.Lb(),l.Lb()}}function I(i,t){if(1&i){const i=l.Nb();l.Mb(0,"div"),l.Mb(1,"form"),l.Mb(2,"ion-card",18),l.Mb(3,"ion-badge",19),l.ic(4),l.Lb(),l.Mb(5,"ion-badge",19),l.ic(6),l.Lb(),l.Mb(7,"ion-badge",19),l.ic(8),l.Lb(),l.gc(9,M,3,0,"div",1),l.Lb(),l.Mb(10,"ion-card"),l.Mb(11,"ion-item"),l.Mb(12,"ion-label"),l.ic(13,"#Imagem de capa"),l.Lb(),l.Mb(14,"ion-button",8),l.Ub("click",(function(){return l.dc(i),l.Wb().selectfile("capa")})),l.Kb(15,"ion-icon",20),l.Lb(),l.Mb(16,"span",21),l.Mb(17,"input",22),l.Ub("change",(function(){return l.dc(i),l.Wb().onChangeImage("input-capa","img-capa")})),l.Lb(),l.Kb(18,"input"),l.Lb(),l.Lb(),l.Mb(19,"ion-card-content"),l.Kb(20,"img",23),l.Lb(),l.Lb(),l.Mb(21,"ion-card"),l.Mb(22,"ion-item"),l.Mb(23,"ion-label"),l.ic(24,"#Imagem 2"),l.Lb(),l.Mb(25,"ion-button",8),l.Ub("click",(function(){return l.dc(i),l.Wb().selectfile("img2")})),l.Kb(26,"ion-icon",20),l.Lb(),l.Mb(27,"span",24),l.Mb(28,"input",22),l.Ub("change",(function(){return l.dc(i),l.Wb().onChangeImage("input-img2","img-img2")})),l.Lb(),l.Kb(29,"input"),l.Lb(),l.Lb(),l.Mb(30,"ion-card-content"),l.Kb(31,"img",25),l.Lb(),l.Lb(),l.Mb(32,"ion-card"),l.Mb(33,"ion-item"),l.Mb(34,"ion-label"),l.ic(35,"#Imagem 3"),l.Lb(),l.Mb(36,"ion-button",8),l.Ub("click",(function(){return l.dc(i),l.Wb().selectfile("img3")})),l.Kb(37,"ion-icon",20),l.Lb(),l.Mb(38,"span",26),l.Mb(39,"input",22),l.Ub("change",(function(){return l.dc(i),l.Wb().onChangeImage("input-img3","img-img3")})),l.Lb(),l.Kb(40,"input"),l.Lb(),l.Lb(),l.Mb(41,"ion-card-content"),l.Kb(42,"img",27),l.Lb(),l.Lb(),l.Lb(),l.Mb(43,"small"),l.ic(44),l.Lb(),l.Kb(45,"br"),l.Mb(46,"small"),l.ic(47),l.Lb(),l.Kb(48,"br"),l.Mb(49,"small"),l.ic(50),l.Lb(),l.Lb()}if(2&i){const i=l.Wb();l.zb(4),l.jc(i.prod.desc),l.zb(2),l.jc(i.prod.codifab),l.zb(2),l.kc("",i.prod.qtd," UN"),l.zb(1),l.Zb("ngIf",i.image.flag),l.zb(11),l.ac("src","",i.url,"/instaparts/img.php?CODIPROD=",i.codiprod,"&IMG=CAPA_IMG",l.ec),l.zb(11),l.ac("src","",i.url,"/instaparts/img.php?CODIPROD=",i.codiprod,"&IMG=IMG2_IMG",l.ec),l.zb(11),l.ac("src","",i.url,"/instaparts/img.php?CODIPROD=",i.codiprod,"&IMG=IMG3_IMG",l.ec),l.zb(2),l.jc(i.result.capa),l.zb(3),l.jc(i.result.img2),l.zb(3),l.jc(i.result.img3)}}const L=[{path:"",component:(()=>{class i{constructor(){this.itemsArray=!1,this.prod={codi:"",desc:"",codifab:"",qtd:"",flag:!1},this.image={flag:!1,"input-capa":!1,"input-img2":!1,"input-img3":!1,count:0,success:0},this.result={capa:"",img2:"",img3:""},this.origin=origin,this.window=window,this.url="",this.debug=!1,this.initDebug(),this.clickedSearch(),this.initializeItems(),this.isItemAvailable=!1}initDebug(){"http://localhost:8100"==this.origin&&(this.debug=!0,console.log("Debug set")),this.debug?(this.codiprod="010278",this.url="http://73140629c078.sn.mynetname.net/"):this.url=this.origin,window.localStorage.setItem("url",this.url)}initFlags(){this.image={flag:!1,"input-capa":!1,"input-img2":!1,"input-img3":!1,count:0,success:0}}clickedBarcode(){alert("")}onSearchChange(i){}selectfile(i){r()("#input-"+i+" input").trigger("click")}onChangeImage(i,t){this.image.count+=1,this.image.flag=!0,this.image[i]=!0,r()("#"+t)[0].src=window.URL.createObjectURL(r()("#"+i+" input")[0].files[0]),console.log(window.URL.createObjectURL(r()("#"+i+" input")[0].files[0]))}onSubmit(){confirm("Confirma a altera\xe7\xe3o das fotos?")&&(r()("#input-capa input")[0].files[0]&&this.image["input-capa"]&&this.submitCapa(),r()("#input-img2 input")[0].files[0]&&this.image["input-img2"]&&this.submitImg2(),r()("#input-img3 input")[0].files[0]&&this.image["input-img3"]&&this.submitImg3(),this.image.flag=!1)}submitCapa(){var i;r()("#input-capa input")[0].files[0]&&(console.log("submitCapa"),(i=new FormData).append("CAPA_IMG",r()("#input-capa input")[0].files[0]),this.result.capa=this.codiprod+" > CAPA_IMG : ERRO",r.a.ajax({type:"POST",url:this.url+"/instaparts/upload.php?IMG=CAPA_IMG&CODIGO="+btoa(this.codiprod),data:i,processData:!1,contentType:!1,success:i=>{console.log(i),this.result.capa=JSON.parse(i),this.image.success+=1}}))}submitImg2(){var i;r()("#input-img2 input")[0].files[0]&&(console.log("submitImg2"),(i=new FormData).append("IMG2_IMG",r()("#input-img2 input")[0].files[0]),this.result.img2=this.codiprod+" > IMG2_IMG : ERRO",setTimeout(()=>{r.a.ajax({type:"POST",url:this.url+"/instaparts/upload.php?IMG=IMG2_IMG&CODIGO="+btoa(this.codiprod),data:i,processData:!1,contentType:!1,success:i=>{console.log(i),this.result.img2=JSON.parse(i),this.image.success+=1}})},1e3))}submitImg3(){var i;r()("#input-img3 input")[0].files[0]&&(console.log("submitImg3"),(i=new FormData).append("IMG3_IMG",r()("#input-img3 input")[0].files[0]),this.result.img3=this.codiprod+" > IMG3_IMG : ERRO",setTimeout(()=>{r.a.ajax({type:"POST",url:this.url+"/instaparts/upload.php?IMG=IMG3_IMG&CODIGO="+btoa(this.codiprod),data:i,processData:!1,contentType:!1,success:i=>{console.log(i),this.result.img3=JSON.parse(i),this.image.success+=1}})},2e3))}clickedSearch(){this.isItemAvailable=!1,r.a.get(this.url+"/instaparts/oci.php?CODIPROD="+this.codiprod,i=>{(i=JSON.parse(i)).data[0]?(this.prod.codi=(i=i.data[0]).CODI_PROD,this.prod.desc=i.DESC_PROD,this.prod.codifab=i.CODIFAB_PROD,this.prod.qtd=i.QTDD_QTDD,this.prod.flag=!0,this.initFlags()):this.prod.flag=!1})}setProd(i){console.log("setProd"),this.isItemAvailable=!1,this.codiprod=i.target.innerText,this.clickedSearch()}getItems(i){const t=i.target.value;t.length>2?this.initializeItems():this.isItemAvailable=!1,t.length>2&&t&&""!=t.trim()&&(this.isItemAvailable=!0,this.items=this.items.filter(i=>i.toLowerCase().indexOf(t.toLowerCase())>-1),this.items=this.items.slice(0,10))}initializeItems(){this.itemsArray?this.items=this.itemsArray:r.a.get(this.url+"/api/balanco/produto?OP=LIST",i=>{i=JSON.parse(i),this.itemsArray=i,this.items=i})}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=l.Db({type:i,selectors:[["app-tab1"]],decls:26,vars:11,consts:[[3,"translucent"],[4,"ngIf"],[3,"fullscreen"],["vertical","top","horizontal","end","slot","fixed"],["color","success"],["collapse","condense"],["size","large"],["slot","primary"],[3,"click"],["slot","icon-only","name","search"],["debounce","500","cancelButtonText","X","placeholder","C\xf3digo do produto",3,"ngModel","ionInput","ionChange","ngModelChange"],["inputSearch",""],[4,"ngIf","ngIfThen","ngIfElse"],["thenBlock",""],["elseBlock",""],[4,"ngFor","ngForOf"],[2,"color","rebeccapurple",3,"click"],["outline","","color","danger"],[2,"text-align","center"],["color","primary"],["name","camera"],["id","input-capa",2,"display","none"],["type","file","accept","image/*",3,"change"],["id","img-capa","alt","",3,"src"],["id","input-img2",2,"display","none"],["id","img-img2","alt","",3,"src"],["id","input-img3",2,"display","none"],["id","img-img3","alt","",3,"src"],["color","danger","expand","block",3,"click"]],template:function(i,t){if(1&i&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-title"),l.ic(3," Gerenciar Fotos "),l.gc(4,p,4,0,"span",1),l.Lb(),l.Lb(),l.Lb(),l.Mb(5,"ion-content",2),l.Mb(6,"ion-fab",3),l.Mb(7,"ion-fab-button",4),l.ic(8),l.Lb(),l.Lb(),l.Mb(9,"ion-header",5),l.Mb(10,"ion-toolbar"),l.Mb(11,"ion-title",6),l.ic(12,"Gerenciar fotos"),l.Lb(),l.Lb(),l.Lb(),l.Mb(13,"ion-toolbar"),l.Mb(14,"ion-buttons",7),l.Mb(15,"ion-button",8),l.Ub("click",(function(){return t.clickedSearch()})),l.Kb(16,"ion-icon",9),l.Lb(),l.Lb(),l.Mb(17,"ion-searchbar",10,11),l.Ub("ionInput",(function(i){return t.getItems(i)}))("ionChange",(function(i){return t.onSearchChange(i)}))("ngModelChange",(function(i){return t.codiprod=i})),l.Lb(),l.gc(19,g,2,1,"ion-list",1),l.Lb(),l.gc(20,d,1,0,"div",12),l.gc(21,m,0,0,"ng-template",null,13,l.hc),l.gc(23,f,1,1,"ng-template",null,14,l.hc),l.gc(25,I,51,13,"div",1),l.Lb()),2&i){const i=l.cc(22),n=l.cc(24);l.Zb("translucent",!0),l.zb(4),l.Zb("ngIf",t.debug),l.zb(1),l.Zb("fullscreen",!0),l.zb(3),l.lc(" ",t.image.success,"/",t.image.count," "),l.zb(9),l.Zb("ngModel",t.codiprod),l.zb(2),l.Zb("ngIf",t.isItemAvailable),l.zb(1),l.Zb("ngIf",t.prod.flag)("ngIfThen",i)("ngIfElse",n),l.zb(5),l.Zb("ngIf",t.prod.flag)}},directives:[e.k,e.v,e.u,o.i,e.h,e.i,e.j,e.d,e.c,e.l,e.q,e.z,c.c,c.f,e.g,e.n,e.o,o.h,e.m,c.g,c.d,c.e,e.e,e.b,e.f],styles:[""]}),i})()}];let O=(()=>{class i{}return i.\u0275mod=l.Hb({type:i}),i.\u0275inj=l.Gb({factory:function(t){return new(t||i)},imports:[[s.i.forChild(L)],s.i]}),i})(),G=(()=>{class i{}return i.\u0275mod=l.Hb({type:i}),i.\u0275inj=l.Gb({factory:function(t){return new(t||i)},imports:[[e.w,o.b,c.a,a.a,O]]}),i})()}}]);