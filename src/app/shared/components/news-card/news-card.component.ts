import { Component, inject, input } from '@angular/core';
import { Headline } from '../../models/app.model';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
})
export class NewsCardComponent {
  headline = input<Headline>();

}
