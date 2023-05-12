import { Component } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  image: string = 'https://wallpaperaccess.com/full/2500093.jpg';
  title: string = 'Title Placeholder';
  textContent: string = 'Paragraph Placeholder';
}
