import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCoprodComponent } from './form-coprod/form-coprod.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path:'', component:FormCoprodComponent},
  { path:'initial', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
