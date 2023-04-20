import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authantication/login/login.component';
import { RegisterComponent } from './authantication/register/register.component';
import { WildcardComponent } from './authantication/wildcard/wildcard.component';
import { HomeComponent } from './Dashborad/home/home.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"maindashborad", loadChildren:()=>import ('./Dashborad/dashborad.module').then((m)=>m.DashboradModule)},
  {path:"**", component:WildcardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
