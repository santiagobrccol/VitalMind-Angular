import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService} from '../../services/user.service';
import {Router } from '@angular/router'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  singUpForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
    ) {
    this.singUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      userName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  userRegistration () {
    console.log('user registration')
    if ( this.singUpForm.valid) {
      console.log('valid')
      this.userService.registerUser(this.singUpForm.value)
      .subscribe((response) => {
        //console.log('Success', response)
        this.router.navigate(['/questionnaire'])
      },
        (error) => {
          console.error('error', error)

          const campos = Object.keys(error.error.errors)

          campos.forEach((campo) => {
            alert(error.error.errors[campo].message)
          })
        }
      
      )
    } 
    document.querySelector('form').classList.add('was-validated')
  }
}
