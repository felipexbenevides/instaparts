function _classCallCheck(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(i,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function _createClass(i,n,t){return n&&_defineProperties(i.prototype,n),t&&_defineProperties(i,t),i}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{tmrb:function(i,n,t){"use strict";t.r(n),t.d(n,"Tab1PageModule",(function(){return y}));var e=t("TEn/"),o=t("ofXK"),c=t("3Pt+"),a=t("qtYk"),r=t("tyNb"),b=t("EVdn"),s=t.n(b),l=t("fXoL");function u(i,n){if(1&i){var t=l.Nb();l.Mb(0,"ion-item"),l.Mb(1,"b"),l.ic(2,"["),l.Mb(3,"span",15),l.Ub("click",(function(i){return l.dc(t),l.Wb(2).setProd(i)})),l.ic(4),l.Lb(),l.ic(5,"]"),l.Lb(),l.Lb()}if(2&i){var e=n.$implicit;l.zb(4),l.jc(e)}}function p(i,n){if(1&i&&(l.Mb(0,"ion-list"),l.gc(1,u,6,1,"ion-item",14),l.Lb()),2&i){var t=l.Wb();l.zb(1),l.Zb("ngForOf",t.items)}}function d(i,n){1&i&&l.Kb(0,"div")}function g(i,n){}function f(i,n){1&i&&(l.Mb(0,"div"),l.Mb(1,"ion-chip",16),l.Mb(2,"ion-label"),l.ic(3,"n\xe3o encontrado"),l.Lb(),l.Lb(),l.Lb())}function m(i,n){if(1&i&&l.gc(0,f,4,0,"div",10),2&i){var t=l.Wb();l.Zb("ngIf",t.codiprod)}}function h(i,n){if(1&i){var t=l.Nb();l.Mb(0,"div"),l.Mb(1,"ion-button",27),l.Ub("click",(function(){return l.dc(t),l.Wb(2).onSubmit()})),l.ic(2," ENVIAR "),l.Lb(),l.Lb()}}function M(i,n){if(1&i){var t=l.Nb();l.Mb(0,"div"),l.Mb(1,"form"),l.Mb(2,"ion-card",17),l.Mb(3,"ion-badge",18),l.ic(4),l.Lb(),l.Mb(5,"ion-badge",18),l.ic(6),l.Lb(),l.Mb(7,"ion-badge",18),l.ic(8),l.Lb(),l.gc(9,h,3,0,"div",10),l.Lb(),l.Mb(10,"ion-card"),l.Mb(11,"ion-item"),l.Mb(12,"ion-label"),l.ic(13,"#Imagem de capa"),l.Lb(),l.Mb(14,"ion-button",5),l.Ub("click",(function(){return l.dc(t),l.Wb().selectfile("capa")})),l.Kb(15,"ion-icon",19),l.Lb(),l.Mb(16,"span",20),l.Mb(17,"input",21),l.Ub("change",(function(){return l.dc(t),l.Wb().onChangeImage("input-capa","img-capa")})),l.Lb(),l.Kb(18,"input"),l.Lb(),l.Lb(),l.Mb(19,"ion-card-content"),l.Kb(20,"img",22),l.Lb(),l.Lb(),l.Mb(21,"ion-card"),l.Mb(22,"ion-item"),l.Mb(23,"ion-label"),l.ic(24,"#Imagem 2"),l.Lb(),l.Mb(25,"ion-button",5),l.Ub("click",(function(){return l.dc(t),l.Wb().selectfile("img2")})),l.Kb(26,"ion-icon",19),l.Lb(),l.Mb(27,"span",23),l.Mb(28,"input",21),l.Ub("change",(function(){return l.dc(t),l.Wb().onChangeImage("input-img2","img-img2")})),l.Lb(),l.Kb(29,"input"),l.Lb(),l.Lb(),l.Mb(30,"ion-card-content"),l.Kb(31,"img",24),l.Lb(),l.Lb(),l.Mb(32,"ion-card"),l.Mb(33,"ion-item"),l.Mb(34,"ion-label"),l.ic(35,"#Imagem 3"),l.Lb(),l.Mb(36,"ion-button",5),l.Ub("click",(function(){return l.dc(t),l.Wb().selectfile("img3")})),l.Kb(37,"ion-icon",19),l.Lb(),l.Mb(38,"span",25),l.Mb(39,"input",21),l.Ub("change",(function(){return l.dc(t),l.Wb().onChangeImage("input-img3","img-img3")})),l.Lb(),l.Kb(40,"input"),l.Lb(),l.Lb(),l.Mb(41,"ion-card-content"),l.Kb(42,"img",26),l.Lb(),l.Lb(),l.Lb(),l.Mb(43,"small"),l.ic(44),l.Lb(),l.Kb(45,"br"),l.Mb(46,"small"),l.ic(47),l.Lb(),l.Kb(48,"br"),l.Mb(49,"small"),l.ic(50),l.Lb(),l.Lb()}if(2&i){var e=l.Wb();l.zb(4),l.jc(e.prod.desc),l.zb(2),l.jc(e.prod.codifab),l.zb(2),l.kc("",e.prod.qtd," UN"),l.zb(1),l.Zb("ngIf",e.image.flag),l.zb(11),l.ac("src","",e.origin,"/instaparts/img.php?CODIPROD=",e.codiprod,"&IMG=CAPA_IMG",l.ec),l.zb(11),l.ac("src","",e.origin,"/instaparts/img.php?CODIPROD=",e.codiprod,"&IMG=IMG2_IMG",l.ec),l.zb(11),l.ac("src","",e.origin,"/instaparts/img.php?CODIPROD=",e.codiprod,"&IMG=IMG3_IMG",l.ec),l.zb(2),l.jc(e.result.capa),l.zb(3),l.jc(e.result.img2),l.zb(3),l.jc(e.result.img3)}}var I,L,v,k=[{path:"",component:(I=function(){function i(){_classCallCheck(this,i),this.itemsArray=!1,this.prod={codi:"",desc:"",codifab:"",qtd:"",flag:!1},this.image={flag:!1},this.result={capa:"",img2:"",img3:""},this.origin=origin,this.clickedSearch(),this.initializeItems(),this.isItemAvailable=!1}return _createClass(i,[{key:"clickedBarcode",value:function(){alert("")}},{key:"onSearchChange",value:function(i){}},{key:"selectfile",value:function(i){s()("#input-"+i+" input").trigger("click")}},{key:"onChangeImage",value:function(i,n){this.image.flag=!0,s()("#"+n)[0].src=window.URL.createObjectURL(s()("#"+i+" input")[0].files[0]),console.log(window.URL.createObjectURL(s()("#"+i+" input")[0].files[0]))}},{key:"onSubmit",value:function(){confirm("Confirma a altera\xe7\xe3o das fotos?")&&(s()("#input-capa input")[0].files[0]?this.submitCapa():s()("#input-img2 input")[0].files[0]?this.submitImg2():s()("#input-img3 input")[0].files[0]&&this.submitImg3())}},{key:"submitCapa",value:function(){var i,n=this;s()("#input-capa input")[0].files[0]&&((i=new FormData).append("CAPA_IMG",s()("#input-capa input")[0].files[0]),this.result.capa=this.codiprod+" > CAPA_IMG : ERRO",s.a.ajax({type:"POST",url:this.origin+"/instaparts/upload.php?IMG=CAPA_IMG&CODIGO="+btoa(this.codiprod),data:i,processData:!1,contentType:!1,success:function(i){console.log(i),n.result.capa=JSON.parse(i),n.submitImg2()}}))}},{key:"submitImg2",value:function(){var i,n=this;s()("#input-img2 input")[0].files[0]&&((i=new FormData).append("IMG2_IMG",s()("#input-img2 input")[0].files[0]),this.result.img2=this.codiprod+" > IMG2_IMG : ERRO",setTimeout((function(){s.a.ajax({type:"POST",url:n.origin+"/instaparts/upload.php?IMG=IMG2_IMG&CODIGO="+btoa(n.codiprod),data:i,processData:!1,contentType:!1,success:function(i){console.log(i),n.result.img2=JSON.parse(i),n.submitImg3()}})}),1e3))}},{key:"submitImg3",value:function(){var i,n=this;s()("#input-img3 input")[0].files[0]&&((i=new FormData).append("IMG3_IMG",s()("#input-img3 input")[0].files[0]),this.result.img3=this.codiprod+" > IMG3_IMG : ERRO",setTimeout((function(){s.a.ajax({type:"POST",url:n.origin+"/instaparts/upload.php?IMG=IMG3_IMG&CODIGO="+btoa(n.codiprod),data:i,processData:!1,contentType:!1,success:function(i){console.log(i),n.result.img3=JSON.parse(i)}})}),2e3))}},{key:"clickedSearch",value:function(){var i=this;this.isItemAvailable=!1,s.a.get(this.origin+"/instaparts/oci.php?CODIPROD="+this.codiprod,(function(n){(n=JSON.parse(n)).data[0]?(n=n.data[0],console.log(n),i.prod.codi=n.CODI_PROD,i.prod.desc=n.DESC_PROD,i.prod.codifab=n.CODIFAB_PROD,i.prod.qtd=n.QTDD_QTDD,i.prod.flag=!0):i.prod.flag=!1}))}},{key:"setProd",value:function(i){console.log("setProd"),console.log(i),this.isItemAvailable=!1,this.codiprod=i.target.innerText,this.clickedSearch()}},{key:"getItems",value:function(i){var n=i.target.value;n.length>2?this.initializeItems():this.isItemAvailable=!1,n.length>2&&n&&""!=n.trim()&&(this.isItemAvailable=!0,this.items=this.items.filter((function(i){return i.toLowerCase().indexOf(n.toLowerCase())>-1})),this.items=this.items.slice(0,10))}},{key:"initializeItems",value:function(){var i=this;this.itemsArray?this.items=this.itemsArray:s.a.get(this.origin+"/api/balanco/produto?OP=LIST",(function(n){console.log("antes",n),n=JSON.parse(n),console.log(n),i.itemsArray=n,i.items=n}))}}]),i}(),I.\u0275fac=function(i){return new(i||I)},I.\u0275cmp=l.Db({type:I,selectors:[["app-tab1"]],decls:24,vars:8,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["slot","primary"],[3,"click"],["slot","icon-only","name","search"],["slot","icon-only","name","barcode"],["debounce","500","cancelButtonText","X","placeholder","C\xf3digo do produto",3,"ngModel","ionInput","ionChange","ngModelChange"],["inputSearch",""],[4,"ngIf"],[4,"ngIf","ngIfThen","ngIfElse"],["thenBlock",""],["elseBlock",""],[4,"ngFor","ngForOf"],[2,"color","rebeccapurple",3,"click"],["outline","","color","danger"],[2,"text-align","center"],["color","primary"],["name","camera"],["id","input-capa",2,"display","none"],["type","file","accept","image/*",3,"change"],["id","img-capa","alt","",3,"src"],["id","input-img2",2,"display","none"],["id","img-img2","alt","",3,"src"],["id","input-img3",2,"display","none"],["id","img-img3","alt","",3,"src"],["color","danger","expand","block",3,"click"]],template:function(i,n){if(1&i&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-title"),l.ic(3," Gerenciar fotos "),l.Lb(),l.Lb(),l.Lb(),l.Mb(4,"ion-content",1),l.Mb(5,"ion-header",2),l.Mb(6,"ion-toolbar"),l.Mb(7,"ion-title",3),l.ic(8,"Gerenciar fotos"),l.Lb(),l.Lb(),l.Lb(),l.Mb(9,"ion-toolbar"),l.Mb(10,"ion-buttons",4),l.Mb(11,"ion-button",5),l.Ub("click",(function(){return n.clickedSearch()})),l.Kb(12,"ion-icon",6),l.Lb(),l.Mb(13,"ion-button",5),l.Ub("click",(function(){return n.clickedBarcode()})),l.Kb(14,"ion-icon",7),l.Lb(),l.Lb(),l.Mb(15,"ion-searchbar",8,9),l.Ub("ionInput",(function(i){return n.getItems(i)}))("ionChange",(function(i){return n.onSearchChange(i)}))("ngModelChange",(function(i){return n.codiprod=i})),l.Lb(),l.gc(17,p,2,1,"ion-list",10),l.Lb(),l.gc(18,d,1,0,"div",11),l.gc(19,g,0,0,"ng-template",null,12,l.hc),l.gc(21,m,1,1,"ng-template",null,13,l.hc),l.gc(23,M,51,13,"div",10),l.Lb()),2&i){var t=l.cc(20),e=l.cc(22);l.Zb("translucent",!0),l.zb(4),l.Zb("fullscreen",!0),l.zb(11),l.Zb("ngModel",n.codiprod),l.zb(2),l.Zb("ngIf",n.isItemAvailable),l.zb(1),l.Zb("ngIf",n.prod.flag)("ngIfThen",t)("ngIfElse",e),l.zb(5),l.Zb("ngIf",n.prod.flag)}},directives:[e.i,e.t,e.s,e.h,e.d,e.c,e.j,e.o,e.x,c.c,c.f,o.i,e.m,o.h,e.k,e.g,e.l,c.g,c.d,c.e,e.e,e.b,e.f],styles:[""]}),I)}],C=((v=function i(){_classCallCheck(this,i)}).\u0275mod=l.Hb({type:v}),v.\u0275inj=l.Gb({factory:function(i){return new(i||v)},imports:[[r.i.forChild(k)],r.i]}),v),y=((L=function i(){_classCallCheck(this,i)}).\u0275mod=l.Hb({type:L}),L.\u0275inj=l.Gb({factory:function(i){return new(i||L)},imports:[[e.u,o.b,c.a,a.a,C]]}),L)}}]);