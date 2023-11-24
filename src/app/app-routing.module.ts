import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './AuthGuard/auth.guard';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "navbar", component: NavBarComponent },
  { path: "home-page", component: HomepageComponent, canActivate: [AuthGuard] },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
