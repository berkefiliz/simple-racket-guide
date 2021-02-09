import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pywracket';

  ESSENTIALS = [
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
  ];
}
