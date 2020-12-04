import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
