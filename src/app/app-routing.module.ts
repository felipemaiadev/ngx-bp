import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCoprodComponent } from './form-coprod/form-coprod.component';
import { DisplaySummaryComponent } from './display-summary/display-summary.component';


const routes: Routes = [
  {path:'', component:FormCoprodComponent },
  {path:'teste', component:DisplaySummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
