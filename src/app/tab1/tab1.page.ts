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
  constructor() {
  }
  
  clickedSearch(){

    $.get( "http://192.168.15.12/instaparts/oci.php?CODIPROD="+this.codiprod, ( data )=>{
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

  clickedBarcode(){
    alert('');
  }
  onSearchChange(event){
    this.prod.flag = false;
  }
  selectfile(ident){
    $("#input-"+ident+" input").trigger('click');
  }

}
