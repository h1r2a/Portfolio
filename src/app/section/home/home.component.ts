import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  isBorder = false;
  ngOnInit(): void {
    this.activateBorder()
  }
  activateBorder(): void {
    this.isBorder = true;

    setTimeout(() => {
      this.isBorder = false;
      
      setTimeout(() => {
        this.isBorder = true;
      }, 5000);
    }, 1000);
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';  // chemin vers le fichier
    link.download = 'Harentsoa_Resume'; // nom du fichier
    link.click();  // déclenche le téléchargement
  }
  

}
