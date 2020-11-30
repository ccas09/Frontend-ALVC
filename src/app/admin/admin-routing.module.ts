import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorHomeScreenComponent } from '../visitor/screens/visitor-home-screen/visitor-home-screen.component';
import { AdminHomeScreenComponent } from './screens/admin-home-screen/admin-home-screen.component';

import { AdminComponent } from './admin.component';
import { CrearNoticiaComponent } from './screens/noticias/crear-noticia/crear-noticia.component';
import { EditarNoticiaComponent } from './screens/noticias/editar-noticia/editar-noticia.component';
import { ListaNoticiasComponent } from './screens/noticias/lista-noticias/lista-noticias.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home' },

      {
        path: 'home',
        component: AdminHomeScreenComponent,
      },
      {
        path: 'noticias',
        redirectTo: 'noticias/lista',
      },
      {
        path: 'noticias/lista',
        component: ListaNoticiasComponent,
      },
      {
        path: 'noticias/crear',
        component: CrearNoticiaComponent,
      },
      {
        path: 'noticias/editar/:idNoticia',
        component: EditarNoticiaComponent,
      },

      {
        path: 'categorias',
        redirectTo: 'categorias/lista',
      },
      {
        path: 'categorias/lista',
        component: ListaNoticiasComponent,
      },
      {
        path: 'categorias/crear',
        component: CrearNoticiaComponent,
      },
      {
        path: 'categorias/editar',
        component: EditarNoticiaComponent,
      },
      //{ path: '**', redirectTo: '/admin' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
