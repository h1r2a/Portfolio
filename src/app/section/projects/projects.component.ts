import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
      description: 'KarVidy is a web app that predicts car prices using machine learning. By analyzing factors like make, model, age, and mileage, it provides accurate price estimations. Built with ReactJS, Python, and FastAPI, it uses a trained model to offer valuable insights, helping users make informed decisions when buying or selling a car.',
      images: [
        'assets/karvidy-1.png',
        'assets/karvidy-2.png'
      ],
      githubLink: 'https://github.com/h1r2a/Kar-Vidy'
    },
    {
      name: 'TongaZa',
      description: 'TongaZa is an innovative attendance system powered by facial recognition technology. Developed with ReactJS and Python, it automates attendance tracking, offering a secure, contactless solution for schools and businesses. It ensures accurate identification and streamlines attendance management with a user-friendly interface.',
      images: [
        'assets/tongaza-1.png',
        'assets/tongaza-2.png'
      ],
      githubLink: 'https://github.com/h1r2a/TongaZa-smart-attendance-app'
    },
    {
      name: 'Direct Deal',
      description: 'Direct Deal is a POS system built with the MERN stack. It integrates sales management, inventory tracking, and user management. Businesses can process transactions seamlessly, track inventory in real-time, and manage user roles securely, helping optimize sales and operations with an intuitive interface.',
      images: [
        'assets/d-deal.png'
      ],
      githubLink: 'https://github.com/h1r2a/Direct-Deal'
    },
    {
      name: 'Business-Training',
      description: 'Business-Training is a mobile app developed with React Native, offering users a clean interface for accessing professional courses. Users can browse, subscribe to courses, and view schedules. With a focus on usability, it provides a simple solution for skill development without relying on a complex database system.',
      images: [
        'assets/business-training.png'
      ],
      githubLink: 'https://github.com/h1r2a/business-training'
    },{
      name: "IDEM Website",
      description: "The IDEM website is a Progressive Web Application (PWA) that showcases the organization's mission to transform administrative processes with biometric systems. With a focus on fast loading times, offline functionality, and a responsive design, it provides an interactive and seamless user experience across all devices.",
      images: [
        "assets/idem.PNG",
        "assets/idem2.PNG"
      ],
      githubLink: "https:idem-madagascar.com"
    }
    
    
  ];


  ngOnInit() {
    this.currentImageIndex = this.projects.map(() => 0);

    setInterval(() => {
      this.projects.forEach((project, index) => {
        this.currentImageIndex[index] = (this.currentImageIndex[index] + 1) % project.images.length;
      });
    }, 2000); // 2000 ms = 2 seconds
  }



  goToGithub(link: string): void {
    window.open(link, '_blank');
  }

}

