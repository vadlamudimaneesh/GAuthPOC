import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauth-otp',
  templateUrl: './gauth-otp.component.html',
  styleUrls: ['./gauth-otp.component.css']
})
export class GAuthOTPComponent implements OnInit {

  @Input()
  sample : String;



  constructor() { }

  ngOnInit() {
  }

}
