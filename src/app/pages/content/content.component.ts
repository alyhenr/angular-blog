import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  private id: string | null = '';

  imgUrl: string | undefined = '';
  title: string | undefined = '';
  description: string | undefined = '';

  constructor(private route: ActivatedRoute) {}

  setComponentContent(): void {
    const content = data.find((data) => data.id === this.id);
    this.imgUrl = content?.imgUrl;
    this.title = content?.title;
    this.description = content?.description;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setComponentContent();
  }
}
