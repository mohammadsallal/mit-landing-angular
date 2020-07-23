import { SharedModule } from './shared/shared.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LandingPageModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
