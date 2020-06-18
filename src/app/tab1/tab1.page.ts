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
  public image:any = {"flag":false};
  public result:any = {"capa":"","img2":"","img3":""};
  public origin:any = origin;
  constructor() {
    // this.codiprod = '010278';
    this.clickedSearch();
    this.initializeItems();
    this.isItemAvailable = false; // initialize the items with false
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
    this.image.flag = true;
    $('#'+selector2)[0].src = window.URL.createObjectURL($('#'+selector1+' input')[0].files[0]);
    console.log(window.URL.createObjectURL($('#'+selector1+' input')[0].files[0]));
  }
  onSubmit(){
    if(!confirm("Confirma a alteração das fotos?")) return;
    if($('#input-capa input')[0].files[0]){
      this.submitCapa();
    }else if($('#input-img2 input')[0].files[0]){
      this.submitImg2();
    }else if($('#input-img3 input')[0].files[0]){
      this.submitImg3();

    }
  }
  submitCapa(){
    if($('#input-capa input')[0].files[0]){
      var form;
      form = new FormData();
      form.append('CAPA_IMG', $('#input-capa input')[0].files[0]);
      this.result.capa = this.codiprod+" > CAPA_IMG : ERRO";
      $.ajax({
        type: "POST",
        url: this.origin+'/instaparts/upload.php?IMG=CAPA_IMG&CODIGO='+btoa(this.codiprod),
        data: form,
        processData: false,
        contentType: false,
        success: (data)=>{
          console.log(data)
          this.result.capa = JSON.parse(data);
          this.submitImg2();
        }
      });
    }
  }
  submitImg2(){
    if($('#input-img2 input')[0].files[0]){
      var form;
      form = new FormData();
      form.append('IMG2_IMG', $('#input-img2 input')[0].files[0]);
      this.result.img2 = this.codiprod+" > IMG2_IMG : ERRO";
      setTimeout(() => {
        $.ajax({
          type: "POST",
          url: this.origin+'/instaparts/upload.php?IMG=IMG2_IMG&CODIGO='+btoa(this.codiprod),
          data: form,
          processData: false,
          contentType: false,
          success: (data)=>{
            console.log(data)
            this.result.img2 = JSON.parse(data);
            this.submitImg3();
          }
        });        
      }, 1000);
    }
  }
  submitImg3(){
    if($('#input-img3 input')[0].files[0]){
      var form;
      form = new FormData();
      form.append('IMG3_IMG', $('#input-img3 input')[0].files[0]);
      this.result.img3 = this.codiprod+" > IMG3_IMG : ERRO";
      setTimeout(() => {
        $.ajax({
          type: "POST",
          url: this.origin+'/instaparts/upload.php?IMG=IMG3_IMG&CODIGO='+btoa(this.codiprod),
          data: form,
          processData: false,
          contentType: false,
          success: (data)=>{
            console.log(data)
            this.result.img3 = JSON.parse(data);
          }
        });
      }, 2000);
    }
  }
  clickedSearch(){
    this.isItemAvailable = false;
    $.get( this.origin+"/instaparts/oci.php?CODIPROD="+this.codiprod, ( data )=>{
      data = JSON.parse(data);
      if(!(data.data[0])){
        this.prod.flag = false;
        return;
      }
      data = data.data[0];
      console.log(data);
      this.prod.codi = data['CODI_PROD'];
      this.prod.desc = data['DESC_PROD'];
      this.prod.codifab = data['CODIFAB_PROD'];
      this.prod.qtd = data['QTDD_QTDD'];
      this.prod.flag = true;
    });

  }

  setProd(ev:any){
    console.log("setProd");
    console.log(ev);
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
    // $.get( this.origin+"/instaparts/oci.php?CODIPROD="+this.codiprod, ( data )=>{

   if(this.itemsArray){
    this.items = this.itemsArray;
   }else{
      $.get(this.origin+"/api/balanco/produto?OP=LIST", ( data )=>{
        console.log('antes',data);
        data = JSON.parse(data);
        console.log(data);
        this.itemsArray = data;
        this.items = data;
      });
   }
 }      

}
