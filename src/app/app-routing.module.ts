import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';

const routes: Routes = [
  {
    path: 'coins',
    component: CoinListComponent
  }, {
    path: 'coins/:symbol',
    component: CoinDetailsComponent
  }, {
    path: '',
    redirectTo: '/coins',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
