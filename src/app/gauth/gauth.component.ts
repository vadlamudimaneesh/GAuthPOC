import { Component, OnInit } from '@angular/core';
import { TfaService } from '../tfa.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-gauth',
  templateUrl: './gauth.component.html',
  styleUrls: ['./gauth.component.css']
})
export class GAuthComponent implements OnInit {

  secretValue : any;
  qrcode : any;
  verifycodeform : FormGroup;
  code : any;
  entercode : any;
  getcodevalue: any;
  
  // verifyotpcode() : any{
  //   this.verifycodeform = new FormGroup({
  //     'entercode' : new FormControl()
  //   })
  // }
  

  // elementType = NgxQrcodeElementTypes.URL;
  // correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  // value : String;
  

  constructor( private tfaService : TfaService) { }

  ngOnInit() : void {
    this.tfaService.getSecret().subscribe(data => {
      this.secretValue = data;
    })
    this.verifycodeform = new FormGroup({
      'entercode' : new FormControl()
    })
    // this.value = this.secretValue;
    // console.log(this.secretValue);  
  }

  getQRcode():any{
    if ( this.secretValue) {
      this.tfaService.getQrCode(this.secretValue).subscribe(value => {
        this.qrcode = value.data.QRaddr;
        console.log(this.qrcode);
      });
    }
  }

  getcode():any{
    this.tfaService.getCode(this.secretValue).subscribe(value => {
      this.getcodevalue = value.data.code;
      console.log(this.getcodevalue);
    });
  }

  submitcode(){
    this.entercode = this.verifycodeform.value; 
    console.log(this.entercode);
    
  }
  
  verifyCode():any{
    if ( this.entercode) {
      this.tfaService.verifyCode(this.entercode, this.secretValue).subscribe(value => {
        this.code = value.data.verifyResult1;
        console.log(this.code);
      });
    }
  }

}
