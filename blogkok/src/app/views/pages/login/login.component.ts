import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import Validation from '../../../utils/validation';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  get fval(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.authService
      .login(this.fval.email.value, this.fval.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
          this.snackBar.open('Success!', 'OK', { duration: 2000 });
        },
        error: (error) => {
          console.log(error);
          this.snackBar.open(error.errors.body[0], 'OK', { duration: 2000 });
        },
      });
  }
}
