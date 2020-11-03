import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SedeRoutingModule } from './sede-routing.module';
import { SedeComponent } from './sede.component';


@NgModule({
  declarations: [SedeComponent],
  imports: [
    CommonModule,
    SedeRoutingModule,
    ReactiveFormsModule
  ]
})
export class SedeModule { }
