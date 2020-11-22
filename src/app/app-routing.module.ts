import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApartmemtDetailsComponent } from './apartmemt-details/apartmemt-details.component';
import { HomeComponent } from './home/home.component';
import { IndependentHouseDetailsComponent } from './independent-house-details/independent-house-details.component';

const routes: Routes = [

  {path:'independentHouse',component:IndependentHouseDetailsComponent},
  {path:'apartment',component:ApartmemtDetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
