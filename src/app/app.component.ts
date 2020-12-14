import { Component } from '@angular/core';
import swal from 'sweetalert';
import {UserService } from './services/user.service'
import {AuthenticationService } from './services/authentication.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'vitalmind-Angular';
  progreso = 0;

  constructor ( private userService: UserService, private authenticationService: AuthenticationService){}
  
  barraProgreso(){
    this.progreso +=1

    if (this.progreso>=100){ 

      const userInfo: any = this.authenticationService.getUserInfo()
      const level = parseInt(userInfo.level) + 1
  
      this.userService.updateLevel(userInfo.id, level).subscribe((response) =>{
        swal("subiste de nivel","💪","success"); this.progreso=0
      },(error) =>{
        console.error('Error de autenticación', error)
      })
      }
  }

}

