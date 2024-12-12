import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';

import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [FontAwesomeModule, CommonModule]
})
export class ProjectsComponent implements OnInit {
  faGithub = faGithub;
  faYoutube = faYoutube;
  faCircleArrowDown = faCircleArrowDown;

  currentImageIndex: number[] = [];

  projects = [
    {
      name: 'KarVidy',
      description: 'A web application that predict a car price based on ML model,made with reactjs and python ',
      images: [
        'assets/karvidy-1.png',
        'assets/karvidy-2.png'
      ],
    },
    {
      name: 'TongaZa',
      description: 'A smart attendance  based on facial recognition, made with reactjs and python',
      images: [
        'assets/tongaza-1.png',
        'assets/tongaza-2.png'

      ],
    },
    {
      name: 'Direct Deal',
      description: 'Point of sale app, made with MERN stack, cover all the main feature for modern POS app',
      images: [
        'assets/d-deal.png'
      ],
    },
    {
      name: 'Business-Training',
      description: 'Mobile app, that allow users to subscribe to courses that interest them ',
      images: [
        'assets/business-training.png'
      ],
    },

  ];

  ngOnInit() {
    this.currentImageIndex = this.projects.map(() => 0);

    setInterval(() => {
      this.projects.forEach((project, index) => {
        this.currentImageIndex[index] = (this.currentImageIndex[index] + 1) % project.images.length;
      });
    }, 2000); // 2000 ms = 2 secondes
  }
}
