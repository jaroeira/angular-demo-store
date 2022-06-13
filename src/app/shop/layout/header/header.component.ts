import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() links: { label: string; path: string }[] = [];
  @Output() categoriesClicked = new EventEmitter<void>();

  faBars = faBars;
  faXmark = faXmark;

  isMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('click');
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  onLoginClick(): void {
    this.router.navigate(['login']);
  }
}
