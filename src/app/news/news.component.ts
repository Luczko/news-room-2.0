import { Component, Input, Output, EventEmitter } from '@angular/core';
import { News, NEWS } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  @Input() news: News[] = [];
  @Output() votes = new EventEmitter<News>();
  red = 'rgb(148, 0, 0)';
  green = 'rgb(0, 148, 86)';
}
