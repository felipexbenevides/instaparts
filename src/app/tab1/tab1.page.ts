import { Component } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public isItemAvailable:any;
  public items: any;
  public itemsArray:any = false;

  public codiprod:any;
  public prod:any = {"codi":"","desc":"", "codifab":"","qtd":"", "flag":false};
  public image:any = {"flag":false, "input-capa": false, "input-img2":false, "input-img3":false, "count": 0, "success": 0};
  public result:any = {"capa":"","img2":"","img3":""};
  public origin:any = origin;
  public window:any = window;
  public url:any = '';
  /*   D   E   B   U   G   */
  public debug:any = false;
  /* - - - - - - - - - - - */
  constructor() {
    this.initDebug();
    this.clickedSearch();
    this.initializeItems();
    this.isItemAvailable = false; // initialize the items with false
  }
  initDebug(){
    if(this.origin == 'http://localhost:8100'){
      this.debug = true;
      console.log('Debug set');
    }
    if(this.debug){
     this.codiprod = '010278';
     this.url = 'http://73140629c078.sn.mynetname.net/';
    }else{
      this.url = this.origin;
    }
    window.localStorage.setItem('url', this.url);
  }
  initFlags(){
    this.image = {"flag":false, "input-capa": false, "input-img2":false, "input-img3":false, "count": 0, "success": 0};
  }
  clickedBarcode(){
    alert('');
  }
  onSearchChange(event){
    //this.prod.flag = false;
  }
  selectfile(ident){
    $("#input-"+ident+" input").trigger('click');
  }
  onChangeImage( selector1, selector2){
    this.image.count+=1;
    this.image.flag = true;
    this.image[selector1] = true;
    $('#'+selector2)[0].src = window.URL.createObjectURL($('#'+selector1+' input')[0].files[0]);
    console.log(window.URL.createObjectURL($('#'+selector1+' input')[0].files[0]));
  }
  onSubmit(){
    if(!confirm("Confirma a alteração das fotos?")) return;
    if($('#input-capa input')[0].files[0] && this.image['input-capa']){
      this.submitCapa();
    }
    if($('#input-img2 input')[0].files[0] && this.image['input-img2']){
      this.submitImg2();
    }
    if($('#input-img3 input')[0].files[0] && this.image['input-img3']){
      this.submitImg3();

    }
    this.image.flag = false;
  }
  submitCapa(){
    if($('#input-capa input')[0].files[0]){
      var form;
      console.log('submitCapa');
      form = new FormData();
      form.append('CAPA_IMG', $('#input-capa input')[0].files[0]);
      this.result.capa = this.codiprod+" > CAPA_IMG : ERRO";
      $.ajax({
        type: "POST",
        url: this.url+'/instaparts/upload.php?IMG=CAPA_IMG&CODIGO='+btoa(this.codiprod),
        data: form,
        processData: false,
        contentType: false,
        success: (data)=>{
          console.log(data)
          this.result.capa = JSON.parse(data);
          this.image.success += 1;
        }
      });
    }
  }
  submitImg2(){
    if($('#input-img2 input')[0].files[0]){
      var form;
      console.log('submitImg2');
      form = new FormData();
      form.append('IMG2_IMG', $('#input-img2 input')[0].files[0]);
      this.result.img2 = this.codiprod+" > IMG2_IMG : ERRO";
      setTimeout(() => {
        $.ajax({
          type: "POST",
          url: this.url+'/instaparts/upload.php?IMG=IMG2_IMG&CODIGO='+btoa(this.codiprod),
          data: form,
          processData: false,
          contentType: false,
          success: (data)=>{
            console.log(data)
            this.result.img2 = JSON.parse(data);
            this.image.success += 1;

          }
        });        
      }, 1000);
    }
  }
  submitImg3(){
    if($('#input-img3 input')[0].files[0]){
      var form;
      console.log('submitImg3');
      form = new FormData();
      form.append('IMG3_IMG', $('#input-img3 input')[0].files[0]);
      this.result.img3 = this.codiprod+" > IMG3_IMG : ERRO";
      setTimeout(() => {
        $.ajax({
          type: "POST",
          url: this.url+'/instaparts/upload.php?IMG=IMG3_IMG&CODIGO='+btoa(this.codiprod),
          data: form,
          processData: false,
          contentType: false,
          success: (data)=>{
            console.log(data)
            this.result.img3 = JSON.parse(data);
            this.image.success += 1;
          }
        });
      }, 2000);
    }
  }
  clickedSearch(){
    this.isItemAvailable = false;
    $.get( this.url+"/instaparts/oci.php?CODIPROD="+this.codiprod, ( data )=>{
      data = JSON.parse(data);
      if(!(data.data[0])){
        this.prod.flag = false;
        return;
      }
      data = data.data[0];
      this.prod.codi = data['CODI_PROD'];
      this.prod.desc = data['DESC_PROD'];
      this.prod.codifab = data['CODIFAB_PROD'];
      this.prod.qtd = data['QTDD_QTDD'];
      this.prod.flag = true;
      this.initFlags();

    });

  }

  setProd(ev:any){
    console.log("setProd");
    //console.log(ev);
    // this.codsearch = ev.toElement.innerHTML;
    // this.setStep("identificacao","success");
    this.isItemAvailable = false;
    this.codiprod = ev.target.innerText;
    this.clickedSearch();
    // this.getProdInfo(this.codsearch);
    // console.log(this.codsearch);
  }
  
  //autocomplete
  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    if(val.length > 2){
        // Reset items back to all of the items
        this.initializeItems();
    }else{
      this.isItemAvailable = false; // initialize the items with false    
    }
    if(val.length > 2){
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.isItemAvailable = true;
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        this.items = this.items.slice(0, 10);
      } 
    }
  }

  initializeItems(){ 
    // $.get( this.url+"/instaparts/oci.php?CODIPROD="+this.codiprod, ( data )=>{

   if(this.itemsArray){
    this.items = this.itemsArray;
   }else{
      $.get(this.url+"/api/balanco/produto?OP=LIST", ( data )=>{
        data = JSON.parse(data);
        this.itemsArray = data;
        this.items = data;
      });
   }
 }      

}
