import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './AuthGuard/auth.guard';
import { Routes } from '@angular/router';
import { SpeedDialModule } from 'primeng/speeddial';
import { SidebarModule } from 'primeng/sidebar';

const routes: Routes = [
  // Your other routes...

  {
    path: 'secured-route',
    canActivate: [AuthGuard],
    loadChildren: () => import('./homepage/homepage.component').then(m => m.HomepageComponent),
  },
]
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomepageComponent,
    SidebarComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule,
    BadgeModule,
    DialogModule,
    CardModule,
    HttpClientModule,
    SpeedDialModule,
    SidebarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
