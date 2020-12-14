import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../../services/questionnaire.service'
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

  surveyJSON = {
    "pages": [{
      "name": "questionnaireInit", "elements": [

        { "type": "radiogroup", "name": "question1", "title": "•\t¿ Tienes problemas para dormir ?", "titleLocation": "top", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] },

        { "type": "radiogroup", "name": "question2", "title": "•\t¿Tiene dificultades para comunicarse con sus amigos o Familia?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] },

        { "type": "radiogroup", "name": "question3", "title": "•\t¿Las Personas de su entorno se quejan de que Ud.  no las escucha?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] },

        { "type": "radiogroup", "name": "question4", "title": "•\t¿Consume algún tipo de drogas o alcohol para compensar algún problema?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] },

        { "type": "radiogroup", "name": "question5", "title": "•\t¿Experimenta sensaciones que le indican que la vida no tiene sentido?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] },

        { "type": "radiogroup", "name": "question6", "title": "•\t¿Siente que las personas en su entorno son mucho mejores o peores que usted?", "isRequired": true, "choices": [{ "value": "si", "text": "Mejores" }, { "value": "no", "text": "Peores" }, { "value": "aveces", "text": "Ni mejores ni peores" }] },

        { "type": "radiogroup", "name": "question7", "title": "•\t¿Se ha tornado irritable?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] },

        { "type": "radiogroup", "name": "question8", "title": "•\t¿Tiende a aislarse?", "isRequired": true, "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }, { "value": "aveces", "text": "Aveces" }] },

        { "type": "radiogroup", "name": "question9", "title": "•\t¿Se siente demasiado cansado o con poca energía constantemente?", "choices": [{ "value": "si", "text": "SI" }, { "value": "no", "text": "NO" }] }

      ]
    }
    ]
  }

  constructor(private serviceQuestionnaire: QuestionnaireService) { }

  ngOnInit(): void {

    let survey = new Survey.Model(this.surveyJSON);
    const self = this;
    jQuery("#surveyContainer").Survey({
      model: survey,
      onComplete: (surveyData) => { self.sendDataToServer(surveyData)}
    });
  }

  sendDataToServer(survey) {

    this.serviceQuestionnaire.sendQuestionnaire(survey.data)
      .subscribe(
        (response) => {

          this.calcularPuntaje(survey.data)   
        
        },
        (error) => {
          console.log('error', error)
        }
      )

  }
  calcularPuntaje(questionnaire = {}) {  
    let puntaje = 0;
    // let encuesta = {question1: "si", question2: "no", question3: "aveces", question4: "si", question5: "no"}

    let preguntas = Object.keys(questionnaire)

    preguntas.forEach((question) => {
      if (questionnaire[question] === 'si') {
        puntaje += 5;
      } else if (questionnaire[question] === 'no') {
        puntaje += 0;
      } else { // Cuando la respuesta sea 'aveces'
        puntaje += 3;
      }
    })

    // 40 o mas => Entonces tiene muchos problemas
    // 25 o mas => Entonces tiene los problemas normales
    // 24 o menos => Esta super bien

    if (puntaje >= 40) {
      console.log('Tienes muchos problemas :S');
      alert('Tienes muchos problemas :S');
    } else if (puntaje >= 25 && puntaje < 40) {
      console.log('Tienes los problemas normales de todos :S');
      alert('Tienes los problemas normales de todos :S');
   
    } else {
      console.log('Esta super bien 🥳')
      alert('Esta super bien 🥳')
    }

  }


}







