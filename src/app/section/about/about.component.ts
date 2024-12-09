import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  langage = [

    {
      name: 'JS/TS',
      percentage: 95,
      logo: 'assets/ts-js.jpeg',
    },
    {
      name: 'Java',
      percentage: 90,
      logo: 'assets/java.webp',
    },

    {
      name: 'Python',
      percentage: 90,
      logo: 'assets/python.jpg',
    },
  ];

  frameworks = [
    {
      name: 'Html',
      percentage: 99,
      logo: 'assets/html.png',
    },
    {
      name: 'Sass',
      percentage: 99,
      logo: 'assets/sass.png',
    },
    {
      name: 'React',
      percentage: 85,
      logo: 'assets/react.png',
    },
    {
      name: 'Angular',
      percentage: 85,
      logo: 'assets/angular.png',
    },
    {
      name: 'ExpressJS',
      percentage: 90,
      logo: 'assets/expressjs.png',
    },
    {
      name: 'Spring Boot',
      percentage: 88,
      logo: 'assets/spring.png',
    },
  ];

  databases=[
    {
      name: 'Oracle',
      percentage: 80,
      logo: 'assets/oracle.png',
    },
    {
      name: 'MySQL',
      percentage: 95,
      logo: 'assets/mysql.png',
    },
    {
      name: 'PostGreSQL',
      percentage: 90,
      logo: 'assets/postgre.svg.png',
    },
    {
      name: 'MongoDB',
      percentage: 85,
      logo: 'assets/mongo.svg',
    },
  ]

  getStrokeDashArray(percentage: number): string {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const dashArray = circumference * (percentage / 100);
    return `${dashArray} ${circumference}`;
  }

  getStrokeDashOffset(percentage: number): string {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const dashArray = circumference * (percentage / 100);
    return `${circumference - dashArray}`;
  }
}
