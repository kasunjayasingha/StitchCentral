import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MakeOrderComponent } from './pages/make-order/make-order.component';
import { ClientLoginComponent } from './pages/client-login/client-login.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { UniversityTShirtsComponent } from './pages/university-t-shirts/university-t-shirts.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'make-order', component: MakeOrderComponent },
  { path: 'client-login', component: ClientLoginComponent },
  { path: 'projects', component: ProjectsComponent}, 
  {path: 'university', component: UniversityTShirtsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
