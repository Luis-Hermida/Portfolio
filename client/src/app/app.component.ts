import { Component, OnInit } from '@angular/core';
import { faFileAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faGithubSquare,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faFileAlt = faFileAlt;
  faGithubSquare = faGithubSquare;
  faLinkedinIn = faLinkedinIn;
  faBars = faBars;
  isMobile = false;
  isMenuOpen = false;

  ngOnInit() {
    if (window.innerWidth < 1020) {
      this.isMobile = true;
    }
  }

  onToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onResize(event) {
    if (event.target.innerWidth < 1020) {
      this.isMobile = true;
    } else if (event.target.innerWidth > 1020) {
      this.isMobile = false;
    }
  }
}
