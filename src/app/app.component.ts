import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isDarkTheme: boolean = false;

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
    console.log(localStorage.getItem('theme'));
  }

  ESSENTIALS = [
    {title: "Welcome", link: ""},
    {title: "About the guide", link: "about-the-guide"},
    {title: "Setting up Dr Racket", link: "setup-racket"},
  ];

  COURSES = [
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
  ];

  EXERCISES = [
    {title: "Racket Basics", link: "exercise1"},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
    {title: "Placeholder", link: ""},
  ];

}
