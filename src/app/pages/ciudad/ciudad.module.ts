import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CiudadRoutingModule } from './ciudad-routing.module';
import { CiudadComponent } from './ciudad.component';


@NgModule({
  declarations: [CiudadComponent],
  imports: [
    CommonModule,
    CiudadRoutingModule,
    ReactiveFormsModule
  ]
})
export class CiudadModule { }
