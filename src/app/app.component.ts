import { Component, OnInit } from '@angular/core';
import { News, NEWS } from './news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'news-room';

  news: News[] = NEWS;
  sortedNews: News[] = [];

  sortingNews(): void {
    this.sortedNews = [...this.news].sort((a, b) => {
      return b.votes - a.votes;
    });
  }

  onAdd(item: News): void {
    this.news.unshift(item);
    this.sortingNews();
  }
  voteUp(item: News): void {
    item.votes += 1;
    this.sortingNews();
  }
  onDelete(item: News): void {
    this.news = this.news.filter((e) => e !== item);
    this.sortingNews();
  }

  ngOnInit(): void {
    this.sortingNews();
  }
}
