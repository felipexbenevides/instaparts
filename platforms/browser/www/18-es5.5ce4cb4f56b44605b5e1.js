function _classCallCheck(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(i,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function _createClass(i,t,n){return t&&_defineProperties(i.prototype,t),n&&_defineProperties(i,n),i}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{tmrb:function(i,t,n){"use strict";n.r(t),n.d(t,"Tab1PageModule",(function(){return O}));var e=n("TEn/"),o=n("ofXK"),a=n("3Pt+"),c=n("qtYk"),s=n("tyNb"),b=n("EVdn"),r=n.n(b),l=n("fXoL");function u(i,t){1&i&&(l.Mb(0,"span"),l.Mb(1,"ion-chip"),l.Mb(2,"ion-label"),l.ic(3,"Debug"),l.Lb(),l.Lb(),l.Lb())}function p(i,t){if(1&i){var n=l.Nb();l.Mb(0,"ion-item"),l.Mb(1,"b"),l.ic(2,"["),l.Mb(3,"span",16),l.Ub("click",(function(i){return l.dc(n),l.Wb(2).setProd(i)})),l.ic(4),l.Lb(),l.ic(5,"]"),l.Lb(),l.Lb()}if(2&i){var e=t.$implicit;l.zb(4),l.jc(e)}}function g(i,t){if(1&i&&(l.Mb(0,"ion-list"),l.gc(1,p,6,1,"ion-item",15),l.Lb()),2&i){var n=l.Wb();l.zb(1),l.Zb("ngForOf",n.items)}}function d(i,t){1&i&&l.Kb(0,"div")}function m(i,t){}function f(i,t){1&i&&(l.Mb(0,"div"),l.Mb(1,"ion-chip",17),l.Mb(2,"ion-label"),l.ic(3,"n\xe3o encontrado"),l.Lb(),l.Lb(),l.Lb())}function h(i,t){if(1&i&&l.gc(0,f,4,0,"div",1),2&i){var n=l.Wb();l.Zb("ngIf",n.codiprod)}}function M(i,t){if(1&i){var n=l.Nb();l.Mb(0,"div"),l.Mb(1,"ion-button",28),l.Ub("click",(function(){return l.dc(n),l.Wb(2).onSubmit()})),l.ic(2," ENVIAR "),l.Lb(),l.Lb()}}function I(i,t){if(1&i){var n=l.Nb();l.Mb(0,"div"),l.Mb(1,"form"),l.Mb(2,"ion-card",18),l.Mb(3,"ion-badge",19),l.ic(4),l.Lb(),l.Mb(5,"ion-badge",19),l.ic(6),l.Lb(),l.Mb(7,"ion-badge",19),l.ic(8),l.Lb(),l.gc(9,M,3,0,"div",1),l.Lb(),l.Mb(10,"ion-card"),l.Mb(11,"ion-item"),l.Mb(12,"ion-label"),l.ic(13,"#Imagem de capa"),l.Lb(),l.Mb(14,"ion-button",8),l.Ub("click",(function(){return l.dc(n),l.Wb().selectfile("capa")})),l.Kb(15,"ion-icon",20),l.Lb(),l.Mb(16,"span",21),l.Mb(17,"input",22),l.Ub("change",(function(){return l.dc(n),l.Wb().onChangeImage("input-capa","img-capa")})),l.Lb(),l.Kb(18,"input"),l.Lb(),l.Lb(),l.Mb(19,"ion-card-content"),l.Kb(20,"img",23),l.Lb(),l.Lb(),l.Mb(21,"ion-card"),l.Mb(22,"ion-item"),l.Mb(23,"ion-label"),l.ic(24,"#Imagem 2"),l.Lb(),l.Mb(25,"ion-button",8),l.Ub("click",(function(){return l.dc(n),l.Wb().selectfile("img2")})),l.Kb(26,"ion-icon",20),l.Lb(),l.Mb(27,"span",24),l.Mb(28,"input",22),l.Ub("change",(function(){return l.dc(n),l.Wb().onChangeImage("input-img2","img-img2")})),l.Lb(),l.Kb(29,"input"),l.Lb(),l.Lb(),l.Mb(30,"ion-card-content"),l.Kb(31,"img",25),l.Lb(),l.Lb(),l.Mb(32,"ion-card"),l.Mb(33,"ion-item"),l.Mb(34,"ion-label"),l.ic(35,"#Imagem 3"),l.Lb(),l.Mb(36,"ion-button",8),l.Ub("click",(function(){return l.dc(n),l.Wb().selectfile("img3")})),l.Kb(37,"ion-icon",20),l.Lb(),l.Mb(38,"span",26),l.Mb(39,"input",22),l.Ub("change",(function(){return l.dc(n),l.Wb().onChangeImage("input-img3","img-img3")})),l.Lb(),l.Kb(40,"input"),l.Lb(),l.Lb(),l.Mb(41,"ion-card-content"),l.Kb(42,"img",27),l.Lb(),l.Lb(),l.Lb(),l.Mb(43,"small"),l.ic(44),l.Lb(),l.Kb(45,"br"),l.Mb(46,"small"),l.ic(47),l.Lb(),l.Kb(48,"br"),l.Mb(49,"small"),l.ic(50),l.Lb(),l.Lb()}if(2&i){var e=l.Wb();l.zb(4),l.jc(e.prod.desc),l.zb(2),l.jc(e.prod.codifab),l.zb(2),l.kc("",e.prod.qtd," UN"),l.zb(1),l.Zb("ngIf",e.image.flag),l.zb(11),l.ac("src","",e.url,"/instaparts/img.php?CODIPROD=",e.codiprod,"&IMG=CAPA_IMG",l.ec),l.zb(11),l.ac("src","",e.url,"/instaparts/img.php?CODIPROD=",e.codiprod,"&IMG=IMG2_IMG",l.ec),l.zb(11),l.ac("src","",e.url,"/instaparts/img.php?CODIPROD=",e.codiprod,"&IMG=IMG3_IMG",l.ec),l.zb(2),l.jc(e.result.capa),l.zb(3),l.jc(e.result.img2),l.zb(3),l.jc(e.result.img3)}}var L,v,y,C=[{path:"",component:(L=function(){function i(){_classCallCheck(this,i),this.itemsArray=!1,this.prod={codi:"",desc:"",codifab:"",qtd:"",flag:!1},this.image={flag:!1,"input-capa":!1,"input-img2":!1,"input-img3":!1,count:0,success:0},this.result={capa:"",img2:"",img3:""},this.origin=origin,this.window=window,this.url="",this.debug=!1,this.initDebug(),this.clickedSearch(),this.initializeItems(),this.isItemAvailable=!1}return _createClass(i,[{key:"initDebug",value:function(){"http://localhost:8100"==this.origin&&(this.debug=!0,console.log("Debug set")),this.debug?(this.codiprod="010278",this.url="http://73140629c078.sn.mynetname.net/"):this.url=this.origin,window.localStorage.setItem("url",this.url)}},{key:"initFlags",value:function(){this.image={flag:!1,"input-capa":!1,"input-img2":!1,"input-img3":!1,count:0,success:0}}},{key:"clickedBarcode",value:function(){alert("")}},{key:"onSearchChange",value:function(i){}},{key:"selectfile",value:function(i){r()("#input-"+i+" input").trigger("click")}},{key:"onChangeImage",value:function(i,t){this.image.count+=1,this.image.flag=!0,this.image[i]=!0,r()("#"+t)[0].src=window.URL.createObjectURL(r()("#"+i+" input")[0].files[0]),console.log(window.URL.createObjectURL(r()("#"+i+" input")[0].files[0]))}},{key:"onSubmit",value:function(){confirm("Confirma a altera\xe7\xe3o das fotos?")&&(r()("#input-capa input")[0].files[0]&&this.image["input-capa"]&&this.submitCapa(),r()("#input-img2 input")[0].files[0]&&this.image["input-img2"]&&this.submitImg2(),r()("#input-img3 input")[0].files[0]&&this.image["input-img3"]&&this.submitImg3(),this.image.flag=!1)}},{key:"submitCapa",value:function(){var i,t=this;r()("#input-capa input")[0].files[0]&&(console.log("submitCapa"),(i=new FormData).append("CAPA_IMG",r()("#input-capa input")[0].files[0]),this.result.capa=this.codiprod+" > CAPA_IMG : ERRO",r.a.ajax({type:"POST",url:this.url+"/instaparts/upload.php?IMG=CAPA_IMG&CODIGO="+btoa(this.codiprod),data:i,processData:!1,contentType:!1,success:function(i){console.log(i),t.result.capa=JSON.parse(i),t.image.success+=1}}))}},{key:"submitImg2",value:function(){var i,t=this;r()("#input-img2 input")[0].files[0]&&(console.log("submitImg2"),(i=new FormData).append("IMG2_IMG",r()("#input-img2 input")[0].files[0]),this.result.img2=this.codiprod+" > IMG2_IMG : ERRO",setTimeout((function(){r.a.ajax({type:"POST",url:t.url+"/instaparts/upload.php?IMG=IMG2_IMG&CODIGO="+btoa(t.codiprod),data:i,processData:!1,contentType:!1,success:function(i){console.log(i),t.result.img2=JSON.parse(i),t.image.success+=1}})}),1e3))}},{key:"submitImg3",value:function(){var i,t=this;r()("#input-img3 input")[0].files[0]&&(console.log("submitImg3"),(i=new FormData).append("IMG3_IMG",r()("#input-img3 input")[0].files[0]),this.result.img3=this.codiprod+" > IMG3_IMG : ERRO",setTimeout((function(){r.a.ajax({type:"POST",url:t.url+"/instaparts/upload.php?IMG=IMG3_IMG&CODIGO="+btoa(t.codiprod),data:i,processData:!1,contentType:!1,success:function(i){console.log(i),t.result.img3=JSON.parse(i),t.image.success+=1}})}),2e3))}},{key:"clickedSearch",value:function(){var i=this;this.isItemAvailable=!1,r.a.get(this.url+"/instaparts/oci.php?CODIPROD="+this.codiprod,(function(t){(t=JSON.parse(t)).data[0]?(i.prod.codi=(t=t.data[0]).CODI_PROD,i.prod.desc=t.DESC_PROD,i.prod.codifab=t.CODIFAB_PROD,i.prod.qtd=t.QTDD_QTDD,i.prod.flag=!0,i.initFlags()):i.prod.flag=!1}))}},{key:"setProd",value:function(i){console.log("setProd"),this.isItemAvailable=!1,this.codiprod=i.target.innerText,this.clickedSearch()}},{key:"getItems",value:function(i){var t=i.target.value;t.length>2?this.initializeItems():this.isItemAvailable=!1,t.length>2&&t&&""!=t.trim()&&(this.isItemAvailable=!0,this.items=this.items.filter((function(i){return i.toLowerCase().indexOf(t.toLowerCase())>-1})),this.items=this.items.slice(0,10))}},{key:"initializeItems",value:function(){var i=this;this.itemsArray?this.items=this.itemsArray:r.a.get(this.url+"/api/balanco/produto?OP=LIST",(function(t){t=JSON.parse(t),i.itemsArray=t,i.items=t}))}}]),i}(),L.\u0275fac=function(i){return new(i||L)},L.\u0275cmp=l.Db({type:L,selectors:[["app-tab1"]],decls:26,vars:11,consts:[[3,"translucent"],[4,"ngIf"],[3,"fullscreen"],["vertical","top","horizontal","end","slot","fixed"],["color","success"],["collapse","condense"],["size","large"],["slot","primary"],[3,"click"],["slot","icon-only","name","search"],["debounce","500","cancelButtonText","X","placeholder","C\xf3digo do produto",3,"ngModel","ionInput","ionChange","ngModelChange"],["inputSearch",""],[4,"ngIf","ngIfThen","ngIfElse"],["thenBlock",""],["elseBlock",""],[4,"ngFor","ngForOf"],[2,"color","rebeccapurple",3,"click"],["outline","","color","danger"],[2,"text-align","center"],["color","primary"],["name","camera"],["id","input-capa",2,"display","none"],["type","file","accept","image/*",3,"change"],["id","img-capa","alt","",3,"src"],["id","input-img2",2,"display","none"],["id","img-img2","alt","",3,"src"],["id","input-img3",2,"display","none"],["id","img-img3","alt","",3,"src"],["color","danger","expand","block",3,"click"]],template:function(i,t){if(1&i&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-title"),l.ic(3," Gerenciar Fotos "),l.gc(4,u,4,0,"span",1),l.Lb(),l.Lb(),l.Lb(),l.Mb(5,"ion-content",2),l.Mb(6,"ion-fab",3),l.Mb(7,"ion-fab-button",4),l.ic(8),l.Lb(),l.Lb(),l.Mb(9,"ion-header",5),l.Mb(10,"ion-toolbar"),l.Mb(11,"ion-title",6),l.ic(12,"Gerenciar fotos"),l.Lb(),l.Lb(),l.Lb(),l.Mb(13,"ion-toolbar"),l.Mb(14,"ion-buttons",7),l.Mb(15,"ion-button",8),l.Ub("click",(function(){return t.clickedSearch()})),l.Kb(16,"ion-icon",9),l.Lb(),l.Lb(),l.Mb(17,"ion-searchbar",10,11),l.Ub("ionInput",(function(i){return t.getItems(i)}))("ionChange",(function(i){return t.onSearchChange(i)}))("ngModelChange",(function(i){return t.codiprod=i})),l.Lb(),l.gc(19,g,2,1,"ion-list",1),l.Lb(),l.gc(20,d,1,0,"div",12),l.gc(21,m,0,0,"ng-template",null,13,l.hc),l.gc(23,h,1,1,"ng-template",null,14,l.hc),l.gc(25,I,51,13,"div",1),l.Lb()),2&i){var n=l.cc(22),e=l.cc(24);l.Zb("translucent",!0),l.zb(4),l.Zb("ngIf",t.debug),l.zb(1),l.Zb("fullscreen",!0),l.zb(3),l.lc(" ",t.image.success,"/",t.image.count," "),l.zb(9),l.Zb("ngModel",t.codiprod),l.zb(2),l.Zb("ngIf",t.isItemAvailable),l.zb(1),l.Zb("ngIf",t.prod.flag)("ngIfThen",n)("ngIfElse",e),l.zb(5),l.Zb("ngIf",t.prod.flag)}},directives:[e.k,e.v,e.u,o.i,e.h,e.i,e.j,e.d,e.c,e.l,e.q,e.z,a.c,a.f,e.g,e.n,e.o,o.h,e.m,a.g,a.d,a.e,e.e,e.b,e.f],styles:[""]}),L)}],k=((y=function i(){_classCallCheck(this,i)}).\u0275mod=l.Hb({type:y}),y.\u0275inj=l.Gb({factory:function(i){return new(i||y)},imports:[[s.i.forChild(C)],s.i]}),y),O=((v=function i(){_classCallCheck(this,i)}).\u0275mod=l.Hb({type:v}),v.\u0275inj=l.Gb({factory:function(i){return new(i||v)},imports:[[e.w,o.b,a.a,c.a,k]]}),v)}}]);