import { Component } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
})
export class MainCardComponent {
  image: string =
    'https://img.freepik.com/free-photo/vivid-transparent-orange-autumn-leaf_23-2148239677.jpg';
  title: string = 'Title Placeholder';
  textContent: string = 'Paragrapgh Placeholder';
}
