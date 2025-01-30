import { Component } from '@angular/core';
import { NewsComponent } from "../news/news.component";

@Component({
  selector: 'app-home',
  imports: [NewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  allNews: any[] = [];

  constructor() {}

  ngOnInit() {
    
  }
}
