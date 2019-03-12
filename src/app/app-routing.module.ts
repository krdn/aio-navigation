import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollingComponent } from './polling/polling.component';
import { UserCarComponent } from './user-car/user-car.component';
import { BithumbComponent } from './bithumb/bithumb.component';

const routes: Routes = [
  { path: 'polling', component: PollingComponent },
  { path: 'user-car', component: UserCarComponent },
  { path: 'bithumb', component: BithumbComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
