import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLaptopCode, faSearch, faPencilAlt, faPaintBrush, faBullhorn, faBriefcase } from '@fortawesome/free-solid-svg-icons';
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
  imports: [FontAwesomeModule,CommonModule]
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Creating modern and responsive websites tailored to your needs.',
      icon: faLaptopCode
    },
    {
      id: 2,
      title: 'SEO Optimization',
      description: 'Enhancing your website’s visibility on search engines through effective SEO strategies.',
      icon: faSearch
    },
    {
      id: 3,
      title: 'Content Creation',
      description: 'Producing engaging content that resonates with your audience.',
      icon: faPencilAlt
    },
    {
      id: 4,
      title: 'Graphic Design',
      description: 'Designing visually appealing graphics for your brand.',
      icon: faPaintBrush
    },
    {
      id: 5,
      title: 'Digital Marketing',
      description: 'Implementing strategies to promote your business online.',
      icon: faBullhorn
    },
    {
      id: 6,
      title: 'Consulting',
      description: 'Providing expert advice to help you achieve your business goals.',
      icon: faBriefcase
    }
  ];

  isMobile: boolean = false;
  currentIndex: number = 0;

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit() {
    this.breakpointObserver.observe([
      '(max-width: 767px)' // Ajustez cette valeur selon vos besoins
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
