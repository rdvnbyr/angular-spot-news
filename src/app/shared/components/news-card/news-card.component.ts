import { Component, input } from '@angular/core';
import { Headline } from '../../models/app.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news-card',
  imports: [DatePipe],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
})
export class NewsCardComponent {
  headline = input<Headline>();
}
