import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ImgDefaultPipe} from './pipes/img-default.pipe';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgDefaultPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
