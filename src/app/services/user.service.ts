import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signup } from '../data-types';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLogginError = new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router: Router) {}
  userSignup(userData: signup) {
    return this.http
      .post('http://localhost:3000/user', userData, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
        localStorage.setItem('user', JSON.stringify(result.body));
        // this.router.navigate(['/'])
      }
      });
  }

  userLogIn(data: login) {
    return this.http
      .get<signup[]>(
        `http://localhost:3000/user?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((result) => {
        if(result && result.body && result.body.length >0){
          console.log(result );
          localStorage.setItem('user', JSON.stringify(result.body[0]));
        this.router.navigate(['/'])
        }
        else{
          this.isLogginError.emit(true)
        }
      });
  }
}
