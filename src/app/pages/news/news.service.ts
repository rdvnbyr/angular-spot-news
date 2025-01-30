import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

const API_URL = 'https://real-time-news-data.p.rapidapi.com';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  news = signal<any[]>([]);
  private http = inject(HttpClient);

  loadNews(headline: 'top' | 'topic') {
    return this.http
      .get<{ status: string; data: any[] }>(
        `${API_URL}/${headline}-headlines?limit=100&country=US&lang=en`,
        {
          headers: {
            'x-rapidapi-key':
              '607fc2b0aemshfd3cf29dbb812c0p1c72edjsn5d54c8a70a17',
            'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com',
          },
        }
      )
      .pipe(map((data) => data.data))
      .subscribe((data) => {
        // this.news = data;
        console.log(data);          
      });
  }

  loadTopicNewsBySection(section: string) {}

  loadLocalNews(geo: string) {}

  getNewsById(id: string) {}

  searchNews(query: string) {}
}
