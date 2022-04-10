import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroDashboardComponent} from './hero-dashboard/hero-dashboard.component';
import {HeroListComponent} from './hero-list/hero-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'hero-detail/:id', loadChildren: () => import('./hero-detail/hero-detail.module').then(m => m.HeroDetailModule)
  },
  {
    path: 'dashboard', component: HeroDashboardComponent
  },
  {
    path: 'heroes', component: HeroListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
