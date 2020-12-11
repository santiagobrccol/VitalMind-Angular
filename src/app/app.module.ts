import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { QuestionnaireComponent } from './component/questionnaire/questionnaire.component';
import { TreeComponent } from './component/tree/tree.component';
import { ChatComponent } from './component/chat/chat.component';
import { LevelComponent } from './component/level/level.component';



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
    QuestionnaireComponent,
    TreeComponent,
    ChatComponent,
    LevelComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
