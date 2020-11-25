import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService} from '../../services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  singUpForm: FormGroup;

  constructor(
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
    if ( this.singUpForm.valid) {
      this.userService.registerUser(this.singUpForm.value)
      .subscribe((response) => {
        console.log('Succsess', response)
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
