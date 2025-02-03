import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { Headline } from '../../shared/models/app.model';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

const API_URL = 'https://real-time-news-data.p.rapidapi.com';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private appService = inject(AppService);
  headlines = signal<Headline[]>([]);
  headline = signal<Headline | null>(null);
  isFetching = signal<boolean>(false);
  error = signal<string>('');
  private http = inject(HttpClient);
  private router = inject(Router);

  loadNews(headline: 'top' | 'topic', topic?: string) {
    this.isFetching.set(true);
    let httpQuery = `${this.appService.apiUrl}/${headline}-headlines?country=us`;
    if (topic) {
      const date = new Date();
      date.setDate(date.getDate() - 1);
      const dateStr = date.toISOString().split('T')[0];
      httpQuery = `${this.appService.apiUrl}/everything?q=${topic}&from=${dateStr}&sortBy=popularity`;
    }
    return this.http
      .get<{ status: string; articles: Headline[] }>(httpQuery, {
        headers: {
          Authorization: `${this.appService.apiKey}`,
        },
      })
      .pipe(
        map(
          (res) => {
            console.log('res', res);
            if (res.status !== 'ok') {
              throwError(() => new Error('Failed to fetch news headlines'));
            }
            return res.articles;
          },
          catchError(() =>
            throwError(() => new Error('Failed to fetch news headlines'))
          )
        )
      )
      .subscribe({
        next: (headlines) => {
          this.headlines.set(headlines);
          this.isFetching.set(false);
        },
        error: (err) => {
          this.error.set(err.message);
          this.isFetching.set(false);
        },
      });
  }

  loadTopicNewsBySection(section: string) {}

  loadLocalNews(geo: string) {}

  getNewsById(id: string) {}

  searchNews(query: string) {}

  loadNewsDetail(title: string) {
    const findHeadline = this.headlines().find(
      (headline) => headline.title === title
    );
    this.headline.set(findHeadline || null);
    this.router.navigate(['/article', title]);
  }
}
