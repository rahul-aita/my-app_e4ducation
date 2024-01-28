import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { map } from "rxjs/operators";
import { User } from 'src/app/models/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user = new User();

  constructor(private _http: HttpClient) { }
  
  public loginUserFromRemote(user: User) {
    const simulatedData = {
      token: 'your_simulated_token'
    };

    if (user.email === 'testuser@gmail.com' && user.password === 'dummy@123') {
      sessionStorage.setItem('USER', user.email);
      sessionStorage.setItem('ROLE', 'USER');
      sessionStorage.setItem('TOKEN', `Bearer ${simulatedData.token}`);
      return of(simulatedData);  
    } else {
      return throwError('Invalid credentials');  
    }
  }

 

isUserLoggedIn()
{
  let user = sessionStorage.getItem('USER');
  if(user === null || user.length === 0) 
  {
      return false;
  }
  return true;
}



isAdminLoggedIn()
{
  let user = sessionStorage.getItem('USER');
  if(user === null || user.length === 0) 
  {
      return false;
  }
  return true;
}

getAuthenticatedToken() {
  return sessionStorage.getItem('TOKEN');
}

getAuthenticatedUser() {
  return sessionStorage.getItem('USER');
}

userType() {
    return sessionStorage.getItem('ROLE');
}

public adminLoginFromRemote(email: string, password: string)
{
  if(email === 'admin@gmail.com' && password === 'dummy@123') 
  {
    sessionStorage.setItem('user', email);
    sessionStorage.setItem('ROLE', "admin");
    return true;
  }
  return false;
}

}