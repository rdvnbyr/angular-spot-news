import { Component } from '@angular/core';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-top-headlines',
  imports: [NewsComponent],
  templateUrl: './top-headlines.component.html',
  styleUrl: './top-headlines.component.scss',
})
export class TopHeadlinesComponent {}
