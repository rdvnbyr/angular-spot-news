import { Component } from '@angular/core';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-topic-headlines',
  imports: [NewsComponent],
  templateUrl: './topic-headlines.component.html',
  styleUrl: './topic-headlines.component.scss'
})
export class TopicHeadlinesComponent {

}
