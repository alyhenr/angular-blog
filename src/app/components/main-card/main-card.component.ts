import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
})
export class MainCardComponent {
  @Input()
  id: string = '';
  @Input()
  imageUrl: string = '';
  @Input()
  title: string = '';
  @Input()
  textContent: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
