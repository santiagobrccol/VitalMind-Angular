import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient ) {

  }

  registerUser (data = {}) {
    console.log('working')
    return this.http.post(`${environment.API_URL}/user`, data)
  }

  updateLevel(userId, newLevel) {
    return this.http.put(`${environment.API_URL}/user/${userId}`, { level: newLevel })
  }
}
