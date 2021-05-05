import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { News, NEWS } from '../news';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Output() newNews = new EventEmitter<News>();

  add = false;

  news: News = {
    title: '',
    news: '',
    photoUrl: '',
    votes: 0,
    date: '',
  };

  addNews(): void {
    this.news.date = new Date();
    this.newNews.emit(this.news);
    this.news = {
      title: '',
      news: '',
      photoUrl: '',
      votes: 0,
      date: '',
    };
  }
  switchAdd(): void {
    this.add = !this.add;
  }
}
