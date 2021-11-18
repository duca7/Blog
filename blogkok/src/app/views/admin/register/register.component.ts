import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(8)],
      email: ['', Validators.required],
    });
  }

  onSubmit() {
    this.authService
      .register(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/login'], { relativeTo: this.route });
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
