import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'top-headlines',
    pathMatch: 'full',
  },
  {
    path: 'top-headlines',
    loadComponent: () =>
      import('./pages/top-headlines/top-headlines.component').then(
        (m) => m.TopHeadlinesComponent
      ),
  },
  {
    path: 'topic-headlines',
    loadComponent: () =>
      import('./pages/topic-headlines/topic-headlines.component').then(
        (m) => m.TopicHeadlinesComponent
      ),
  },
  {
    path: 'news-detail/:storyId',
    loadComponent: () =>
      import('./pages/news/news-detail/news-detail.component').then(
        (m) => m.NewsDetailComponent
      ),
  },
];
