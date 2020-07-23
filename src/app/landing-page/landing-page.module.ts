import { LandingPageComponent } from './landing-page/landing-page.component';
import { AllServicesComponent } from './all-services/all-services.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ServicesCardsComponent } from './services-cards/services-cards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MainMenuComponent,
    OrderStatusComponent,
    AllServicesComponent,
    ServicesCardsComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LandingPageComponent
  ]
})
export class LandingPageModule { }
