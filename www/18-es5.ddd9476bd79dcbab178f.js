function _classCallCheck(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,i){for(var o=0;o<i.length;o++){var e=i[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,i,o){return i&&_defineProperties(n.prototype,i),o&&_defineProperties(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{tmrb:function(n,i,o){"use strict";o.r(i),o.d(i,"Tab1PageModule",(function(){return k}));var e=o("TEn/"),t=o("ofXK"),c=o("3Pt+"),a=o("qtYk"),r=o("tyNb"),b=o("EVdn"),l=o.n(b),p=o("fXoL");function s(n,i){1&n&&p.Kb(0,"div")}function d(n,i){}function u(n,i){1&n&&(p.Mb(0,"div"),p.Mb(1,"ion-chip",13),p.Mb(2,"ion-label"),p.ic(3,"n\xe3o encontrado"),p.Lb(),p.Lb(),p.Lb())}function g(n,i){if(1&n&&p.gc(0,u,4,0,"div",12),2&n){var o=p.Wb();p.Zb("ngIf",o.codiprod)}}function f(n,i){if(1&n){var o=p.Nb();p.Mb(0,"div"),p.Mb(1,"ion-button",24),p.Ub("click",(function(){return p.dc(o),p.Wb(2).onSubmit()})),p.ic(2," ENVIAR "),p.Lb(),p.Lb()}}function M(n,i){if(1&n){var o=p.Nb();p.Mb(0,"div"),p.Mb(1,"form"),p.Mb(2,"ion-card",14),p.Mb(3,"ion-badge",15),p.ic(4),p.Lb(),p.Mb(5,"ion-badge",15),p.ic(6),p.Lb(),p.Mb(7,"ion-badge",15),p.ic(8),p.Lb(),p.gc(9,f,3,0,"div",12),p.Lb(),p.Mb(10,"ion-card"),p.Mb(11,"ion-item"),p.Mb(12,"ion-label"),p.ic(13,"#Imagem de capa"),p.Lb(),p.Mb(14,"ion-button",5),p.Ub("click",(function(){return p.dc(o),p.Wb().selectfile("capa")})),p.Kb(15,"ion-icon",16),p.Lb(),p.Mb(16,"span",17),p.Mb(17,"input",18),p.Ub("change",(function(){return p.dc(o),p.Wb().onChangeImage("input-capa","img-capa")})),p.Lb(),p.Kb(18,"input"),p.Lb(),p.Lb(),p.Mb(19,"ion-card-content"),p.Kb(20,"img",19),p.Lb(),p.Lb(),p.Mb(21,"ion-card"),p.Mb(22,"ion-item"),p.Mb(23,"ion-label"),p.ic(24,"#Imagem 1"),p.Lb(),p.Mb(25,"ion-button",5),p.Ub("click",(function(){return p.dc(o),p.Wb().selectfile("img2")})),p.Kb(26,"ion-icon",16),p.Lb(),p.Mb(27,"span",20),p.Mb(28,"input",18),p.Ub("change",(function(){return p.dc(o),p.Wb().onChangeImage("input-img2","img-img2")})),p.Lb(),p.Kb(29,"input"),p.Lb(),p.Lb(),p.Mb(30,"ion-card-content"),p.Kb(31,"img",21),p.Lb(),p.Lb(),p.Mb(32,"ion-card"),p.Mb(33,"ion-item"),p.Mb(34,"ion-label"),p.ic(35,"#Imagem 2"),p.Lb(),p.Mb(36,"ion-button",5),p.Ub("click",(function(){return p.dc(o),p.Wb().selectfile("img3")})),p.Kb(37,"ion-icon",16),p.Lb(),p.Mb(38,"span",22),p.Mb(39,"input",18),p.Ub("change",(function(){return p.dc(o),p.Wb().onChangeImage("input-img3","img-img3")})),p.Lb(),p.Kb(40,"input"),p.Lb(),p.Lb(),p.Mb(41,"ion-card-content"),p.Kb(42,"img",23),p.Lb(),p.Lb(),p.Lb(),p.Lb()}if(2&n){var e=p.Wb();p.zb(4),p.jc(e.prod.desc),p.zb(2),p.jc(e.prod.codifab),p.zb(2),p.kc("",e.prod.qtd," UN"),p.zb(1),p.Zb("ngIf",e.image.flag),p.zb(11),p.ac("src","",e.origin,"/instaparts/img.php?CODIPROD=",e.codiprod,"&IMG=CAPA_IMG",p.ec),p.zb(11),p.ac("src","",e.origin,"/instaparts/img.php?CODIPROD=",e.codiprod,"&IMG=IMG2_IMG",p.ec),p.zb(11),p.ac("src","",e.origin,"/instaparts/img.php?CODIPROD=",e.codiprod,"&IMG=IMG3_IMG",p.ec)}}var m,h,L,I=[{path:"",component:(m=function(){function n(){_classCallCheck(this,n),this.prod={codi:"",desc:"",codifab:"",qtd:"",flag:!1},this.image={flag:!1},this.origin=origin,this.clickedSearch()}return _createClass(n,[{key:"clickedBarcode",value:function(){alert("")}},{key:"onSearchChange",value:function(n){this.prod.flag=!1}},{key:"selectfile",value:function(n){l()("#input-"+n+" input").trigger("click")}},{key:"onChangeImage",value:function(n,i){this.image.flag=!0,l()("#"+i)[0].src=window.URL.createObjectURL(l()("#"+n+" input")[0].files[0]),console.log(window.URL.createObjectURL(l()("#"+n+" input")[0].files[0]))}},{key:"onSubmit",value:function(){var n;confirm("Confirma a altera\xe7\xe3o das fotos?")&&(l()("#input-capa input")[0].files[0]&&((n=new FormData).append("CAPA_IMG",l()("#input-capa input")[0].files[0]),l.a.ajax({type:"POST",url:this.origin+"/instaparts/upload.php?IMG=CAPA_IMG&CODIGO="+btoa(this.codiprod),data:n,processData:!1,contentType:!1,success:function(n){console.log(n)}})),l()("#input-img2 input")[0].files[0]&&((n=new FormData).append("IMG2_IMG",l()("#input-img2 input")[0].files[0]),l.a.ajax({type:"POST",url:this.origin+"/instaparts/upload.php?IMG=IMG2_IMG&CODIGO="+btoa(this.codiprod),data:n,processData:!1,contentType:!1,success:function(n){console.log(n)}})),l()("#input-img3 input")[0].files[0]&&((n=new FormData).append("IMG3_IMG",l()("#input-img3 input")[0].files[0]),l.a.ajax({type:"POST",url:this.origin+"/instaparts/upload.php?IMG=IMG3_IMG&CODIGO="+btoa(this.codiprod),data:n,processData:!1,contentType:!1,success:function(n){console.log(n)}})))}},{key:"clickedSearch",value:function(){var n=this;l.a.get(this.origin+"/instaparts/oci.php?CODIPROD="+this.codiprod,(function(i){(i=JSON.parse(i)).data[0]?(i=i.data[0],console.log(i),n.prod.codi=i.CODI_PROD,n.prod.desc=i.DESC_PROD,n.prod.codifab=i.CODIFAB_PROD,n.prod.qtd=i.QTDD_QTDD,n.prod.flag=!0):n.prod.flag=!1}))}}]),n}(),m.\u0275fac=function(n){return new(n||m)},m.\u0275cmp=p.Db({type:m,selectors:[["app-tab1"]],decls:22,vars:7,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["slot","primary"],[3,"click"],["slot","icon-only","name","search"],["slot","icon-only","name","barcode"],["placeholder","C\xf3digo do produto",3,"ngModel","ionChange","ngModelChange"],[4,"ngIf","ngIfThen","ngIfElse"],["thenBlock",""],["elseBlock",""],[4,"ngIf"],["outline","","color","danger"],[2,"text-align","center"],["color","primary"],["name","camera"],["id","input-capa",2,"display","none"],["type","file","accept","image/*",3,"change"],["id","img-capa","alt","",3,"src"],["id","input-img2",2,"display","none"],["id","img-img2","alt","",3,"src"],["id","input-img3",2,"display","none"],["id","img-img3","alt","",3,"src"],["color","danger","expand","block",3,"click"]],template:function(n,i){if(1&n&&(p.Mb(0,"ion-header",0),p.Mb(1,"ion-toolbar"),p.Mb(2,"ion-title"),p.ic(3," Gerenciar fotos "),p.Lb(),p.Lb(),p.Lb(),p.Mb(4,"ion-content",1),p.Mb(5,"ion-header",2),p.Mb(6,"ion-toolbar"),p.Mb(7,"ion-title",3),p.ic(8,"Gerenciar fotos"),p.Lb(),p.Lb(),p.Lb(),p.Mb(9,"ion-toolbar"),p.Mb(10,"ion-buttons",4),p.Mb(11,"ion-button",5),p.Ub("click",(function(){return i.clickedSearch()})),p.Kb(12,"ion-icon",6),p.Lb(),p.Mb(13,"ion-button",5),p.Ub("click",(function(){return i.clickedBarcode()})),p.Kb(14,"ion-icon",7),p.Lb(),p.Lb(),p.Mb(15,"ion-searchbar",8),p.Ub("ionChange",(function(n){return i.onSearchChange(n)}))("ngModelChange",(function(n){return i.codiprod=n})),p.Lb(),p.Lb(),p.gc(16,s,1,0,"div",9),p.gc(17,d,0,0,"ng-template",null,10,p.hc),p.gc(19,g,1,1,"ng-template",null,11,p.hc),p.gc(21,M,43,10,"div",12),p.Lb()),2&n){var o=p.cc(18),e=p.cc(20);p.Zb("translucent",!0),p.zb(4),p.Zb("fullscreen",!0),p.zb(11),p.Zb("ngModel",i.codiprod),p.zb(1),p.Zb("ngIf",i.prod.flag)("ngIfThen",o)("ngIfElse",e),p.zb(5),p.Zb("ngIf",i.prod.flag)}},directives:[e.i,e.s,e.r,e.h,e.d,e.c,e.j,e.n,e.w,c.c,c.f,t.i,e.g,e.l,c.g,c.d,c.e,e.e,e.b,e.k,e.f],styles:[""]}),m)}],C=((L=function n(){_classCallCheck(this,n)}).\u0275mod=p.Hb({type:L}),L.\u0275inj=p.Gb({factory:function(n){return new(n||L)},imports:[[r.i.forChild(I)],r.i]}),L),k=((h=function n(){_classCallCheck(this,n)}).\u0275mod=p.Hb({type:h}),h.\u0275inj=p.Gb({factory:function(n){return new(n||h)},imports:[[e.t,t.b,c.a,a.a,C]]}),h)}}]);