import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenJwt } from '../interfaces/token-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  BASE_URL = `${environment.API_URL}/user/authentication`

  constructor(private http: HttpClient) { }

  authenticate(credentials = {}) {
    return this.http.post<TokenJwt>(this.BASE_URL, credentials )
  }

  saveToken(token: any) {

    localStorage.setItem('vitalmindToken', token)
  }
}
