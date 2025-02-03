import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topic-link',
  imports: [RouterLink],
  templateUrl: './topic-link.component.html',
  styleUrl: './topic-link.component.scss',
})
export class TopicLinkComponent {
  link = input.required<string>();
  activeParam = input.required<boolean>();
  param = input.required<{ [key: string]: string }>();
  label = input.required<string>();
}
