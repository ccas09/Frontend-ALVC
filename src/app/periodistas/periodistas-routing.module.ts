
import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodistasComponent } from './periodistas.component';
import { PeriodistaEliminarScreenComponent } from './screens/periodista-eliminar-screen/periodista-eliminar-screen.component';
import { PeriodistaHomeScreenComponent } from './screens/periodista-home-screen/periodista-home-screen.component';
import { PeriodistasModificarScreenComponent } from './screens/periodistas-modificar-screen/periodistas-modificar-screen.component';

const routes: Routes = [
  {path: '', component: PeriodistasComponent,
  children:[
      {
        path: 'home' , component: PeriodistaHomeScreenComponent
      },
      {
        path: 'eliminar' , component: PeriodistaEliminarScreenComponent
      },
      {
        path: 'modificar' , component: PeriodistasModificarScreenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodistasRoutingModule { }
