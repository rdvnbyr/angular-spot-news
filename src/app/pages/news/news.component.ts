import { Component, inject } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  private newsService = inject(NewsService);

  constructor() {}

  get news() {
    return this.newsService.news;
  }

  ngOnInit() {
    this.newsService.loadNews('top');
  }
}
