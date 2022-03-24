import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateURL: "./app.component.html",
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
