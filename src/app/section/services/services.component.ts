import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLaptopCode, faExternalLinkAlt, faChartLine, faMobileAlt, faBrain, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
}

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  imports: [FontAwesomeModule, CommonModule]
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Creating modern and responsive websites using the latest technologies.',
      icon: faLaptopCode
    },
    {
      id: 2,
      title: 'Mobile Development',
      description: 'Designing and building mobile apps for both Android and iOS.',
      icon: faMobileAlt

    },
    {
      id: 3,
      title: 'Machine Learning',
      description: 'Developing algorithms and models for predictive analysis and automation.',
      icon: faBrain
    },
    {
      id: 4,
      title: 'Web Scraping',
      description: 'Extracting data from websites for analysis or automation purposes.',
      icon: faExternalLinkAlt
    },
    {
      id: 5,
      title: 'Data Analysis',
      description: 'Analyzing data to extract valuable insights and trends.',
      icon: faChartLine
    },
    {
      id: 6,
      title: 'Business Intelligence',
      description: 'Implementing BI solutions for data-driven decision-making.',
      icon: faDatabase
    }
  ];

  isMobile: boolean = false;
  currentIndex: number = 0;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([
      '(max-width: 767px)' // Adjust this value as per your need
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  prevSlide() {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
  }

  nextSlide() {
    this.currentIndex = Math.min(this.currentIndex + 1, this.getSlides().length - 1);
  }

  getSlides() {
    const slides = [];
    for (let i = 0; i < this.services.length; i += 2) {
      slides.push(this.services.slice(i, i + 2));
    }
    return slides;
  }
}
