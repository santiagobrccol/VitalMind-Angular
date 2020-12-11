import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user = null;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user$.subscribe(
      (userInfo) =>{
        console.log('user', userInfo)
        this.user = userInfo
      },
      (error) =>{

      }
    )
  }

  logOut() {
    this.authenticationService.logOut()
  }

  ngOnInit(): void {
  }

}
