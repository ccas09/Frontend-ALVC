import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from 'src/app/visitor/screens/register/register.component';
import { VisitorCulturalScreenComponent } from './screens/visitor-cultural-screen/visitor-cultural-screen.component';
import { VisitorEspectaculosScreenComponent } from './screens/visitor-espectaculos-screen/visitor-espectaculos-screen.component';
import { VisitorHomeScreenComponent } from './screens/visitor-home-screen/visitor-home-screen.component';
import { VisitorInternacionalScreenComponent } from './screens/visitor-internacional-screen/visitor-internacional-screen.component';
import { VisitorNoticiasScreenComponent } from './screens/visitor-noticias-screen/visitor-noticias-screen.component';
import { VisitorSaludScreenComponent } from './screens/visitor-salud-screen/visitor-salud-screen.component';
import {VisitorComponent} from './visitor.component'
import { SearchDetailScreenComponent } from './screens/search-detail-screen/search-detail-screen.component';
import { DetailComponent } from './screens/detail/detail.component';


const routes: Routes = [
  {path: '', component: VisitorComponent,
  children:[
    {
      path: 'home', component: VisitorHomeScreenComponent
      
    },
    {
      path: 'nacional', component: VisitorNoticiasScreenComponent
    },
    
    {
      path: 'internacional', component: VisitorInternacionalScreenComponent
    },
    {
      path: 'cultural', component: VisitorCulturalScreenComponent
    },
    {
      path: 'espectaculos', component: VisitorEspectaculosScreenComponent
    },
    {
      path: 'salud', component: VisitorSaludScreenComponent
    },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'register', component: RegisterComponent
    },
    
    {
      path: 'buscar', component: SearchDetailScreenComponent
    },
    {
      path: 'detail', component: DetailComponent
    }
   
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
