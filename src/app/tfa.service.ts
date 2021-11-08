import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TfaService {


  // public myAngularxQrCode: string;

  constructor( private http: HttpClient) {
   }

  getSecret() {
    // const headers = new HttpHeaders({
    //   'content-Type' : 'application/json; charset=utf-8',
    //   'authenticationToken' : '123456'
    // })
    return this.http.get("http://localhost:3000/secret",
    //  { headers: headers}
     );
  }

  getQrCode(data: any) : Observable<any>{
     return this.http.post("http://localhost:3000/get_qr_code", data);
  }

  getCode(data: any): Observable<any>{
    return this.http.post("http://localhost:3000/get_code", data);
  }

  verifyCode(data:any, secret:any) : Observable<any>{
    return this.http.post("http://localhost:3000/verify", data, secret);
  }





}
