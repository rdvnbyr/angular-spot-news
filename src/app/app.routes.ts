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
    path: 'article/:title',
    loadComponent: () =>
      import('./pages/news/news-detail/news-detail.component').then(
        (m) => m.NewsDetailComponent
      ),
  },
];
