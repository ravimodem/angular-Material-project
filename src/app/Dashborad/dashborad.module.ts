import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradRoutingModule } from './dashborad-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    SidenavComponent,
    HomeComponent],
  imports: [
    CommonModule,
    DashboradRoutingModule,
    MaterialModule 
  ]
})
export class DashboradModule { }
