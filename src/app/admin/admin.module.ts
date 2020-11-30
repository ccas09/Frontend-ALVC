import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeScreenComponent } from './screens/admin-home-screen/admin-home-screen.component';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { EditarNoticiaComponent } from './screens/noticias/editar-noticia/editar-noticia.component';
import { ListaNoticiasComponent } from './screens/noticias/lista-noticias/lista-noticias.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { ListaCategoriasComponent } from './screens/categorias/lista-categorias/lista-categorias.component';
import { CrearCategoriaComponent } from './screens/categorias/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './screens/categorias/editar-categoria/editar-categoria.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormNoticiasComponent } from './screens/noticias/form-noticias/form-noticias.component';
import { CrearNoticiaComponent } from './screens/noticias/crear-noticia/crear-noticia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminHomeScreenComponent,
    AdminComponent,
    EditarNoticiaComponent,
    ListaNoticiasComponent,
    CrearNoticiaComponent,
    AdminNavbarComponent,
    FormNoticiasComponent,
    ListaCategoriasComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
