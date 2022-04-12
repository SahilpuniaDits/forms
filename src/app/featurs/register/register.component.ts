import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  registerdata(role_name:any,username:any,email:any,password:any){
    const data:any={
      role_name:role_name,
      username:username,
      email:email,
      password:password
    }
    console.log(data)
  this.authService.register(data).subscribe((res:any)=>{

  })
  }

}
