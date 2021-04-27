import { Component, Input } from '@angular/core';
import { News, NEWS } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  @Input() news: News[] = [];
}
