import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCoprodComponent } from './form-coprod/form-coprod.component';


const routes: Routes = [
  {path:'', component:FormCoprodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
