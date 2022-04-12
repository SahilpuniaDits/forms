import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://127.0.0.1:5000/api/account/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data:any): Observable<any> {
    return this.http.post(AUTH_API +'register/' ,data)
  }
  login(ldata:any): Observable<any> {
    return this.http.post(AUTH_API + 'login/',ldata)
  }
}
