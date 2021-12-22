import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditProfileComponent } from './editProfile/editProfile.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user!: User | null;
  constructor(
    public router: Router,
    private authService: AuthService,
    public dialog: MatDialog
  ) {
    authService.getUser().subscribe((user) => {
      console.log(user);

      this.user = user;
    });
  }

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(EditProfileComponent, {
      height: '350px',
      width: '600px',
    });
  }
}
