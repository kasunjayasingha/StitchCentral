import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MakeOrderComponent } from './pages/make-order/make-order.component';
import { ClientLoginComponent } from './pages/client-login/client-login.component';
import { OrderComponent } from './pages/order/order.component';
import { ServicesComponent } from './services/services.component';
import { ServicesFabricComponent } from './services-fabric/services-fabric.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'make-order', component: MakeOrderComponent },
  { path: 'client-login', component: ClientLoginComponent },
  { path: 'order', component: OrderComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services-fabric', component: ServicesFabricComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
