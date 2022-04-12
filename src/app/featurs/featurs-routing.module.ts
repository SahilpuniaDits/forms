import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivechildGuard } from '../guard/activechild.guard';
import { AuthGuard } from '../guard/auth.guard';
import { DeactiveGuard } from '../guard/deactive.guard';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
// {path:'',component:SignupComponent},
{path:'signup',component:SignupComponent},  
{path:'users',component:UsersComponent},
{path:'main',component:MainComponent},
{path:'register',component:RegisterComponent}
];
// ,canActivate:[AuthGuard] ,canDeactivate:[DeactiveGuard] 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatursRoutingModule { }
