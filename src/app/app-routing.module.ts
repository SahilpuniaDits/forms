import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guard/auth.guard'

const routes: Routes = [
  {path:'s',
   loadChildren:()=>import('./featurs/featurs.module').then(m=>m.FeatursModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
