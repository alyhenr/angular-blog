import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  @Input()
  id: string = '';
  @Input()
  imageUrl: string = '';
  @Input()
  title: string = '';
  @Input()
  textContent: string = '';

  constructor() {}

  ngOnInit() {
    console.log('small card');
  }
}
