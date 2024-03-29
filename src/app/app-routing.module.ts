import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MakeOrderComponent } from './pages/make-order/make-order.component';
import { ClientLoginComponent } from './pages/client-login/client-login.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { UniversityTShirtsComponent } from './pages/university-t-shirts/university-t-shirts.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';

import { OrderComponent } from './pages/order/order.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServicesFabricComponent } from './pages/services-fabric/services-fabric.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ServiceViewComponent } from './pages/service-view/service-view.component';
import { AppComponent } from './app.component';
import { OurServiceComponent } from './pages/service/our-service/our-service.component';
import { SublimationPrintingComponent } from './pages/service/sublimation-printing/sublimation-printing.component';
import { FabricPrintingComponent } from './pages/service/fabric-printing/fabric-printing.component';
import { WeavingTieComponent } from './pages/service/weaving-tie/weaving-tie.component';
import { GarmentStitchingComponent } from './pages/service/garment-stitching/garment-stitching.component';
import { ApparelDesignComponent } from './pages/service/apparel-design/apparel-design.component';
import { CustomApparelComponent } from './pages/service/custom-apparel/custom-apparel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reload', component: AppComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'make-order', component: MakeOrderComponent },
  { path: 'client-login', component: ClientLoginComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'university', component: UniversityTShirtsComponent },
  { path: 'profile-view', component: ProfileViewComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'order', component: OrderComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services-fabric', component: ServicesFabricComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'service-view', component: ServiceViewComponent },
  { path: 'login', component: ClientLoginComponent },
  { path: 'our-service', component: OurServiceComponent },
  { path: 'submit-print', component: SublimationPrintingComponent },
  { path: 'fabric-print', component: FabricPrintingComponent },
  { path: 'weaving-tie', component: WeavingTieComponent },
  { path: 'garment-stitching', component: GarmentStitchingComponent },
  { path: 'apparel-design', component: ApparelDesignComponent },
  { path: 'custom-apparel', component: CustomApparelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
