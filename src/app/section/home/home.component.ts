import { CommonModule } from '@angular/common';
import { Component,HostListener,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  isBorder = false;
  isResumeDialogOpen = false;


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


  toggleResumeDialog() : void {
    this.isResumeDialogOpen = !this.isResumeDialogOpen
  }

  downloadResume(type:string): void {
    const link = document.createElement('a');
    if(type=="eng"){
      link.href = 'assets/Resume-Eng.pdf'; 
    }else{
      link.href = 'assets/Resume-Fr.pdf'; 

    }
    link.download = 'Harentsoa_Resume'; // nom du fichier
    link.click();  // déclenche le téléchargement
    this.toggleResumeDialog();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const dialog = document.querySelector('.resume-dialog');
    const dialogContent = document.querySelector('.dialog-header');

    // Vérifie si le clic était à l'extérieur de la boîte de dialogue
    if (this.isResumeDialogOpen && dialog && !dialog.contains(event.target as Node) && !dialogContent?.contains(event.target as Node)) {
      this.toggleResumeDialog(); // Ferme la boîte de dialogue
    }
  }
  

}
