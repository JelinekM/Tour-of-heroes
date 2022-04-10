import {NgModule} from '@angular/core';
import {HeroDetailRoutingModule} from './hero-detail-routing.module';
import {HeroDetailComponent} from './hero-detail.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    HeroDetailRoutingModule,
    FormsModule
  ]
})
export class HeroDetailModule { }

