import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {

  faArrowAltCircleDown =faArrowAltCircleDown;
  faGithub =faGithub;

  projects = [
    {
      name: 'Fake Project 1',
      description: 'A fake projects for lorem50 fdfsdkfmdsjmfmlkdsjflkdsjfmlkdsjfmlhds fsdkfjhdmskjfhsdlk dfhkdfjd jaoizueajz ',
      img: 'assets/fake-project.png',
    },
    {
      name: 'Fake Project 1',
      description: 'A fake projects for lorem  derz',
      img: 'assets/fake-project.png',
    },    {
      name: 'Fake Project 1',
      description: 'A fake projects for lorem  derz',
      img: 'assets/fake-project.png',
    },


  ];
}
