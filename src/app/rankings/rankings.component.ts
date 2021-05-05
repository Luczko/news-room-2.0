import { Component, OnInit, Input } from '@angular/core';
import { News, NEWS } from '../news';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css'],
})
export class RankingsComponent implements OnInit {
  constructor() {}
  @Input() news: News[] = [];
  ngOnInit(): void {}
}
