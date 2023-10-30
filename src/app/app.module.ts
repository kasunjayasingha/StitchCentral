import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { SplitterModule } from 'primeng/splitter';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MakeOrderComponent } from './pages/make-order/make-order.component';
import { ClientLoginComponent } from './pages/client-login/client-login.component';
import { OrderComponent } from './pages/order/order.component';
import { ServicesComponent } from './services/services.component';
import { ServicesFabricComponent } from './services-fabric/services-fabric.component';
import { ServiceWeavingComponent } from './service-weaving/service-weaving.component';
@NgModule({
  declarations: [AppComponent, NavBarComponent, HomeComponent, FooterComponent, AboutUsComponent, ContactUsComponent, MakeOrderComponent, ClientLoginComponent, OrderComponent, ServicesComponent, ServicesFabricComponent, ServiceWeavingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    MdbCollapseModule,
    BrowserAnimationsModule,
    ButtonModule,
    SplitterModule,
    MatIconModule,
    HttpClientModule,
    NgbCarouselModule,
    NgFor,
    NgIf,
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
