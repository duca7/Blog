import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editProfile',
  templateUrl: './editProfile.component.html',
  styleUrls: ['./editProfile.component.scss']
})
export class EditProfileComponent implements OnInit {
  editForm!: FormGroup;
  submitted = false;

  constructor(
    public dialogRef: MatDialogRef<EditProfileComponent>,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      email: [''],
      username: [''],
      bio: [''],
      image: [''],
    });
  }

  get fval(): { [key: string]: AbstractControl } {
    return this.editForm.controls;
  }

  onFormSubmit() {
    this.submitted = true;
    console.log(this.fval.email.value);
    console.log(this.fval.username.value);
    console.log(this.fval.bio.value);
    this.authService.updateCurrentUser(
      this.fval.username.value,
      this.fval.email.value,
      this.fval.bio.value,
      this.fval.image.value
    ).subscribe((res) => {
      this.dialogRef.close();
    })
  }

}
