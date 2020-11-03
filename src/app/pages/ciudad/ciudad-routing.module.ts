import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CiudadComponent } from './ciudad.component';

const routes: Routes = [{ path: '', component: CiudadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiudadRoutingModule { }
