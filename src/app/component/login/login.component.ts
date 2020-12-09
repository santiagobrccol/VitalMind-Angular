import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) {
    this.loginForm = this.formBuilder.group({

      email: ['', Validators.required],
      password: ['', Validators.required]

    });
  }

  logIn(){
    console.log('Form', this.loginForm.value)

    this.authenticationService.authenticate(this.loginForm.value).subscribe((response: any ) => {
      this.authenticationService.saveToken(response.jwt);
      
      swal('Succes', 'Has ingresado con exito', 'succses' )

    }, (error) => {
      console.error('Error de autenticación', error)
      swal('Error', error.error.message, 'error')

    })
  }

  ngOnInit(): void {
  }

}
