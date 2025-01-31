import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { Headline } from '../../shared/models/app.model';

const API_URL = 'https://real-time-news-data.p.rapidapi.com';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  headlines = signal<Headline[]>([]);
  isFetching = signal<boolean>(false);
  error = signal<string>('');
  private http = inject(HttpClient);

  loadNews(headline: 'top' | 'topic') {
    this.isFetching.set(true);
    return this.http
      .get<{ status: string; data: Headline[] }>(
        `${API_URL}/${headline}-headlines?limit=100&country=US&lang=en` + (headline === 'topic' ? '&topic=WORLD' : ''),
        {
          headers: {
            'x-rapidapi-key':
              '607fc2b0aemshfd3cf29dbb812c0p1c72edjsn5d54c8a70a17',
            'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com',
          },
        }
      )
      .pipe(
        map(
          (res) => {
            if (res.status !== 'OK' || !res.data) {
              throwError(() => new Error('Failed to fetch news headlines'));
            }
            return res.data;
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
}
