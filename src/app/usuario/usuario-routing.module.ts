import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorHomeScreenComponent } from '../visitor/screens/visitor-home-screen/visitor-home-screen.component';
import { UsuarioHomeScreenComponent } from './screens/usuario-home-screen/usuario-home-screen.component';

import {UsuarioComponent} from './usuario.component'

const routes: Routes = [
  {path: '' , component: UsuarioComponent,
  children:[
    {
      path: 'home', component: UsuarioHomeScreenComponent
    },
    {path: '**', redirectTo: '/usuario'}
  ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
