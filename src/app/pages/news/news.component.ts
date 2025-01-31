import { Component, inject, input } from '@angular/core';
import { NewsService } from './news.service';
import { NewsCardComponent } from '../../shared/components/news-card/news-card.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-news',
  imports: [NewsCardComponent, LoadingComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  private newsService = inject(NewsService);
  newsParam = input.required<'top' | 'topic'>();

  constructor() {}

  get headlines() {
    return this.newsService.headlines;
  }

  get isFetching() {
    return this.newsService.isFetching;
  }

  ngOnInit() {
    this.newsService.loadNews(this.newsParam());
  }
}
