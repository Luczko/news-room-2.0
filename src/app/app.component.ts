import { Component } from '@angular/core';
import { News, NEWS } from './news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'news-room';

  news: News[] = NEWS;

  onAdd(item: News): void {
    this.news.unshift(item);
  }
  voteUp(item: News): void {
    item.votes += 1;
  }
}
