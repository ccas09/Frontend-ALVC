import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioHomeScreenComponent } from './screens/usuario-home-screen/usuario-home-screen.component';
import { SharedModule } from '../shared/shared.module';
import { UsuarioComponent } from './usuario.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [UsuarioHomeScreenComponent, UsuarioComponent, NavbarComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule
  ]
})
export class UsuarioModule { }
