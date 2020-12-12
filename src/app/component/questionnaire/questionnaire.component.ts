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

          alert("The results are:" + JSON.stringify(survey.data));


        },
        (error) => {
          console.log('error', error)
        }
      )

  }

}







