import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorHomeScreenComponent } from './screens/visitor-home-screen/visitor-home-screen.component';
import { VisitorComponent } from './visitor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { News2CardComponent } from './components/news2-card/news2-card.component';
import { VisitorNoticiasScreenComponent } from './screens/visitor-noticias-screen/visitor-noticias-screen.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { VisitorInternacionalScreenComponent } from './screens/visitor-internacional-screen/visitor-internacional-screen.component';
import { VisitorCulturalScreenComponent } from './screens/visitor-cultural-screen/visitor-cultural-screen.component';
import { VisitorEspectaculosScreenComponent } from './screens/visitor-espectaculos-screen/visitor-espectaculos-screen.component';
import { VisitorSaludScreenComponent } from './screens/visitor-salud-screen/visitor-salud-screen.component';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { DetailComponent } from './screens/detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SearchDetailScreenComponent } from './screens/search-detail-screen/search-detail-screen.component';
import { MatPaginator } from '@angular/material/paginator';

import {NgxPaginationModule} from 'ngx-pagination';
import { FilterSearchPipe } from './pipe/filter-search.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({

  declarations: [
    VisitorHomeScreenComponent,
    VisitorComponent,
    NavbarComponent,
    News2CardComponent,
    VisitorNoticiasScreenComponent,
    NewsCardComponent,
    VisitorInternacionalScreenComponent,
    VisitorCulturalScreenComponent,
    VisitorEspectaculosScreenComponent,
    VisitorSaludScreenComponent,
    LoginComponent,
    RegisterComponent,
    DetailComponent,

    SearchDetailScreenComponent,
 
    FilterSearchPipe,
   
  ],

  imports: [
    CommonModule,
    VisitorRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    NgxPaginationModule,
  
    MatFormFieldModule
  ],


})
export class VisitorModule {}
