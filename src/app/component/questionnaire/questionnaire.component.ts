import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from '../../services/questionnaire.service'
//import "../../../vendor/modern.css";
declare const Survey: any;
declare const jQuery: any;

Survey.StylesManager.applyTheme("modern");


@Component({
  selector: 'app-settings',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  surveyJSON = { "pages": [{ "name": "questionnaireInit", "elements": [
    
    { "type": "radiogroup", "name": "question1", "title": "•\t¿ Tienes problemas para dormir ?", "titleLocation": "top", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] },

    { "type": "radiogroup", "name": "question2", "title": "•\t¿Tiene dificultades para comunicarse con sus amigos o Familia?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] },

    { "type": "radiogroup", "name": "question3", "title": "•\t¿Las Personas de su entorno se quejan de que Ud.  no las escucha?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] },
    
    { "type": "radiogroup", "name": "question4", "title": "•\t¿Consume algún tipo de drogas o alcohol para compensar algún problema?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] },
    
    { "type": "radiogroup", "name": "question5", "title": "•\t¿Con frecuencia pierde la noción del tiempo?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] }, 

    { "type": "radiogroup", "name": "question6", "title": "•\t¿Realiza múltiples tareas durante todo el día y siente que no puede parar?", "isRequired": true, "choices": [{ "value": "si", "text": "Si" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] }, 

    { "type": "radiogroup", "name": "question7", "title": "•\t¿Experimenta sensaciones que le indican que la vida no tiene sentido?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] }, 

    { "type": "radiogroup", "name": "question8", "title": "•\t¿Le cuesta sentirse con plenitud en el trabajo, en las reuniones sociales o a nivel intelectual?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] }, 

    { "type": "radiogroup", "name": "question9", "title": "•\t¿Siente que las personas en su entorno son mucho mejores o peores que usted?", "isRequired": true, "choices": [{ "value": "si", "text": "Mejores" }, { "value": "no", "text": "Peores" }, { "value": "aveces", "text": "Ni mejores ni peores" }] }, 

    { "type": "radiogroup", "name": "question10", "title": "•\t¿Se ha tornado irritable?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] }, 

    { "type": "radiogroup", "name": "question11", "title": "•\t¿Le cuesta iniciar o terminar alguna tarea?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }] }, 

    { "type": "radiogroup", "name": "question12", "title": "•\t¿Tiende a aislarse?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] }, 

    { "type": "radiogroup", "name": "question13", "title": "•\t¿Se siente demasiado cansado o con poca energía constantemente?", "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }] }

        ] 
      }
    ] 
}

  constructor( private serviceQuestionnaire: QuestionnaireService ) { }

  ngOnInit(): void {

    let survey = new Survey.Model(this.surveyJSON);
    jQuery("#surveyContainer").Survey({
      model: survey,
      onComplete: this.sendDataToServer
    }); 
  }

  sendDataToServer(survey) {

    this.serviceQuestionnaire.sendQuestionnaire( survey.data )
    .subscribe(
      (response) => {
        
        alert("The results are:" + JSON.stringify(survey.data));
      

      },
      (error) => {
        console.log('error',error)
      }
    )
    
  }

}







