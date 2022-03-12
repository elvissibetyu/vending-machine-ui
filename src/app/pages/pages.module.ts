import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReportComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    ReportComponent
  ]
})
export class PagesModule { }
