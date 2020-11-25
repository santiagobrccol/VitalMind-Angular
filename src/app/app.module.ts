import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IraComponent } from './component/ira/ira.component';
import { AnsiedadComponent } from './component/ansiedad/ansiedad.component';
import { DepresionComponent } from './component/depresion/depresion.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { SettingsComponent } from './component/settings/settings.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    IraComponent,
    AnsiedadComponent,
    DepresionComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PageNotFoundComponent,
    SettingsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
