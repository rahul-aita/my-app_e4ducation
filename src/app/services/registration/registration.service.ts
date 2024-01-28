import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/models/user';
;

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  public user = new User();


  constructor(private _http : HttpClient) { }

  public registerUserFromRemote(user: User): Observable<any> {

    const mockResponse = { status: 'success', message: 'User registered successfully' };
  
    return of(mockResponse);
  }


}