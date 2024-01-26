import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {CalendarModule} from 'primeng/calendar';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ButtonModule} from 'primeng/button';
import {HomeComponent} from './home/home.component';
import {SplitterModule} from 'primeng/splitter';

import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import {NgFor, NgIf} from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

import {FooterComponent} from './footer/footer.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {MakeOrderComponent} from './pages/make-order/make-order.component';
import {ClientLoginComponent} from './pages/client-login/client-login.component';
import {OrderComponent} from './pages/order/order.component';
import {ServicesComponent} from './pages/services/services.component';
import {ServicesFabricComponent} from './pages/services-fabric/services-fabric.component';
import {ServiceWeavingComponent} from './pages/service-weaving/service-weaving.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {UniversityTShirtsComponent} from './pages/university-t-shirts/university-t-shirts.component';
import {ProfileViewComponent} from './pages/profile-view/profile-view.component';
import {EditprofileComponent} from './pages/editprofile/editprofile.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import { ServiceViewComponent } from './pages/service-view/service-view.component';
import { OurServiceComponent } from './pages/service/our-service/our-service.component';
import { SublimationPrintingComponent } from './pages/service/sublimation-printing/sublimation-printing.component';
import { FabricPrintingComponent } from './pages/service/fabric-printing/fabric-printing.component';
import { WeavingTieComponent } from './pages/service/weaving-tie/weaving-tie.component';
import { GarmentStitchingComponent } from './pages/service/garment-stitching/garment-stitching.component';



@NgModule({
  declarations: [AppComponent, NavBarComponent, HomeComponent, FooterComponent, AboutUsComponent, ContactUsComponent, MakeOrderComponent, ClientLoginComponent, ProjectsComponent, UniversityTShirtsComponent, ProfileViewComponent, EditprofileComponent, OrderComponent, ServicesComponent, ServicesFabricComponent, ServiceWeavingComponent, SignUpComponent, ServiceViewComponent, OurServiceComponent, SublimationPrintingComponent, FabricPrintingComponent, WeavingTieComponent, GarmentStitchingComponent,],
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
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    CalendarModule,
  ],
  providers: [NgbCarouselConfig, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
