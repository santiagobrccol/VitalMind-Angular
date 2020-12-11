import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from '../../services/user.service'
@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {

  constructor( private authenticationService: AuthenticationService, private userService: UserService) { }

  levelUpdate(){
        
    const userInfo: any = this.authenticationService.getUserInfo()
    const level = parseInt(userInfo.level) + 1

    this.userService.updateLevel(userInfo.id, level)
  }

  ngOnInit(): void {
  }

}
