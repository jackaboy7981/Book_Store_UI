import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AuthComponent } from './page/auth/auth.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full' },
  {path: 'home', component: HomeComponent},
  {path: 'authentication', component: AuthComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
