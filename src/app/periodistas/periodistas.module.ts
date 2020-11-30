import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PeriodistasRoutingModule } from './periodistas-routing.module';
import { PeriodistasComponent } from './periodistas.component';
import { SharedModule } from '../shared/shared.module';
import { PeriodistaHomeScreenComponent } from './screens/periodista-home-screen/periodista-home-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeriodistaEliminarScreenComponent } from './screens/periodista-eliminar-screen/periodista-eliminar-screen.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PeriodistasModificarScreenComponent } from './screens/periodistas-modificar-screen/periodistas-modificar-screen.component';
import { News2CardComponent } from './components/news2-card/news2-card.component';



@NgModule({
  declarations: [PeriodistaHomeScreenComponent,PeriodistasComponent, NavbarComponent, PeriodistaEliminarScreenComponent, NewsCardComponent, PeriodistasModificarScreenComponent, News2CardComponent],
  imports: [
    CommonModule,
    PeriodistasRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class PeriodistasModule { }
