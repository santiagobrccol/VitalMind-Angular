import { Component } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vitalmind-Angular';
  progreso = 0;

  
  barraProgreso(){
    this.progreso +=50



    if (this.progreso>=100){swal("subiste de nivel","💪","success"); this.progreso=0}
  }
}

