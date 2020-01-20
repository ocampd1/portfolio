import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './shared/app-component/app.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppHeaderComponent } from './shared/app-header/app-header.component';
import { AppBodyComponent } from './shared/app-body/app-body.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppHeaderComponent,
    AppBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
