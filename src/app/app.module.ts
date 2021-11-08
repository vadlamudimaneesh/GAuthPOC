import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GAuthComponent } from './gauth/gauth.component';
import { GAuthOTPComponent } from './gauth-otp/gauth-otp.component';
import { HttpClientModule} from '@angular/common/http';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule, MatDividerModule} from '@angular/material';
// import { QRCodeModule } from 'angularx-qrcode';
// import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GAuthComponent,
    GAuthOTPComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
    // QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
