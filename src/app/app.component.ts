import { Component, NgModule ,HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./section/home/home.component";
import { AboutComponent } from "./section/about/about.component";
import { CommonModule } from '@angular/common';
import { ServicesComponent } from "./section/services/services.component";
import { ProjectsComponent } from "./section/projects/projects.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub,faLinkedin,faFacebook } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent, CommonModule, ServicesComponent, ProjectsComponent,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook
  title = 'portfolio_angular';
  isMenuOpen = false;
  currentSection = 'home';
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollToSection(sectionId: string) {
    const navbarHeight = 60; // Hauteur de votre barre de navigation fixe
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
      this.currentSection = sectionId;
      this.closeMenu();
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'service', 'projects'];
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Milieu de la fenêtre
  
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;
  
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          this.currentSection = section;
          break;
        }
      }
    }
  }
  
}
