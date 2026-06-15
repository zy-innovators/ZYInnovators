import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'training-workshop',
        loadComponent: () => import('./features/training-workshop/training-workshop.component').then(m => m.TrainingWorkshopComponent)
      },
      {
        path: 'computer-upgrade',
        loadComponent: () => import('./features/computer-upgrade/computer-upgrade.component').then(m => m.ComputerUpgradeComponent)
      },
      {
        path: 'competitions',
        loadComponent: () => import('./features/competitions/competitions.component').then(m => m.CompetitionsComponent)
      },
      {
        path: 'programs',
        redirectTo: 'computer-upgrade'
      },
      {
        path: 'programs/:slug',
        redirectTo: 'computer-upgrade'
      },
      {
        path: 'resources',
        loadComponent: () => import('./features/resources/resource-library/resource-library.component').then(m => m.ResourceLibraryComponent)
      },
      {
        path: 'projects',
        redirectTo: 'computer-upgrade'
      },
      {
        path: 'projects/:slug',
        redirectTo: 'computer-upgrade'
      },
      {
        path: 'gallery',
        redirectTo: ''
      },
      {
        path: 'innovation-lab',
        redirectTo: ''
      },
      {
        path: 'about/leadership',
        loadComponent: () => import('./features/about/leadership/leadership.component').then(m => m.LeadershipComponent)
      },
      {
        path: 'about/vision-mission',
        loadComponent: () => import('./features/about/vision-mission/vision-mission.component').then(m => m.VisionMissionComponent)
      },
      {
        path: 'about/partnerships',
        loadComponent: () => import('./features/about/partnerships/partnerships.component').then(m => m.PartnershipsComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact-page/contact-page.component').then(m => m.ContactPageComponent)
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

