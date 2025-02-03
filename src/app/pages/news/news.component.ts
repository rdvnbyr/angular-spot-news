import { Component, DestroyRef, inject, input } from '@angular/core';
import { NewsService } from './news.service';
import { NewsCardComponent } from '../../shared/components/news-card/news-card.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [NewsCardComponent, LoadingComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  private newsService = inject(NewsService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  constructor() {}

  get headlines() {
    return this.newsService.headlines;
  }

  get isFetching() {
    return this.newsService.isFetching;
  }

  ngOnInit() {
    const subscription = this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        if (!params['topic']) {
          this.newsService.loadNews('top');
        }
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
