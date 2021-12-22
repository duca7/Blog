import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-likedarticles',
  templateUrl: './likedarticles.component.html',
  styleUrls: ['./likedarticles.component.scss'],
})
export class LikedarticlesComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
