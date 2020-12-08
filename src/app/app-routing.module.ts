import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Comp1Component } from './comp1/comp1.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: Comp1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
