import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './navbar/sidenav/sidenav.component';


const routes: Routes = [
  {path:'', redirectTo: 'feed', pathMatch:'full'},
  {path:'feed', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
