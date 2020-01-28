import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
form = new FormGroup({
  account: new FormGroup({
    username: new FormControl(' ', [
      Validators.required,
      Validators.minLength(3),
    UsernameValidators.cannotContainSpace,
    UsernameValidators.shouldBeUnique]),
    password: new FormControl(' ', Validators.required)
  })
  
});

login(){
  this.form.setErrors({
    invalidLogin:true
  });
}
get username() {
  return this.form.get('account.username');
}
  constructor() { }

  ngOnInit() {
  }

}
