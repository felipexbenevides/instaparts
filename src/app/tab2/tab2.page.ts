import { Component } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public items:any;
  public origin:any = origin;

  constructor() {
    $.get( this.origin+"/instaparts/filedb.php", ( data )=>{
      data = JSON.parse(data);
      this.items = data;
      console.log(data);
    });
    // http://192.168.15.12/instaparts/filedb.php
  }

}
