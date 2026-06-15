import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'zy-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  upgradeLinks = [
    { label: 'Grades 5-6 (Visual Coding)', path: '/computer-upgrade' },
    { label: 'Grade 7 (Python Coding)', path: '/computer-upgrade' },
    { label: 'Grades 8-9 (Data Visualization)', path: '/computer-upgrade' },
    { label: 'Grade 10 (Productivity & GenAI)', path: '/computer-upgrade' }
  ];

  trainingLinks = [
    { label: 'For Teachers', path: '/training-workshop' },
    { label: 'For Students', path: '/training-workshop' }
  ];

  competitionLinks = [
    { label: 'GK Quiz', path: '/competitions' },
    { label: 'Maths Olympiad', path: '/competitions' },
    { label: 'Science Quiz', path: '/competitions' },
    { label: 'IT & Coding Quiz', path: '/competitions' }
  ];

  companyLinks = [
    { label: 'About Us', path: '/about/vision-mission' },
    { label: 'Leadership', path: '/about/leadership' },
    { label: 'Contact', path: '/contact' }
  ];
}
