import {
  Component,
  DestroyRef,
  inject,
  OnChanges,
  OnInit,
  signal,
} from '@angular/core';
import { NewsService } from '../../../pages/news/news.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TopicLinkComponent } from '../../components/topic-link/topic-link.component';

@Component({
  selector: 'app-aside',
  imports: [TopicLinkComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent implements OnInit, OnChanges {
  private newsService = inject(NewsService);
  activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  activeParam = signal<string>('');
  topics = [
    {
      label: 'Business',
      param: 'business',
    },
    {
      label: 'Entertainment',
      param: 'entertainment',
    },
    {
      label: 'General',
      param: 'general',
    },
    {
      label: 'Health',
      param: 'health',
    },
    {
      label: 'Science',
      param: 'science',
    },
    {
      label: 'Sports',
      param: 'sports',
    },
    {
      label: 'Technology',
      param: 'technology',
    },
  ];

  ngOnInit() {
    const subscription = this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        if (params['topic'] && this.activeParam() !== params['topic']) {
          this.activeParam.set(params['topic']);
          this.newsService.loadNews('topic', params['topic']);
        }
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  ngOnChanges() {
    const subscription = this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        if (params['topic'] && this.activeParam() !== params['topic']) {
          this.newsService.loadNews('topic', params['topic']);
        }
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
