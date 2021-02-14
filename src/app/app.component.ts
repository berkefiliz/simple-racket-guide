import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isDarkTheme: boolean = false;
  isMobile: boolean = false;

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;

    if (window.innerWidth < 1000) {
      this.isMobile = true;
    }
  }

  @ViewChild('sidebarMobile') sbMob: any;
  @ViewChild('sidebarPc') sbPc: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = (window.innerWidth < 1000);
  }

  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
  }

  ESSENTIALS = [
    {title: "Welcome", link: ""},
    {title: "About the guide", link: "about-the-guide"},
    {title: "Setting up Dr Racket", link: "setup-racket"},
  ];

  COURSES = [
    {title: "Variable Types", link: "variable-types"},
  ];

  EXERCISES = [
    {title: "Racket Basics", link: "exercise1"},
  ];

}
