import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vitalmind-Angular';
  progreso = 0;

  barraProgreso(){
    this.progreso++
  }
}
