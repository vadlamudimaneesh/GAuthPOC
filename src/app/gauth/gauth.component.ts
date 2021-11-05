import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauth',
  templateUrl: './gauth.component.html',
  styleUrls: ['./gauth.component.css']
})
export class GAuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  QRgenerator(){
    console.log("HiThereManeesh");
  }

}
