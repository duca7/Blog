import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent implements OnInit {
  currentUser: any;
  username!: string | null;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.getName(this.username);
  }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.getName(this.route.snapshot.paramMap.get('username'));
  }

  getName(username: any | null) {
    this.authService.getUserByName(username).subscribe((res) => {
      console.log(res);
      this.currentUser = res;
    });
  }
}
