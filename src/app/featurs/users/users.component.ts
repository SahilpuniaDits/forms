import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  ee: any=[]
  pp: any;
  public formsdata!: FormGroup;
  // email: any;
  // pass: any;
  constructor() { }


  ngOnInit(): void {
    this.formsdata =  new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }
  onSubmit(){
    console.log(this.formsdata.value)
    if(this.formsdata.invalid){
      return;
    }else{
      this.ee = this.formsdata.value
    
    }
  }

  public checkError =(controlName:any, errorName:any)=>{
    
    return this.formsdata.controls[controlName].hasError(errorName)
  }

}
