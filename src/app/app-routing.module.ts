import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnsiedadComponent } from './component/ansiedad/ansiedad.component';
import { DepresionComponent } from './component/depresion/depresion.component';
import { HomeComponent } from './component/home/home.component';
import { IraComponent } from './component/ira/ira.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { QuestionnaireComponent } from './component/questionnaire/questionnaire.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ira',
    component: IraComponent

  },
  {
    path: 'ansiedad',
    component: AnsiedadComponent
  },
  {
    path: 'depresion',
    component: DepresionComponent
    
  },
  {
    path: 'questionnaire',
    component: QuestionnaireComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
