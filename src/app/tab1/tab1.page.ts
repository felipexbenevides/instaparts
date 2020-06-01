import { Component } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public codiprod:any;
  public prod:any = {"codi":"","desc":"", "codifab":"","qtd":"", "flag":false};
  public image:any = {"flag":false};
  public origin:any = origin;
  constructor() {
    // this.codiprod = '010278';
    this.clickedSearch();
  }
  clickedBarcode(){
    alert('');
  }
  onSearchChange(event){
    this.prod.flag = false;
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
      var form;
      form = new FormData();
      form.append('CAPA_IMG', $('#input-capa input')[0].files[0])
      $.ajax({
        type: "POST",
        url: this.origin+'/instaparts/upload.php?IMG=CAPA_IMG&CODIGO='+btoa(this.codiprod),
        data: form,
        processData: false,
        contentType: false,
        success: (data)=>{
          console.log(data)
        }
      });
    }
    if($('#input-img2 input')[0].files[0]){
      var form;
      form = new FormData();
      form.append('IMG2_IMG', $('#input-img2 input')[0].files[0])
      $.ajax({
        type: "POST",
        url: this.origin+'/instaparts/upload.php?IMG=IMG2_IMG&CODIGO='+btoa(this.codiprod),
        data: form,
        processData: false,
        contentType: false,
        success: (data)=>{
          console.log(data)
        }
      });
    }
    if($('#input-img3 input')[0].files[0]){
      var form;
      form = new FormData();
      form.append('IMG3_IMG', $('#input-img3 input')[0].files[0])
      $.ajax({
        type: "POST",
        url: this.origin+'/instaparts/upload.php?IMG=IMG3_IMG&CODIGO='+btoa(this.codiprod),
        data: form,
        processData: false,
        contentType: false,
        success: (data)=>{
          console.log(data)
        }
      });
    }
    // var form;
    // form = new FormData();
    // if($('#input-capa input')[0].files[0]) form.append('CAPA_IMG', $('#input-capa input')[0].files[0]);
    // if($('#input-img2 input')[0].files[0]) form.append('IMG2_IMG', $('#input-img2 input')[0].files[0]);
    // if($('#input-img3 input')[0].files[0]) form.append('IMG3_IMG', $('#input-img3 input')[0].files[0]);
    
    // $.ajax({
    //   type: "POST",
    //   url: 'http://192.168.15.12/instaparts/upload.php',
    //   data: form,
    //   processData: false,
    //   contentType: false,
    //   success: (data)=>{
    //     console.log(data)
    //   }
    //   // ,
    //   // dataType: dataType
    // });

  }
  clickedSearch(){
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

}
