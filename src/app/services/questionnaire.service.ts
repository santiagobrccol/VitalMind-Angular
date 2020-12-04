import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(private http: HttpClient) { }

  sendQuestionnaire(data){
    return this.http.post('https://vitalmind.herokuapp.com/answers', data )
  }
}
