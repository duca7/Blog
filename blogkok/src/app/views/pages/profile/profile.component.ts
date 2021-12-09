import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user!: User | null;
  constructor(public router: Router, private authService: AuthService) {
    authService.getUser().subscribe((user) => {
      console.log(user);

      this.user = user;
    });
  }

  ngOnInit(): void {}
}
