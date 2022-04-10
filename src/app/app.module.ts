import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { EllipsisDirective } from './directives/ellipsis.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroDashboardComponent,
    HeroListComponent,
    EllipsisDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
