import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatursRoutingModule } from './featurs-routing.module';
import { UsersComponent } from './users/users.component';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { SignupComponent } from './signup/signup.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainComponent } from './main/main.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AuthGuard} from '../guard/auth.guard'
import { ActivechildGuard } from '../guard/activechild.guard';
import { DeactiveGuard } from '../guard/deactive.guard';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UsersComponent,
    SignupComponent,
    MainComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FeatursRoutingModule,
    // MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    HttpClientModule
    
    
    // MatDatepickerModule    

  ],
  exports:[
    UsersComponent,
    SignupComponent,
    MainComponent,
    RegisterComponent
  ],
  providers: [AuthGuard,ActivechildGuard,DeactiveGuard],
})
export class FeatursModule { }
