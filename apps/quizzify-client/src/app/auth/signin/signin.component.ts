import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../_services/toast.service';
import { FormControl, FormGroup } from '@angular/forms'
import { Roles } from './constants';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm = new FormGroup({
    role: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })

  isSubmitting: boolean = false

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.signInForm.setValue({
      role: Roles.STUDENT,
      email: '',
      password: ''
    })
  }

  updateRole(value: string): void {
    this.signInForm.patchValue({ role: value })
  }

  onSubmit(): void {
    this.isSubmitting = true

    this.userService.signIn(
      this.signInForm.get('email')?.value,
      this.signInForm.get('password')?.value,
      this.signInForm.get('role')?.value
    )

    this.isSubmitting = false
  }

}
