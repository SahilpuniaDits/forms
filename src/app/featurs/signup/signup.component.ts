import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, Observable, startWith } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { AuthService } from 'src/app/services/auth.service';

interface study{
  value:string;
  viewValue: string;
}
export interface Tech{
  name:string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  check1: any;
  check2: any;
   
  studys:study[] = [
    {value:'12th-0',viewValue:'12th'},
    {value:'graduation-1',viewValue:'graduation'},
    {value:'postgraduation-2',viewValue:'postgraduation'},
  ]
  password: any;
  email: any;
  exper: any;
  technology: any;
  qulify: any;
  gender: any;
  slid: any;
  value: any;
  constructor(private authService:AuthService) { }
  //materials autocomplete
  myControl = new FormControl();
  options: string[] = ['One years', 'Two years', 'Three years','Four years','Five years'];
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  //close autocomple
  //chips start
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  techs: Tech[] = [{name: 'Python'}, {name: 'Php'}, {name: 'Node'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.techs.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tech: Tech): void {
    const index = this.techs.indexOf(tech);

    if (index >= 0) {
      this.techs.splice(index, 1);
    }
  }
//close
  submitdata(email:any,password:any){
    if (email == 'sahilpunia@gmail.com' && password=="123"){
      this.value =true
      alert(this.value)
    }
    else{
      this.value =false
      alert(this.value)
    }

  }



  // signupdata(value1:any,value2:any,value3:any,value4:any,value6:any){
  //   this.email=value1
  //   this.password=value2
  //   this.exper=value3
  //   this.technology=value4
  //   // this.gender=value5
  //   this.qulify=value6.viewValue
  //   console.log(this.technology.value)



  // }
  sliddata(value7:any){
    this.slid=value7
  }
  toggle(toggl:any){
  
    if (toggl==false){
      alert ("you are sure")
    } 
  }


  logindata(email:any,password:any){
    const datal:any={
      email:email,
      password:password

    }
    console.log(datal)
    this.authService.login(datal).subscribe((res:any)=>{
      console.log(res)
    })
  }

}
