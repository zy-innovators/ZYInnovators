import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../models';

@Component({
  selector: 'zy-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  activeDropdown = signal<string | null>(null);

  navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Training & Workshop', path: '/training-workshop' },
    { label: 'Competitions', path: '/competitions' },
    { label: 'Computer Upgrade', path: '/computer-upgrade' },
    {
      label: 'About',
      path: '/about',
      children: [
        { label: 'Leadership', path: '/about/leadership' },
        { label: 'Vision & Mission', path: '/about/vision-mission' }
      ]
    },
    { label: 'Contact', path: '/contact' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
    if (this.isMobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    document.body.style.overflow = '';
  }

  toggleDropdown(label: string): void {
    this.activeDropdown.update(v => v === label ? null : label);
  }

  closeDropdown(): void {
    this.activeDropdown.set(null);
  }

  parseQuery(path: string): Record<string, string> | null {
    const queryString = path.split('?')[1];
    if (!queryString) return null;
    const params: Record<string, string> = {};
    queryString.split('&').forEach(param => {
      const [key, value] = param.split('=');
      params[key] = value;
    });
    return params;
  }
}
