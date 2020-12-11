import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenJwt } from '../interfaces/token-jwt'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private TOKEN_NAME = 'vitlamindToken';
  BASE_URL = `${environment.API_URL}/user/authentication`

  private user = new BehaviorSubject(null);

  user$ = this.user.asObservable();

  constructor(private http: HttpClient) {
    const token = localStorage.getItem(this.TOKEN_NAME)
    if (token) {
      this.user.next(this.getUserInfo());
    }
   }

  authenticate(credentials = {}) {
    return this.http.post<TokenJwt>(this.BASE_URL, credentials )
  }

  logOut(){
    localStorage.removeItem(this.TOKEN_NAME);
    this.user.next(null)
  }

  saveToken(token: any) {
    localStorage.setItem(this.TOKEN_NAME, token)
    this.user.next(this.getUserInfo())
  } 

  getUserInfo(){
    const token = localStorage.getItem('vitalmindToken')
    const base64Url = token.split('.')[1]; // Acá extraemos solo la parte del medio del token
  
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const userInfo = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    // Un pequeño console.log para ver que información logramos extraer
    console.log('userInfo ', userInfo);

    return JSON.parse(userInfo);
  }


  
    
  
}
