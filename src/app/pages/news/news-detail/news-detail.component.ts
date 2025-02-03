import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news-detail',
  imports: [DatePipe],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss',
})
export class NewsDetailComponent implements OnInit {
  private newsService = inject(NewsService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  get headline() {
    if(!this.newsService.headline) {} 
    return this.newsService.headline;
  }

  ngOnInit() {
    const subscription = this.activatedRoute.params.subscribe({
      next: (params) => {
        if (params['title']) {
          this.newsService.loadNewsDetail(params['title']);
        }
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
