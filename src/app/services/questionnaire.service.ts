import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(private http: HttpClient) { }

  sendQuestionnaire(data){
    return this.http.post('http://vitalmind.herokuapp.com/questionnaire', data )
  }
}
