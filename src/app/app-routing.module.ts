import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent}   from './dashboard.component';
import {TransactionsComponent} from "./transaction.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
  },

  // {
  //   path: 'transactions/:id',
  //   component: DeckDetailComponent,
  // },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
