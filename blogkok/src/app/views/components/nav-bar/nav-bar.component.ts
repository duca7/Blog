import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  user!: User | null;
  constructor(public router: Router, private authService: AuthService) {
    authService.getUser().subscribe((user) => {
      console.log(user);

      this.user = user;
    });
  }
  signout() {
    this.authService.logout();
  }
}
